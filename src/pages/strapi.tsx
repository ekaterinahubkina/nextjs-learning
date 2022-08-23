import type { NextPage, GetServerSideProps } from 'next';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { StoriesList } from 'components/stories-list/StoriesList';

const queryClient = new QueryClient();

const Strapi: NextPage = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <StoriesList />
        </QueryClientProvider>
    )
}

export default Strapi