import type { NextPage } from 'next';
import { NewsList } from 'components/newsList/NewsList';

const Home: NextPage = () => {
  return (
    <NewsList section='home' />
  )
}

export default Home
