import { Movie } from "@/types/movie";
import Image from "next/image";

interface MovieProps {
  movie: Movie;
}

export default function Card({ movie }: MovieProps) {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-full truncate">{movie.title}</h1>
      <div className="relative h-140 md:h-100 lg:h-90 rounded-2xl">
        <Image
          src={`${IMG_URL}${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
