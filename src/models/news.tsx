export type Article = {
    title: string,
    section: string,
    abstract: string,
    published_date: string,
    multimedia: { url: string }[],
}

export type News = {
    results: Article[];
}