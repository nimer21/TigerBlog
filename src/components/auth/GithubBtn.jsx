import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function GithubBtn() {
  return (
    <Button
    variant="outline"
    className="w-full space-x-2">
      <span>Sign In With GitHub</span>
      <Image
      src="/images/github-logo.png"
      height={20}
      width={20}
      alt="google logo"
      />      
    </Button>
  )
}
