"use client";

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

  return (
    <div className="pb-20">
      <Header title="Popular Movies" />
      <div className="mt-38">
        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-white text-xl animate-pulse">
              Loading Movies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {movies.map((list) => (
              <Card key={list.id} movie={list} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
