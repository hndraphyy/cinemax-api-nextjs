"use server";

const BASE_URL = process.env.TMDB_BASE_URL;
const ACCESS_TOKEN = process.env.TMDB_API_ACCESS;

async function TMDBFetch(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Gagal ambil data TMDB");

  return res.json();
}

export async function getPopularMovie() {
  return TMDBFetch("/movie/popular?language=en-US&page=1");
}
