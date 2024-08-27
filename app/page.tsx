import { SearchIcon } from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./_lib/prisma";
import { BarbershopCard } from "./_components/barbershop-card";
import { BookingCard } from "./_components/booking-card";
import { Footer } from "./_components/footer";
import { quickSearchOptions } from "./_constants/search";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        <div className="flex items-center gap-2 pt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="flex gap-3 mt-6">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 w-full h-[150px]">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores FSW Barber"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <h2 className="mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <BookingCard />

        <h2 className="mt-6 mb-4 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops &&
            barbershops.map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
        </div>

        <h2 className="mt-6 mb-4 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershop &&
            popularBarbershop.map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
