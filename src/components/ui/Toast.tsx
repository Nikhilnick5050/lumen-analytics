import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import './Toast.css'

type ToastTone = 'success' | 'error' | 'info'
interface Toast { id: number; message: string; tone: ToastTone }
interface ToastContextValue { toast: (message: string, tone?: ToastTone) => void }

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

let idCounter = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((message: string, tone: ToastTone = 'success') => {
    const id = ++idCounter
    setToasts((prev) => [...prev, { id, message, tone }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000)
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="toast-viewport" aria-live="polite" aria-atomic="false">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast--${t.tone}`} role="status">
            <span className="toast__icon" aria-hidden="true">{t.tone === 'success' ? '✓' : t.tone === 'error' ? '!' : 'i'}</span>
            <span className="toast__msg">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}