import React from 'react'
//import { LoadingAnimation } from '@/components/widgets/Loader';

export default function LoadingAnimation() {
  return (
    <div className='spinner'>
        <span className="ball-1"></span>
        <span className="ball-2"></span>
        <span className="ball-3"></span>
        <span className="ball-4"></span>
        <span className="ball-5"></span>
        <span className="ball-6"></span>
        <span className="ball-7"></span>
        <span className="ball-8"></span>
    </div>
  )
}
/*
export function LoadingButton({btnText, btnClass, btnVariant}) {
    return (
      <Button className={cn("cursor-none", btnClass)} variant={btnVariant}>
        {btnText} &nbps; <LoadingAnimation/>
      </Button>
    )
  }
    */
