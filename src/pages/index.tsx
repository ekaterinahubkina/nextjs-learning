import type { NextPage } from 'next';
import { useNews } from 'hooks';
import { NewsCard } from 'components/common/NewsCard/NewsCard';
import { KEY, URL } from 'constants/constants';

const Home: NextPage = () => {
  const { news, isLoading, isError } = useNews(URL, KEY);

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  return (
    <>
      {news.results.map((item: {}) => (
        <NewsCard key={item.title} news={item} />
      ))}
    </>

  )
}

export default Home
