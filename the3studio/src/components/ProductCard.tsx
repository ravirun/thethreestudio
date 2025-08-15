
import { Star, ArrowRight } from 'lucide-react';
import { Card } from './Card';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    rating: number;
    reviews: number;
    image: string;
    tech: string[];
    features: string[];
    featured?: boolean;
  };
  selected: boolean;
  onSelect: () => void;
}

export function ProductCard({ product, selected, onSelect }: ProductCardProps) {
  return (
    <Card
      padding="lg"
      radius="lg"
      hover={true}
      selected={selected}
      accent={selected ? "emerald" : undefined}
      onClick={onSelect}
      className="cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{product.image}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-100">{product.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="text-zinc-400 text-xs">{product.rating}</span>
            </div>
            <span className="text-zinc-500 text-xs">•</span>
            <span className="text-zinc-400 text-xs">{product.reviews}</span>
          </div>
        </div>
        <ArrowRight 
          size={16} 
          className={`text-zinc-400 transition-transform ${
            selected ? "rotate-90" : ""
          }`}
        />
      </div>

      <p className="text-sm text-zinc-300 mb-4">{product.description}</p>

      <div className="flex items-center gap-4 mb-4">
        <div className="text-lg font-bold text-zinc-100">{product.price}</div>
        {product.originalPrice && (
          <div className="text-sm text-zinc-500 line-through">{product.originalPrice}</div>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {product.tech.slice(0, 2).map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
            {tech}
          </span>
        ))}
        {product.tech.length > 2 && (
          <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
            +{product.tech.length - 2}
          </span>
        )}
      </div>

      {selected && (
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div>
            <h4 className="font-semibold text-zinc-100 mb-2 text-sm">Features:</h4>
            <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
              {product.features.slice(0, 5).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  );
}
