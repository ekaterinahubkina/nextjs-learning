import type { NextPage, GetServerSideProps } from 'next';
import { newsFetcher } from 'services/fetchers';
import { NewsList } from 'components/news-list/NewsList';

const Home: NextPage = () => {
  return (
    <NewsList section='home' />
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await newsFetcher();
  return {
    props: {
      fallback: {
        data
      }
    }
  }
}
