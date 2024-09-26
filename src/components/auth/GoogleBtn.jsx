import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function GoogleBtn() {
  return (
    <Button
    variant="outline"
    className="w-full space-x-2">
      <span>Sign In With Google</span>
      <Image
      src="/images/google-logo.png"
      height={20}
      width={20}
      alt="google logo"
      />      
    </Button>
  )
}
