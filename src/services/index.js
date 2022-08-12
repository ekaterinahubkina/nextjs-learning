export const fetcher = async (path, section = "home") => {
  const res = await fetch(
    `${path}/svc/topstories/v2/${section}.json?api-key=${process.env.NEXT_PUBLIC_API_TOKEN}`
  );
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.status = res.status;
    throw error;
  }
  return res.json();
};
