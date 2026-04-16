import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { CheckCircle } from 'lucide-react'

const CLASS_OPTIONS = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11 (PCM)', 'Class 11 (PCB)', 'Class 12 (PCM)', 'Class 12 (PCB)']

export default function EnquiryForm({ compact = false, light = false }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    // Show brief loading state
    await new Promise(r => setTimeout(r, 800))
    
    const WHATSAPP_NUMBER = "918249297170"; // Target WhatsApp Number
    
    // Format WhatsApp Message
    const message = ` Hello, i want to know more

 Name: ${data.name}
 Phone: ${data.phone}
 Class: ${data.class}
 Message: ${data.message || 'None'}`;

    // Encode Message
    const encodedMessage = encodeURIComponent(message);
    
    // Generate WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Handle Redirection
    window.open(whatsappURL, "_blank");
    
    // Show success state
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <div>
          <h3 className={`text-xl font-bold font-display ${light ? 'text-white' : 'text-slate-900'}`}>Enquiry Received!</h3>
          <p className={`text-sm mt-2 ${light ? 'text-white/70' : 'text-slate-500'}`}>We'll call you back within 24 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label={!light ? 'Student Name' : undefined}
        placeholder="Student Name"
        register={register('name', { required: { value: true, message: 'Name is required' } })}
        error={errors.name}
        required
      />
      <Input
        label={!light ? 'Phone Number' : undefined}
        type="tel"
        placeholder="Phone Number"
        register={register('phone', {
          required: { value: true, message: 'Phone is required' },
          pattern: { value: /^[6-9]\d{9}$/, message: 'Enter valid 10-digit phone' }
        })}
        error={errors.phone}
        required
      />
      <Input
        label={!light ? 'Select Class' : undefined}
        placeholder="Select Class"
        as="select"
        options={CLASS_OPTIONS}
        register={register('class', { required: { value: true, message: 'Please select class' } })}
        error={errors.class}
        required
      />
      {!compact && (
        <Input
          label={!light ? 'Message (Optional)' : undefined}
          placeholder="Any specific query or message..."
          as="textarea"
          rows={3}
          register={register('message')}
        />
      )}
      <Button type="submit" disabled={isSubmitting} variant={light ? "secondary" : "primary"} className="w-full mt-1">
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry →'}
      </Button>
    </form>
  )
}
