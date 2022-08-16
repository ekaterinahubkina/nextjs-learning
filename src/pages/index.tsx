import type { NextPage, GetServerSideProps } from 'next';
import { NewsList } from 'components/newsList/NewsList';
import { fetcher } from 'services/fetcher';
import { News } from 'models/news';

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
  const data = await fetcher();
  return {
    props: {
      data
    }
  }
}
