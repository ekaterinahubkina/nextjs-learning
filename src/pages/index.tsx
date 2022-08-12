import type { NextPage } from 'next';
import { NewsList } from 'components/news/NewsList';

const Home: NextPage = () => {
  return (
    <NewsList section='home' />
  )
}

export default Home
