import { useEffect, useRef, useState, type ReactNode } from 'react'
import './Dropdown.css'

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
  align?: 'left' | 'right'
  label: string
}

export function Dropdown({ trigger, children, align = 'left', label }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <div className="dropdown" ref={ref}>
      <button className="dropdown__trigger" aria-haspopup="menu" aria-expanded={open} aria-label={label} onClick={() => setOpen((v) => !v)}>
        {trigger}
      </button>
      {open && <div className={`dropdown__menu dropdown__menu--${align}`} role="menu">{children}</div>}
    </div>
  )
}

export function DropdownItem({ children, onSelect }: { children: ReactNode; onSelect?: () => void }) {
  return <button className="dropdown__item" role="menuitem" onClick={() => onSelect?.()}>{children}</button>
}