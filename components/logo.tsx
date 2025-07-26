import { cn } from '../lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        'text-xl font-semibold tracking-tight text-primary',
        className
      )}
    >
      Quick<span className="text-muted-foreground">Note</span>X
    </span>
  );
};
