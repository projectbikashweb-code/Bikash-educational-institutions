import { useState, useCallback } from 'react'

export function useFormState(initialValues = {}) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }, [errors])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
  }, [initialValues])

  return { values, errors, setErrors, submitting, setSubmitting, submitted, setSubmitted, handleChange, reset }
}
