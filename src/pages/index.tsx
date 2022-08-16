import type { NextPage } from 'next';
import { NewsList } from 'components/news-list/NewsList';

const Home: NextPage = () => {
  return (
    <NewsList section='home' />
  )
}

export default Home
