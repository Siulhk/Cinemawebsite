import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface Session {
  id: string;
  time: string;
  room: string;
  type: string;
  availableSeats: number;
}

interface SessionTimesProps {
  sessions: Session[];
  onSelectSession: (session: Session) => void;
}

export function SessionTimes({ sessions, onSelectSession }: SessionTimesProps) {
  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div>
              <div className="mb-1">{session.time}</div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600">Sala {session.room}</p>
                <Badge variant="secondary">{session.type}</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">
                {session.availableSeats > 0 
                  ? `${session.availableSeats} lugares disponíveis`
                  : 'Esgotado'}
              </p>
            </div>
            <Button
              onClick={() => onSelectSession(session)}
              disabled={session.availableSeats === 0}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300"
            >
              Selecionar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
