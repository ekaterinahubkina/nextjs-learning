import { useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import {
    QueryClient,
    QueryClientProvider,
    Hydrate,
    dehydrate
} from '@tanstack/react-query';
import { StoriesArticle } from 'components/stories-article/StoriesArticle';
import { storyFetcher } from 'services/fetchers';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const queryClient = new QueryClient();

    if (typeof id === 'string') {
        await queryClient.fetchQuery(['dream-story', id], () => storyFetcher(id));

        return {
            props: {
                id,
                dehydratedState: dehydrate(queryClient),
            },
        }
    }
    return {
        notFound: true
    }
}

type Props = {
    dehydratedState: {
        queries: {
            state: {},
            queryKey: [],
        }[]
    },
    id: string
}

const StoryFull: NextPage<Props> = ({ dehydratedState, id }) => {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                <StoriesArticle id={id} />
            </Hydrate>
        </QueryClientProvider>
    )
}

export default StoryFull