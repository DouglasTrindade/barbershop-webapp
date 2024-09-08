import { ServiceCard } from "@/app/_components/service-card";
import { PhoneItem } from "@/app/_components/phone-item";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
interface BarbershopProps {
  params: {
    id: string;
  };
}

const barbershopsPage = async ({ params }: BarbershopProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: { id: params.id },
    include: { services: true },
  });

  if (!barbershop) return notFound();

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
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

      <div className="border-b border-solid p-5">
        <h1 className="font-bold text-xl mb-3">{barbershop?.name}</h1>
        <div className="flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (889 avaliações)</p>
        </div>
      </div>

      <div className="border-b border-solid space-y-2 p-5">
        <h2 className="font-bold uppercase text-gray-400 text-xs">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      <div className="border-b border-solid space-y-3 p-5">
        <h2 className="font-bold uppercase text-gray-400 text-xs">Serviços</h2>
        <div className="space-y-3">
          {barbershop &&
            barbershop?.services.map((service: any) => (
              <ServiceCard key={service.id} {...service} />
            ))}
        </div>
      </div>

      <div className="space-y-3 p-5">
        {barbershop?.phones.map((phone: any) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default barbershopsPage;
