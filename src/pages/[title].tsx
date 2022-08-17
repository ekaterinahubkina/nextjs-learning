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
  const { url } = context.query;
  console.log(url)
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