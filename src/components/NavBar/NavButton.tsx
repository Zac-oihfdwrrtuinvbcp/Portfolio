import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavButtonProps {
  children: React.ReactNode
  to: string
  isActive?: boolean
}

export function NavButton({ children, to, isActive }: NavButtonProps) {
  const location = useLocation()
  isActive = isActive ?? location.pathname === to

  return (
    <Link
      to={to}
      className={`p-2 px-4 rounded-3xl text-l font-medium transition-colors hover:shadow-l flex items-center gap-2 ${
        isActive 
          ? 'bg-zinc-800 text-zinc-100 shadow-l' 
          : 'hover:bg-zinc-800'
      }`}
    >
      {children}
    </Link>
  )
}