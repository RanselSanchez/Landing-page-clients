import {
  Monitor,
  LayoutPanelTop,
  ShoppingCart,
} from "lucide-react";

import Card from "./Card";

const icons = {
  monitor: Monitor,
  website: LayoutPanelTop,
  ecommerce: ShoppingCart,
};

export default function ServiceCard({ service }) {

  const Icon = icons[service.icon];

  return (
    <Card className="group h-full">

      <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">

        {Icon && <Icon size={34} />}

      </div>

      <h3 className="text-2xl font-bold mb-4">

        {service.title}

      </h3>

      <p className="text-gray-600 leading-7">

        {service.description}

      </p>

      <button className="mt-8 font-semibold text-blue-600">

        Más información →

      </button>

    </Card>
  );
}
