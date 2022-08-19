import type { NextPage, GetServerSideProps } from 'next';
import { newsFetcher } from 'services/fetchers';
import { NewsList } from 'components/news-list/NewsList';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await newsFetcher();
  return {
    props: {
      fallback: {
        'home': data
      }
    }
  }
}

const Home: NextPage = () => {

  return (
    <NewsList section='home' />
  )
}

export default Home