interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'outline';
}

export function Badge({ children, variant = 'accent' }: BadgeProps) {
  const variantClass = variant === 'accent' ? 'badge-accent' : 'badge-outline';
  return <span className={`badge ${variantClass}`}>{children}</span>;
}
