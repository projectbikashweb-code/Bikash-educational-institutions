import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, Send, User, Phone as PhoneIcon, GraduationCap, MessageSquare } from 'lucide-react'

const CLASS_OPTIONS = [
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
  'Class 11 (PCM)', 'Class 11 (PCB)', 'Class 12 (PCM)', 'Class 12 (PCB)',
]

function PremiumInput({ icon: Icon, label, error, children }) {
  return (
    <div className="enquiry-field-group">
      {label && (
        <label className="enquiry-field-label">
          {label}
        </label>
      )}
      <div className="enquiry-input-wrap">
        {Icon && (
          <span className="enquiry-input-icon">
            <Icon size={15} />
          </span>
        )}
        {children}
      </div>
      {error && <p className="enquiry-field-error">{error.message}</p>}
    </div>
  )
}

export default function EnquiryForm({ compact = false, light = false }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 800))

    const WHATSAPP_NUMBER = "918249297170"
    const message = ` Hello, i want to know more\n\n Name: ${data.name}\n Phone: ${data.phone}\n Class: ${data.class}\n Message: ${data.message || 'None'}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="enquiry-success">
        <div className="enquiry-success-icon">
          <CheckCircle size={32} strokeWidth={2} />
        </div>
        <h3 className={`text-xl font-bold font-display ${light ? 'text-white' : 'text-slate-900'}`}>
          Enquiry Received!
        </h3>
        <p className={`text-sm mt-1 ${light ? 'text-white/70' : 'text-slate-500'}`}>
          We'll call you back within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="enquiry-form" noValidate>
      {/* Name */}
      <PremiumInput icon={User} label={!light ? 'Student Name' : null} error={errors.name}>
        <input
          type="text"
          placeholder="Student Name"
          className={`enquiry-input ${errors.name ? 'is-error' : ''}`}
          {...register('name', { required: { value: true, message: 'Name is required' } })}
        />
      </PremiumInput>

      {/* Phone */}
      <PremiumInput icon={PhoneIcon} label={!light ? 'Phone Number' : null} error={errors.phone}>
        <input
          type="tel"
          placeholder="10-digit Phone Number"
          className={`enquiry-input ${errors.phone ? 'is-error' : ''}`}
          {...register('phone', {
            required: { value: true, message: 'Phone is required' },
            pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit phone' },
          })}
        />
      </PremiumInput>

      {/* Class */}
      <PremiumInput icon={GraduationCap} label={!light ? 'Select Class' : null} error={errors.class}>
        <select
          className={`enquiry-input enquiry-select ${errors.class ? 'is-error' : ''}`}
          {...register('class', { required: { value: true, message: 'Please select a class' } })}
        >
          <option value="">Select Class</option>
          {CLASS_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </PremiumInput>

      {/* Message — hidden in compact */}
      {!compact && (
        <PremiumInput icon={MessageSquare} label={!light ? 'Message (Optional)' : null}>
          <textarea
            placeholder="Any specific query or message..."
            rows={3}
            className="enquiry-input enquiry-textarea"
            {...register('message')}
          />
        </PremiumInput>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="enquiry-submit"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <span className="enquiry-spinner" /> Submitting...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send size={15} /> Submit Enquiry
          </span>
        )}
      </button>
    </form>
  )
}
