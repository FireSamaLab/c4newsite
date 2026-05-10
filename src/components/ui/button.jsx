import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-red-700 text-white shadow-sm hover:bg-red-800',
        secondary: 'bg-stone-100 text-stone-950 hover:bg-stone-200',
        outline: 'border border-stone-300 bg-white text-stone-950 hover:bg-stone-100',
        ghost: 'text-stone-700 hover:bg-stone-100 hover:text-stone-950',
        dark: 'bg-stone-950 text-white hover:bg-stone-800',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ref,
      ...props,
    });
  }

  return <button className={classes} ref={ref} {...props}>{children}</button>;
});

Button.displayName = 'Button';

export { Button, buttonVariants };
