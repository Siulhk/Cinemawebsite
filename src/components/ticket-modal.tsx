import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { SessionTimes, Session } from "./session-times";
import { Movie } from "./movie-card";
import { Minus, Plus, Ticket } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface TicketModalProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
}

const TICKET_PRICE = 25.0;

export function TicketModal({ movie, open, onClose }: TicketModalProps) {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [ticketCount, setTicketCount] = useState(1);

  if (!movie) return null;

  // Mock sessions for the selected movie
  const sessions: Session[] = [
    { id: "1", time: "14:30", room: "1", type: "2D Legendado", availableSeats: 45 },
    { id: "2", time: "17:00", room: "2", type: "3D Dublado", availableSeats: 12 },
    { id: "3", time: "19:30", room: "1", type: "2D Legendado", availableSeats: 67 },
    { id: "4", time: "22:00", room: "3", type: "IMAX", availableSeats: 0 },
  ];

  const handlePurchase = () => {
    if (!selectedSession) {
      toast.error("Por favor, selecione uma sessão");
      return;
    }

    toast.success(
      `${ticketCount} ingresso${ticketCount > 1 ? 's' : ''} comprado${ticketCount > 1 ? 's' : ''} com sucesso!`,
      {
        description: `${movie.title} - ${selectedSession.time} - Sala ${selectedSession.room}`,
      }
    );
    
    handleClose();
  };

  const handleClose = () => {
    setSelectedSession(null);
    setTicketCount(1);
    onClose();
  };

  const total = ticketCount * TICKET_PRICE;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{movie.title}</DialogTitle>
          <DialogDescription>
            Selecione o horário e quantidade de ingressos
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3">Horários Disponíveis</h3>
            <SessionTimes
              sessions={sessions}
              onSelectSession={setSelectedSession}
            />
          </div>

          {selectedSession && (
            <div className="rounded-lg border bg-gray-50 p-4">
              <h3 className="mb-3">Quantidade de Ingressos</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                    disabled={ticketCount <= 1}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <span className="w-8 text-center">{ticketCount}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
                    disabled={ticketCount >= 10}
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p>R$ {total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            onClick={handlePurchase}
            disabled={!selectedSession}
            className="bg-red-600 hover:bg-red-700"
          >
            <Ticket className="mr-2 size-4" />
            Finalizar Compra
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
