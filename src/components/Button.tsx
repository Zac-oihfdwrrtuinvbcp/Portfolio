interface ButtonProps {
  href?: string;
  icon: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  disableBackground?: boolean;
}

export function Button({ href, icon, children, onClick, isActive, disableBackground }: ButtonProps) {
  const baseClassName = "inline-flex items-center gap-2 px-6 py-3 rounded-3xl transition-colors font-medium self-start cursor-pointer";
  const backgroundClassName = disableBackground ? "hover:bg-zinc-800 hover:shadow-l" : "bg-zinc-800 hover:bg-zinc-700 shadow-l";
  const activeClassName = isActive ? "text-zinc-100 bg-zinc-800 shadow-l" : "";
  const className = `${baseClassName} ${backgroundClassName} ${activeClassName}`;

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