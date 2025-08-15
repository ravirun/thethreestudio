import { Star } from 'lucide-react';
import { Card } from './Card';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  };
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card padding="lg" radius="lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <span className="text-emerald-400 font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-100">{testimonial.name}</h4>
          <p className="text-sm text-zinc-400">{testimonial.role} at {testimonial.company}</p>
        </div>
        <div className="ml-auto flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-zinc-300 italic text-sm">&quot;{testimonial.content}&quot;</p>
    </Card>
  );
}
