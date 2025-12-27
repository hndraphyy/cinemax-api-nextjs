import { TiStarFullOutline } from "react-icons/ti";
import { Movie } from "@/types/movie";
import Image from "next/image";

interface MovieProps {
  movie: Movie;
}

export default function Card({ movie }: MovieProps) {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      <div className="relative h-140 md:h-100 lg:h-90  overflow-hidden shadow-lg">
        <Image
          src={`${IMG_URL}${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t space-y-2 from-black via-black/70 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h1 className="w-full truncate text-white font-bold text-lg leading-tight">
            {movie.title}
          </h1>
          <span className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
            <TiStarFullOutline className="text-yellow-400" />
            <span className="text-white">{movie.vote_average.toFixed(1)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
