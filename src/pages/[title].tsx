import type { GetServerSideProps, NextPage } from 'next';
import { NewsArticle } from 'components/newsArticle/NewsArticle';
import { fetcher } from 'services/fetcher';
import { SWRConfig } from "swr";
import { News } from 'models/news';

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

const NewsFull: NextPage<Props> = ({ data }) => {
  return (
    <NewsArticle data={data}/>
  )
}

export default NewsFull

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetcher();
  return {
    props: {
      data
    }
  }
}