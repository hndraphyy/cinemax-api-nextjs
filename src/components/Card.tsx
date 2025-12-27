import { Movie } from "@/types/movie";

interface MovieProps {
  movie: Movie;
}

export default function Card({ movie }: MovieProps) {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}
