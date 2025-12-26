const BASE_URL = process.env.TMDB_BASE_URL;
const ACCESS_TOKEN = process.env.TMDB_API_ACCESS;

async function tmdbFetch(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`TMDB Error: ${res.statusText}`);
  return res.json();
}

export const getPopularMovie = () =>
  tmdbFetch("movie/popular?language=en-US&page=1");
