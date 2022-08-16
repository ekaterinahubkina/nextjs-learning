import type { GetServerSideProps, NextPage } from 'next';
import { articleFetcher } from 'services/fetchers';
import { NewsArticle } from 'components/news-article/NewsArticle';

const NewsFull: NextPage = () => {
  return (
    <NewsArticle />
  )
}

export default NewsFull

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.query.url || Array.isArray(context.query.url)) {
    return {
      props: {
        fallback: {
          error: 'not found'
        }
      }
    }
  }
  const { url } = context.query;
  const data = await articleFetcher(url);
  return {
    props: {
      fallback: {
        data
      }
    }
  }
}