import { Star, Clock, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Movie } from "./movie-card";

interface MovieHeroProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
}

export function MovieHero({ movie, onSelectMovie }: MovieHeroProps) {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl">
      <img
        src={movie.image}
        alt={movie.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">
              Em Destaque
            </Badge>
            
            <h1 className="mb-4 text-white">{movie.title}</h1>
            
            <div className="mb-4 flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <Star className="size-5 fill-yellow-500 text-yellow-500" />
                <span>{movie.rating.toFixed(1)}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-5" />
                <span>{movie.duration} min</span>
              </div>
              <Badge variant="outline" className="border-white text-white">
                {movie.ageRating}
              </Badge>
            </div>
            
            <p className="mb-6 text-gray-300">{movie.genre}</p>
            
            <div className="flex gap-3">
              <Button 
                onClick={() => onSelectMovie(movie)}
                className="bg-red-600 hover:bg-red-700"
                size="lg"
              >
                <Play className="mr-2 size-5" />
                Comprar Ingresso
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                Mais Informações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}