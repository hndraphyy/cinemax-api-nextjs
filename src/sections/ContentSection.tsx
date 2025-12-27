"use client"

import { useState, useEffect } from "react";
import { getPopularMovie } from "@/lib/tmdb";
import { Movie } from "@/types/movie";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function ContentSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPopularMovie();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header title="Popular Movies" />
      {movies.map((list) => (
        <Card key={list.id} movie={list} />
      ))}
    </div>
  );
}
