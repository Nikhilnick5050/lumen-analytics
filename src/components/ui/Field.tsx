import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import './Field.css'

interface FieldBase { label: string; error?: string; hint?: string }

export const Field = forwardRef<HTMLInputElement, FieldBase & InputHTMLAttributes<HTMLInputElement>>(
  ({ label, error, hint, id, ...rest }, ref) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`
    return (
      <div className="field">
        <label className="field__label" htmlFor={fieldId}>{label}</label>
        <input ref={ref} id={fieldId} className={`field__control ${error ? 'field__control--error' : ''}`} aria-invalid={!!error} aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined} {...rest} />
        {hint && !error && <p className="field__hint" id={`${fieldId}-hint`}>{hint}</p>}
        {error && <p className="field__error" id={`${fieldId}-error`}>{error}</p>}
      </div>
    )
  }
)
Field.displayName = 'Field'

export const TextareaField = forwardRef<HTMLTextAreaElement, FieldBase & TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ label, error, hint, id, ...rest }, ref) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`
    return (
      <div className="field">
        <label className="field__label" htmlFor={fieldId}>{label}</label>
        <textarea ref={ref} id={fieldId} className={`field__control ${error ? 'field__control--error' : ''}`} aria-invalid={!!error} aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined} {...rest} />
        {hint && !error && <p className="field__hint" id={`${fieldId}-hint`}>{hint}</p>}
        {error && <p className="field__error" id={`${fieldId}-error`}>{error}</p>}
      </div>
    )
  }
)
TextareaField.displayName = 'TextareaField'