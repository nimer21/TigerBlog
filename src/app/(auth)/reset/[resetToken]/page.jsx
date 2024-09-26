import ResetForm from '@/components/auth/ResetForm'
import React from 'react'

export default function page({ params }) {
  const resetToken = params.resetToken
  return (
    <ResetForm resetToken={resetToken} />
  )
}
