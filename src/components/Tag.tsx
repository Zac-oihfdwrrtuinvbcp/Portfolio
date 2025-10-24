interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'large';
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const baseClasses = "bg-zinc-800 text-zinc-300 rounded-full shadow-l";
  const sizeClasses = variant === 'large' 
    ? "px-4 py-2 text-base" 
    : "px-3 py-1 text-sm";
  
  return (
    <span className={`${baseClasses} ${sizeClasses}`}>
      {children}
    </span>
  );
}