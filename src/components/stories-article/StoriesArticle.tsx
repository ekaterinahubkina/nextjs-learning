import { useRouter } from "next/router";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { StoryFull } from "models/stories";
import { storyFetcher } from "services/fetchers";
import { Category } from "components/common/Category/Category";
import { Title } from "components/common/Title/Title";
import { Date } from "components/common/Date/Date";
import styles from './styles.module.scss';


export const StoriesArticle: React.FunctionComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    const { isLoading, data, error } = useQuery<StoryFull>(['dream-story', id], () => storyFetcher(id));

    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Story not found</div>
    if (error instanceof Error) return <div>{error.message}</div>

    return (
        <article className={styles.article}>
            <div className={styles.wrapper}>
                <Category>{data?.data.attributes.category.data.attributes.name}</Category>
                {data?.data.attributes.createdAt && <Date dateString={data.data.attributes.createdAt} />}
            </div>
            <Image className={styles.image} src={`http://localhost:1337${data.data.attributes.image.data.attributes.url}`} alt='something'
                width={375} height={280} layout='responsive' priority></Image>
            <div className={styles.info}>
                <Title isLarge>{data?.data.attributes.title}</Title>
                <h5 className={styles.subtitle}>{data?.data.attributes.description}</h5>
                <p className={styles.text}>{data?.data.attributes.description}</p>
            </div>
        </article>
    )
}