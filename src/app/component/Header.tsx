import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-3 p-6 bg-green-200 justify-center'>
      <Link href="/">Home page</Link>
      <Link href="/about">About page</Link>
      <Link href="/contact">Contact page</Link>
      <Link href="/address">Address page</Link>
    </div>
  )
}

export default Header
