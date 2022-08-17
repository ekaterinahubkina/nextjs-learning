import type { GetServerSideProps, NextPage } from 'next';
import { articleFetcher } from 'services/fetchers';
import { NewsArticle } from 'components/news-article/NewsArticle';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.query;
  if (typeof url === 'string') {
    const data = await articleFetcher(url);
    return {
      props: {
        fallback: {
          data
        }
      }
    }
  }
  return {
    notFound: true
  }
}

const NewsFull: NextPage = () => {
  return (
    <NewsArticle />
  )
}

export default NewsFull