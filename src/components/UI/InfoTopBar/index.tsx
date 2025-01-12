import { BadgePercent, MapPin, Truck } from "lucide-react";

const informations: {
  icon: React.ElementType;
  label: string;
}[] = [
  {
    icon: MapPin,
    label: "Blumenau - SC",
  },
  {
    icon: Truck,
    label: "Entrega rápida",
  },
  {
    icon: BadgePercent,
    label: "Produtos com oferta",
  },
];

export function InfoTopBar() {
  return (
    <div className="w-full px-6 py-4 bg-gray-100 flex items-center justify-end">
      <div className="flex items-center gap-6">
        {informations.map(({ icon: Icon, label }, index) => {
          return (
            <>
              <div className="flex items-center gap-2" key={label}>
                <Icon className="w-6 h-6 text-blue-500" />

                {label}
              </div>

              {index !== informations.length - 1 && (
                <div className="w-px h-4 bg-gray-300 opacity-40"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
