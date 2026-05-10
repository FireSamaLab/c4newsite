import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold', {
  variants: {
    variant: {
      default: 'bg-red-700 text-white',
      secondary: 'bg-stone-100 text-stone-800',
      outline: 'border border-stone-300 text-stone-700',
      dark: 'bg-stone-950 text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
