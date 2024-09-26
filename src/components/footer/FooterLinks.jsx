import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function FooterLinks() {
  return (
    <section className="bg-zinc-800 dark:bg-yellow-500">
        <div className="container --grid-25">
            {/** About */}
            <div className="text-muted space-y-2">
                <h4 className="text-lg font-bold text-white
                dark:text-gray-800">Tiger Blog</h4>
                <p className="text-sm">TigerBlog is a blog platform where you can write and
                    share your thoughts with like-minded people. We are
                    dedicated to providing high-quality content and
                    user experiance.
                </p>
                <div className="contact">
                    <FaFacebookF className="i"/>
                    <FaTwitter className="i"/>
                    <FaInstagram className="i"/>
                    <FaYoutube className="i"/>

                </div>
            </div>
        </div>
        <div className="container --grid-25">
            {/** Categories */}
            <div className="text-muted space-y-2">
                <h4 className="text-lg font-bold text-white
                dark:text-gray-800">Categories</h4>
                <ul className="flex flex-col space-y-2 text-sm">
                    <li>
                        <Link href="/" className="footer-links">
                        HTML
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="footer-links">
                        CSS
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="footer-links">
                        JavaScript
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="footer-links">
                        ReactJS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container --grid-25">
            {/** Newsletter */}
            <div className="text-muted space-y-2">
                <h4 className="text-lg font-bold text-white
                dark:text-gray-800">Subscribe</h4>
                <p className="text-sm">Subscribe to our newletter to get updates on our latest offers!
                </p>
                <form action=""
                className="border border-white dark:border-gray-500
                rounded-md p-1 space-y-2">
                <Input type="email" placeholder="Email" />
                <Button variant="default" className="w-full">Subscribe</Button>
                </form>
            </div>
        </div>
        
    </section>
  )
}
