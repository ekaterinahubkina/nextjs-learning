import type { GetServerSideProps, NextPage } from 'next';
import { newsFetcher } from 'services/fetchers';
import { SWRConfig } from "swr";
import { News } from 'models/news';
import { NewsArticle } from 'components/news-article/NewsArticle';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await fetcher();
//   const article = data.find((el) => el.title === context.query.title);
//   return {
//     props: {
//       fallback: {
//         '/[title]': article
//       }
//     },
//   }
// }

type Props = {
  data: News
}

const NewsFull: NextPage<Props> = () => {
  return (
    <NewsArticle />
  )
}

export default NewsFull

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await newsFetcher();
  return {
    props: {
      data
    }
  }
}