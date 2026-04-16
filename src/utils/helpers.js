// helpers.js

export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatPhone(phone) {
  return phone.replace(/(\d{5})(\d{5})/, '$1 $2')
}

export function truncate(str, len = 120) {
  if (!str) return ''
  return str.length <= len ? str : str.slice(0, len).trimEnd() + '...'
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const sleep = (ms) => new Promise(r => setTimeout(r, ms))
