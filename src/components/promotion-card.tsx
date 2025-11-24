import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Percent, Tag } from "lucide-react";

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  type: "combo" | "discount" | "special";
  image: string;
}

interface PromotionCardProps {
  promotion: Promotion;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  const getIcon = () => {
    switch (promotion.type) {
      case "combo":
        return <Tag className="size-5" />;
      case "discount":
        return <Percent className="size-5" />;
      case "special":
        return <Calendar className="size-5" />;
      default:
        return <Tag className="size-5" />;
    }
  };

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={promotion.image}
          alt={promotion.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Badge className="absolute top-3 right-3 bg-green-500 text-white hover:bg-green-600">
          {promotion.discount}
        </Badge>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-red-600">
          {getIcon()}
          <span className="text-sm">Promoção</span>
        </div>
        
        <h3 className="mb-2">{promotion.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{promotion.description}</p>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Válido até {promotion.validUntil}</p>
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            Aproveitar
          </Button>
        </div>
      </div>
    </div>
  );
}
