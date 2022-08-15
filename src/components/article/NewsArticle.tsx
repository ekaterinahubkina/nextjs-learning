import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "services/fetcher";
import { Article, News } from "models/news";
import { Error } from "models/error";
import { Category } from "components/design-system/Category/Category";
import { Title } from "components/design-system/Title/Title";
import { Date } from "components/common/Date/Date";
import styles from './styles.module.scss';

export const NewsArticle: React.FunctionComponent = () => {
    const [article, setArticle] = useState<Article>({} as Article);
    const router = useRouter();
    const { data, error } = useSWR<News, Error>('home', fetcher);

    useEffect(() => {
        if (router.isReady) {
            const { title } = router.query;
            const article = data?.results.find((item) => item.title === title);
            setArticle(article as Article)
        }
    }, [router.isReady, router.query, data?.results])

    if (!data && !error) return <div>Loading..</div>
    if (error) return <div>{error.message}</div>

    return (
        <>
            {article &&
                <article className={styles.article}>
                    <div className={styles.wrapper}>
                        <Category>{article.section}</Category>
                        {article.published_date && <Date dateString={article.published_date} />}
                    </div>
                    {article.multimedia ?
                        <Image className={styles.image} src={article.multimedia[0].url}
                            priority alt='article image' width={375} height={280} layout='responsive'></Image>
                        : null
                    }
                    <div className={styles.info}>
                        <Title>{article.title}</Title>
                        <h5 className={styles.subtitle}>{article.abstract}</h5>
                        <p className={styles.text}>
                            Vestibulum in enim pretium, vehicula lacus ut, euismod velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In non sagittis diam. Morbi scelerisque lectus at enim aliquam dignissim. Phasellus ac mauris at elit hendrerit ullamcorper a a arcu. Nunc pellentesque eleifend posuere. Etiam bibendum sollicitudin nulla, vel mollis eros feugiat a. Aenean vestibulum efficitur massa.
                            Phasellus fermentum libero sed feugiat feugiat. Nullam eu nunc in augue consequat vestibulum id a ex. Aliquam iaculis pretium tortor quis ornare. Suspendisse dignissim nisi nec urna mollis, sit amet malesuada nibh iaculis. Fusce ornare vulputate magna quis ullamcorper. Pellentesque scelerisque magna ac pharetra ornare. Suspendisse vitae libero sed leo semper aliquam. Cras commodo magna et nunc fringilla commodo. Suspendisse interdum lectus sit amet turpis commodo fringilla. Duis tincidunt blandit turpis vel luctus. Fusce id quam eu tellus ultrices ultrices et sit amet tortor. Duis id ipsum leo. Donec semper, massa quis malesuada lobortis, leo sapien tempor enim, a egestas ipsum risus vitae ex. Cras posuere interdum ante, congue laoreet diam dignissim vitae.
                            Sed vestibulum suscipit ultricies. Nullam nulla nulla, vestibulum eu imperdiet non, feugiat at eros. Integer ac odio mauris. Curabitur quam magna, tincidunt sit amet nisl eu, convallis lobortis elit. Nulla tempus metus a arcu posuere, sit amet venenatis quam scelerisque. Donec volutpat nunc a leo ultrices blandit. Suspendisse potenti. Etiam ac neque tellus. Cras enim ligula, bibendum ac convallis vitae, tristique a sem. Etiam rhoncus sem varius lorem pulvinar vestibulum. Nulla facilisi. Quisque congue massa vel accumsan aliquam. Donec ultrices sit amet justo ac vulputate.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vehicula lobortis leo eu bibendum. Phasellus blandit congue purus, at varius felis fringilla vitae. Nullam pharetra laoreet molestie. Etiam rhoncus magna vitae interdum semper. Mauris ultrices justo eu sem semper faucibus. Duis vel sem ut metus egestas consectetur non eu nunc. Duis eu eleifend lorem, vel vestibulum urna. Donec hendrerit, massa et sollicitudin suscipit, odio risus accumsan nisi, in mollis ante lectus vitae lorem. Sed vehicula sollicitudin bibendum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu risus, fermentum nec tincidunt sit amet, ullamcorper a est. Maecenas mollis mi id lorem viverra commodo. Mauris pellentesque augue ante, tempus rhoncus leo placerat quis. Suspendisse dignissim posuere est, ut faucibus libero vehicula nec. Praesent eleifend lectus a diam ornare luctus. Suspendisse sem arcu, venenatis nec lacus sed, dictum commodo lacus. Vestibulum commodo, massa sit amet congue volutpat, dolor nunc porttitor tortor, vitae aliquet neque nulla eu leo. Pellentesque aliquet vitae mauris sagittis suscipit.
                        </p>
                    </div>
                </article>}
        </>
    )
}