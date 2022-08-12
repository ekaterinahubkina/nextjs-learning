import type { NextPage } from 'next';
import { useNews } from 'hooks';
import { NewsCardType } from 'models/NewsCardType';
import { NewsCard } from 'components/common/NewsCard/NewsCard';


const Home: NextPage = () => {
  const { news, isLoading, error } = useNews(process.env.NEXT_PUBLIC_BASE_PATH);

  if (isLoading) return <div>Loading..</div>
  if (error) {
    console.log(error)
    return <div>{error.info}</div>
  }
  return (
    <>
      {news.results.map((item: NewsCardType) => (
        <NewsCard key={item.title} news={item} />
      ))}
    </>
  )
}

export default Home
