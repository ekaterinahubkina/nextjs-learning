import { useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import {
    QueryClient,
    QueryClientProvider,
    Hydrate,
    dehydrate
} from '@tanstack/react-query';
import { StoriesList } from 'components/stories-list/StoriesList';
import { storiesFetcher } from 'services/fetchers';

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.fetchQuery(['dream-stories'], storiesFetcher);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

type Props = {
    dehydratedState: {
        queries: {
            state: {},
            queryKey: [],
        }[]
    },
}

const Strapi: NextPage<Props> = ({ dehydratedState }) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                <StoriesList />
            </Hydrate>
        </QueryClientProvider>
    )
}

export default Strapi