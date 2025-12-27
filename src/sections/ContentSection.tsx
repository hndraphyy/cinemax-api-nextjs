"use client";

import { useState, useEffect } from "react";
import { getPopularMovie } from "@/lib/tmdb";
import { Movie } from "@/types/movie";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function ContentSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="pb-20">
      <Header
        title="Popular Movies"
        onChange={(e) => setSearch(e.target.value)}
        id=""
      />
      <div className="mt-40 md:mt-30">
        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-white text-xl animate-pulse">
              Loading Movies...
            </p>
          </div>
        ) : (
          <>
            {filteredMovies.length === 0 ? (
              <div className="text-center text-zinc-500 py-20">
                Film "{search}" Not Found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {filteredMovies.map((list) => (
                  <Card key={list.id} movie={list} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
