import type { HTMLAttributes } from 'react'
import './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

export function Card({ interactive = false, className = '', children, ...rest }: CardProps) {
  return <div className={`card ${interactive ? 'card--interactive' : ''} ${className}`} {...rest}>{children}</div>
}