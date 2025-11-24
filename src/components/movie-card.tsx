import { Star, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface Movie {
  id: string;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  image: string;
  ageRating: string;
}

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
}

export function MovieCard({ movie, onSelectMovie }: MovieCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Badge className="absolute top-3 right-3 bg-yellow-500 text-black hover:bg-yellow-600">
          {movie.ageRating}
        </Badge>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-500 text-yellow-500" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            <span>{movie.duration} min</span>
          </div>
        </div>
        
        <h3 className="mb-1">{movie.title}</h3>
        <p className="mb-3 text-sm text-gray-300">{movie.genre}</p>
        
        <Button 
          onClick={() => onSelectMovie(movie)}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Comprar Ingresso
        </Button>
      </div>
    </div>
  );
}
