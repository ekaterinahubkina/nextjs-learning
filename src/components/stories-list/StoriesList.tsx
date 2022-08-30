import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { storiesFetcher } from "services/fetchers";
import { Stories } from "models/stories";
import { Category } from "components/common/Category/Category";
import { Date } from "components/common/Date/Date";
import { Title } from "components/common/Title/Title";
import styles from './styles.module.scss';

export const StoriesList: React.FunctionComponent = () => {
    const { isLoading, data, error } = useQuery<Stories>(['dream-stories'], storiesFetcher,
        { refetchOnMount: false, refetchOnWindowFocus: false });

    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Stories not found</div>
    if (error instanceof Error) return <div>{error.message}</div>

    return (
        <>
            {data.data.map((item) => (
                <Link key={item.id} href={{ pathname: `/story/${encodeURIComponent(item.attributes.title)}`, query: { id: item.id } }}>
                    <a className={styles.link}>
                        <article className={styles.card}>
                            <div className={styles.info}>
                                <div className={styles.wrapper}>
                                    <Category>{item.attributes.category.data.attributes.name}</Category>
                                    <Date isPositionBottom dateString={item.attributes.createdAt} />
                                </div>
                                <Title>{item.attributes.title}</Title>
                                <p className={styles.abstract}>{item.attributes.description}</p>
                            </div>
                            <Image className={styles.image} src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt='something'
                                width={375} height={280} layout='responsive' priority></Image>
                        </article>
                    </a>
                </Link>
            ))
            }
        </>
    )
}