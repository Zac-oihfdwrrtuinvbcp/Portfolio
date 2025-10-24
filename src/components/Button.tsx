interface ButtonProps {
  href?: string;
  icon: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ href, icon, children, onClick }: ButtonProps) {
  const className = "inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-3xl transition-colors shadow-l font-medium self-start";
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <i className={icon}></i>
        {children}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <i className={icon}></i>
      {children}
    </button>
  );
}