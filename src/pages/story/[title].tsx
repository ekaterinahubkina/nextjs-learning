import { GetServerSideProps, NextPage } from 'next';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { StoriesArticle } from 'components/stories-article/StoriesArticle';
import { storyFetcher } from 'services/fetchers';
import { StoryFull } from 'models/stories';

const queryClient = new QueryClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    if (typeof id === 'string') {
        const story = await queryClient.fetchQuery(['dream-story', id], () => storyFetcher(id));

        return {
            props: {
                id,
                story
            },
        }
    }
    return {
        notFound: true
    }
}

type Props = {
    story: StoryFull,
    id: string
}

const StoryFull: NextPage<Props> = ({ story, id }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <StoriesArticle story={story} id={id} />
        </QueryClientProvider>
    )
}

export default StoryFull