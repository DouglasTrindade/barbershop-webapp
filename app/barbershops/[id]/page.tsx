import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopProps {
  params: {
    id: string;
  };
}

const barbershopsPage = async ({ params }: BarbershopProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
  });

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl || ""}
          alt={barbershop?.name || ""}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="p-5">
        <h1 className="font-bold text-xl">{barbershop?.name}</h1>
      </div>
    </div>
  );
};

export default barbershopsPage;
