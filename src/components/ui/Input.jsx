import React from 'react'

export default function Input({ label, type = 'text', placeholder, register, error, required, as: Tag = 'input', rows = 3, options }) {
  const base = 'w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-300 focus:border-primary-400'
  const errCls = error ? 'border-red-400' : 'border-slate-200'

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-semibold text-slate-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
      {Tag === 'select' ? (
        <select {...(register || {})} className={`${base} ${errCls}`}>
          <option value="">{placeholder || 'Select...'}</option>
          {options?.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : Tag === 'textarea' ? (
        <textarea {...(register || {})} rows={rows} placeholder={placeholder} className={`${base} ${errCls} resize-none`} />
      ) : (
        <input type={type} {...(register || {})} placeholder={placeholder} className={`${base} ${errCls}`} />
      )}
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  )
}
