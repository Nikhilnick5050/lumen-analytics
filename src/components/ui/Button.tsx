import { forwardRef, type ButtonHTMLAttributes } from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, fullWidth = false, className = '', children, disabled, ...rest }, ref) => {
    const classes = ['btn', `btn--${variant}`, `btn--${size}`, fullWidth ? 'btn--full' : '', className].filter(Boolean).join(' ')
    return (
      <button ref={ref} className={classes} disabled={disabled || loading} aria-busy={loading} {...rest}>
        {loading && <span className="btn__spinner" aria-hidden="true" />}
        <span className="btn__label">{children}</span>
      </button>
    )
  }
)
Button.displayName = 'Button'