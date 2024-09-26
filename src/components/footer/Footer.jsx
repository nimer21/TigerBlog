import React from 'react'
import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <>
    <FooterLinks/>
        <footer className="bg-color-dark-blue h-14 --center-all">
            <div className="container flex-center">
                <p className="text-sm text-white">
                Copyright 2010 - 2024 Toptal, LLC
                </p>
            </div>

        </footer>
    </>
  )
}
