import type { NextPage, GetServerSideProps } from 'next';
import { newsFetcher } from 'services/fetchers';
import { NewsList } from 'components/news-list/NewsList';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { section } = context.query;

  if (typeof section === 'string') {
    try {
      const data = await newsFetcher(section);
      return {
        props: {
          section,
          fallback: {
            [section]: data
          }
        }
      }
    } catch (err) {
      return {
        notFound: true,
      }
    }
  }
  return {
    notFound: true,
  }
}

type Props = {
  section: string
}

const NewsSection: NextPage<Props> = ({ section }) => {

  return (
    <NewsList section={section} />
  )
}

export default NewsSection