import { useState } from "react";
import { Film, Popcorn } from "lucide-react";
import { MovieCard, Movie } from "./components/movie-card";
import { MovieHero } from "./components/movie-hero";
import { TicketModal } from "./components/ticket-modal";
import {
  PromotionCard,
  Promotion,
} from "./components/promotion-card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components/ui/tabs";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movies: Movie[] = [
    {
      id: "1",
      title: "O Último Desafio",
      genre: "Ação, Aventura",
      duration: 163,
      rating: 8.5,
      image:
        "https://images.unsplash.com/photo-1761948245185-fc300ad20316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3l0ZXJ8ZW58MXx8fHwxNzYzODc2NzMD8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ageRating: "14",
    },
    {
      id: "2",
      title: "Noite Sombria",
      genre: "Terror, Suspense",
      duration: 118,
      rating: 7.8,
      image:
        "https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYzODg0NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ageRating: "16",
    },
    {
      id: "3",
      title: "Aventuras no Reino Perdido",
      genre: "Aventura, Fantasia",
      duration: 145,
      rating: 9.1,
      image:
        "https://images.unsplash.com/photo-1718045240976-2814c42096db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjM5MDQ4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ageRating: "12",
    },
    {
      id: "4",
      title: "Caminhos do Coração",
      genre: "Drama, Romance",
      duration: 127,
      rating: 8.2,
      image:
        "https://images.unsplash.com/photo-1572700432881-42c60fe8c869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGNpbmVtYSUyMHNjZW5lfGVufDF8fHx8MTc2MzkzODI1MXww&ixlib=rb-4.1.0&q=80&w=1080",
      ageRating: "14",
    },
    {
      id: "5",
      title: "Risadas Garantidas",
      genre: "Comédia",
      duration: 102,
      rating: 7.5,
      image:
        "https://images.unsplash.com/photo-1623509658524-6b12a5e5b0a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzkzODI1MXww&ixlib=rb-4.1.0&q=80&w=1080",
      ageRating: "L",
    },
    {
      id: "6",
      title: "Além do Universo",
      genre: "Ficção Científica",
      duration: 156,
      rating: 8.9,
      image:
        "https://images.unsplash.com/photo-1644772310791-deb96e24ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYzOTAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ageRating: "12",
    },
  ];

  const featuredMovie = movies[2]; // Aventuras no Reino Perdido

  const promotions: Promotion[] = [
    {
      id: "1",
      title: "Combo Família",
      description:
        "2 ingressos + 2 pipocas grandes + 2 refrigerantes por apenas R$ 89,90",
      discount: "30% OFF",
      validUntil: "31/12/2025",
      type: "combo",
      image:
        "https://images.unsplash.com/photo-1731004270604-78999bfc0bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3Bjb3JuJTIwY2luZW1hJTIwc25hY2tzfGVufDF8fHx8MTc2MzkwOTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "2",
      title: "Terça Promocional",
      description:
        "Todos os ingressos por R$ 12,00 nas sessões de terça-feira",
      discount: "50% OFF",
      validUntil: "Todas as terças",
      type: "special",
      image:
        "https://images.unsplash.com/photo-1707061803305-58383ee49415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRpY2tldHMlMjBkaXNjb3VudHxlbnwxfHx8fDE3NjM5MzkyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "3",
      title: "Sessão Romântica",
      description:
        "2 ingressos + pipoca média + 2 refrigerantes por R$ 59,90",
      discount: "25% OFF",
      validUntil: "14/02/2026",
      type: "combo",
      image:
        "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjb3VwbGUlMjByb21hbnRpY3xlbnwxfHx8fDE3NjM5MzkyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "4",
      title: "Meia-Entrada Estudante",
      description:
        "Desconto especial para estudantes com carteirinha válida",
      discount: "50% OFF",
      validUntil: "31/12/2025",
      type: "discount",
      image:
        "https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBtb3ZpZSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzYzOTM5MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const emCartaz = movies.slice(0, 4);
  const emBreve = movies.slice(4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Film className="size-8 text-red-600" />
            <h1 className="text-red-600">CineGenerico</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#cartaz"
              className="transition-colors hover:text-red-600"
            >
              Em Cartaz
            </a>
            <a
              href="#breve"
              className="transition-colors hover:text-red-600"
            >
              Em Breve
            </a>
            <a
              href="#promocoes"
              className="transition-colors hover:text-red-600"
            >
              Promoções
            </a>
            <a
              href="#cinemas"
              className="transition-colors hover:text-red-600"
            >
              Cinemas
            </a>
            <Popcorn className="size-5 text-red-600" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <MovieHero
            movie={featuredMovie}
            onSelectMovie={handleSelectMovie}
          />
        </section>

        {/* Movies Section */}
        <section id="cartaz">
          <Tabs defaultValue="cartaz" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="cartaz">
                Em Cartaz
              </TabsTrigger>
              <TabsTrigger value="breve">Em Breve</TabsTrigger>
            </TabsList>

            <TabsContent value="cartaz">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {emCartaz.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onSelectMovie={handleSelectMovie}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent id="breve" value="breve">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {emBreve.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onSelectMovie={handleSelectMovie}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Promotions Section */}
        <section id="promocoes" className="mt-16">
          <h2 className="mb-6">Promoções Especiais</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promotions.map((promotion) => (
              <PromotionCard
                key={promotion.id}
                promotion={promotion}
              />
            ))}
          </div>
        </section>

        {/* Cinemas Section */}
        <section id="cinemas" className="mt-16">
          <h2 className="mb-6">Nossas Salas</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-2">
                CineGenerico Shopping Center
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Av. Principal, 1000 - Centro
              </p>
              <p className="text-sm text-gray-500">
                8 salas • Estacionamento • Alimentação
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-2">CineGenerico Plaza</h3>
              <p className="mb-4 text-sm text-gray-600">
                Rua das Flores, 500 - Jardins
              </p>
              <p className="text-sm text-gray-500">
                6 salas • IMAX • VIP
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-2">CineGenerico Park</h3>
              <p className="mb-4 text-sm text-gray-600">
                Av. dos Estados, 2500 - Zona Sul
              </p>
              <p className="text-sm text-gray-500">
                10 salas • 4DX • D-BOX
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-white py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>
            © 2025 CineGenerico - Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* Ticket Modal */}
      <TicketModal
        movie={selectedMovie}
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMovie(null);
        }}
      />

      <Toaster />
    </div>
  );
}