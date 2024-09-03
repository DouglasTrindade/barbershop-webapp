import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const ServiceCard = ({
  name,
  description,
  price,
  imageUrl,
}: ServiceCardProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(price))}
            </p>
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
