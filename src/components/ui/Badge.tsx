import type { HTMLAttributes } from 'react'
import './Badge.css'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'brand' | 'neutral' | 'success' | 'warning' | 'danger'
}

export function Badge({ tone = 'neutral', className = '', children, ...rest }: BadgeProps) {
  return <span className={`badge badge--${tone} ${className}`} {...rest}>{children}</span>
}