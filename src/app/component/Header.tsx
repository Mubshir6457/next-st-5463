import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-3 p-6 bg-green-200'>
        <Link href="/"className='pl-3 pr-3'>Home page</Link>
        <Link href="/about"className='pl-3 pr-3'>About page</Link>
        <Link href="/contact"className='pl-3 pr-3'>Contact page</Link>
    </div>
  )
}

export default Header