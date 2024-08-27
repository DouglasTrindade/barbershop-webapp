import { Card, CardContent } from "../_components/ui/card";
import { Badge } from "../_components/ui/badge";
import { Avatar, AvatarImage } from "../_components/ui/avatar";

export const BookingCard = () => {
  return (
    <Card className="mt-6">
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">Confirmado</Badge>
          <h3 className="font-semibold">Corte de Cabelo</h3>
          <div className="flex items-center gap-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/avatar.png" />
            </Avatar>
            <p className="text-sm">Barbearia FSW</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
          <p className="text-sm">Agosto</p>
          <p className="text-2xl">05</p>
          <p className="text-sm">20:00</p>
        </div>
      </CardContent>
    </Card>
  );
};
