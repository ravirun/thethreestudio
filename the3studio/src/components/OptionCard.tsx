import { Minus, Plus } from 'lucide-react';
import { Card } from './Card';

interface Option {
  name: string;
  price: number;
  description?: string;
  icon?: string;
  allowQty?: boolean;
  minQty?: number;
  maxQty?: number;
  stepQty?: number;
}

interface OptionCardProps {
  option: Option;
  selected: boolean;
  onSelect: () => void;
  accent: string;
  qty?: number;
  onQtyChange?: (n: number) => void;
}

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function OptionCard({
  option,
  selected,
  onSelect,
  accent,
  qty,
  onQtyChange,
}: OptionCardProps) {
  return (
    <Card
      padding="md"
      radius="lg"
      hover={true}
      selected={selected}
      accent={accent}
      onClick={onSelect}
      className="group flex w-full flex-col justify-between text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-2xl leading-none">{option.icon || "✨"}</div>
        <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-100">
          {formatINR(option.price)}
        </span>
      </div>
      <div className="mt-3">
        <div className="text-zinc-100 font-semibold">{option.name}</div>
        {option.description && <p className="text-sm text-zinc-400 mt-1">{option.description}</p>}
      </div>

      {option.allowQty && typeof qty === "number" && onQtyChange && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-zinc-400">Qty</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQtyChange(Math.max(option.minQty ?? 1, qty - (option.stepQty ?? 1)));
              }}
              className="rounded-lg border border-white/10 p-2 hover:bg-zinc-800"
            >
              <Minus size={16} />
            </button>
            <span className="min-w-[2ch] text-center text-zinc-100">{qty}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQtyChange(Math.min(option.maxQty ?? 99, qty + (option.stepQty ?? 1)));
              }}
              className="rounded-lg border border-white/10 p-2 hover:bg-zinc-800"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}
