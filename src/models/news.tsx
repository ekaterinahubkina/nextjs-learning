export type Article = {
    title: string,
    section: string,
    abstract: string,
    published_date: string,
    multimedia: { url: string }[],
    url: string,
}

export type News = {
    results: Article[];
}

export type ArticleFull = {
    abstract: string,
    headline: {
        main: string,
    },
    lead_paragraph: string,
    pub_date: string,
    section_name: string,
    multimedia: { url: string }[],
}

export type NewsFull = {
    response: {
        docs: [
            ArticleFull
        ];
    }
}

