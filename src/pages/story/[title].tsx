import { NextPage } from 'next';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { StoriesArticle } from 'components/stories-article/StoriesArticle';

const queryClient = new QueryClient();

const StoryFull: NextPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <StoriesArticle />
        </QueryClientProvider>
    )
}

export default StoryFull