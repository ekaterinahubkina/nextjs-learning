export const fetcher = async (...args) => {
    const res = await fetch(...args);
    if (!res.ok) {
        throw new Error('An error occurred while fetching the data.')
    }
    return res.json();
}