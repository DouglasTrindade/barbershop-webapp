import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface BarbershopCardProps {
  barbershop: Barbershop;
}
export const BarbershopCard = ({ barbershop }: BarbershopCardProps) => {
  return (
    <Card className="min-w-[159px]">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="object-cover"
            src={barbershop?.imageUrl}
            alt={barbershop?.name}
          />
        </div>
        <div className="px-2 pb-3">
          <h3>{barbershop?.name}</h3>
        </div>
      </CardContent>
    </Card>
  );
};
