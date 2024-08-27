import { Card, CardContent } from "./ui/card";

export const Footer = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="px-5 py-6">
        <p className="text-sm text-gray-400">
          © 2024 Copyright <span className="font-bold">Barber</span>
        </p>
      </CardContent>
    </Card>
  );
};
