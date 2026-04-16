import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { CheckCircle, CalendarDays } from 'lucide-react'

const CLASS_OPTIONS = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11 (PCM)', 'Class 11 (PCB)', 'Class 12 (PCM)', 'Class 12 (PCB)']
const TIMING_OPTIONS = ['Morning (6–8 AM)', 'School Hours (10 AM–12 PM)', 'Afternoon (2–5 PM)', 'Evening (5:30–8 PM)', 'Weekend']

export default function DemoBookingForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log('Demo booking:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-display text-slate-900">Demo Booked!</h3>
          <p className="text-sm text-slate-500 mt-2">We'll confirm your slot within 24 hours via call or WhatsApp.</p>
        </div>
        {onClose && (
          <Button variant="secondary" onClick={onClose}>Close</Button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center">
          <CalendarDays size={18} className="text-primary-700" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800">Book a Free Demo Class</p>
          <p className="text-xs text-slate-400">No commitment required</p>
        </div>
      </div>
      <Input label="Student Name" placeholder="Enter student name" register={register('name', { required: { value: true, message: 'Name is required' } })} error={errors.name} required />
      <Input label="Parent Phone" type="tel" placeholder="10-digit mobile number" register={register('phone', { required: { value: true, message: 'Phone is required' }, pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid phone' } })} error={errors.phone} required />
      <Input label="Class" placeholder="Select class" as="select" options={CLASS_OPTIONS} register={register('class', { required: { value: true, message: 'Required' } })} error={errors.class} required />
      <Input label="Preferred Timing" placeholder="Select timing" as="select" options={TIMING_OPTIONS} register={register('timing')} />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Booking...' : 'Book Free Demo →'}
      </Button>
    </form>
  )
}
