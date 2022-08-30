export type Story = {
    id: number,
    attributes: {
        title: string,
        description: string,
        createdAt: string,
        image: {
            data: {
                attributes: {
                    url: string
                }
            }
        },
        category: {
            data: {
                attributes: {
                    name: string,
                }
            }
        }
    }
}

export type Stories = {
    data: Story[],
}

export type StoryFull = {
    data: Story,
}