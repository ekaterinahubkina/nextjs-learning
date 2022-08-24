import type { NextPage, GetServerSideProps } from 'next';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { StoriesList } from 'components/stories-list/StoriesList';
import { storiesFetcher } from 'services/fetchers';
import { Stories } from 'models/stories';

const queryClient = new QueryClient();

export const getServerSideProps: GetServerSideProps = async () => {
    const stories = await queryClient.fetchQuery(['dream-stories'], storiesFetcher);

    return {
        props: {
            stories
        },
    }
}

type Props = {
    stories: Stories
}

const Strapi: NextPage<Props> = ({ stories }) => {

    return (
        <QueryClientProvider client={queryClient}>
            <StoriesList stories={stories} />
        </QueryClientProvider>
    )
}

export default Strapi