export const fetcher = async (path: string, section: string = "home") => {
  const res = await fetch(
    `${path}/svc/topstories/v2/${section}.json?api-key=${process.env.NEXT_PUBLIC_API_TOKEN}`
  );
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");;
  }
  return res.json();
};
