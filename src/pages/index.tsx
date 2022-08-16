import type { NextPage, GetServerSideProps } from 'next';
import { newsFetcher } from 'services/fetchers';
import { News } from 'models/news';
import { NewsList } from 'components/news-list/NewsList';

type Props = {
  data: News
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <NewsList section='home' data={data}/>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await newsFetcher();
  return {
    props: {
      data
    }
  }
}
