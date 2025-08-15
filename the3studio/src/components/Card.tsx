import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  radius?: 'md' | 'lg' | 'xl';
  hover?: boolean;
  selected?: boolean;
  accent?: string;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className, 
  padding = 'md', 
  radius = 'lg',
  hover = false,
  selected = false,
  accent,
  onClick 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6'
  };

  const radiusClasses = {
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl'
  };

  const baseClasses = cn(
    'border bg-zinc-900/60 transition-all',
    radiusClasses[radius],
    paddingClasses[padding],
    {
      'border-white/10': !selected && !accent,
      'cursor-pointer': onClick || hover,
      'hover:border-white/20 hover:bg-zinc-900': hover && !selected,
      'ring-2 ring-emerald-500 bg-emerald-950/30 border-emerald-500/50': selected && accent === 'emerald',
      'ring-2 ring-orange-500 bg-orange-950/30 border-orange-500/50': selected && accent === 'orange',
      'ring-2 ring-sky-500 bg-sky-950/30 border-sky-500/50': selected && accent === 'sky',
      'ring-2 ring-violet-500 bg-violet-950/30 border-violet-500/50': selected && accent === 'violet',
      'ring-2 ring-teal-500 bg-teal-950/30 border-teal-500/50': selected && accent === 'teal',
      'ring-2 ring-yellow-500 bg-yellow-950/30 border-yellow-500/50': selected && accent === 'yellow',
    },
    className
  );

  if (onClick) {
    return (
      <button 
        type="button" 
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}
