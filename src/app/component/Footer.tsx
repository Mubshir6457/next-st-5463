import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0  flex justify-center gap-3 p-6 bg-red-200 w-full'>
      <Link href="/#">privacy</Link>
      <Link href="/about">About page</Link>
      <Link href="/contact">Contact page</Link>
    </div>
  )
}

export default Footer
