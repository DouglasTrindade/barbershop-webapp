"use client";

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

export const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
  };

  return (
    <div className="space-y-3 p-5">
      <div className="flex justify-between" key={phone}>
        <div className="flex items-center gap-2">
          <SmartphoneIcon />
          <p className="text-sm">{phone}</p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            handleCopyPhone(phone);
            toast.success("Telefone copiado com sucesso!");
          }}
        >
          Copiar
        </Button>
      </div>
    </div>
  );
};
