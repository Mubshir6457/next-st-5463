import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fex  bottom-0 left-0 flex- gap-3 p-6 bg-red-100'>
        <Link href="/#" className='pl-3 pr-3'>privacy</Link>
        <Link href="/about"className='pl-3 pr-3'>About page</Link>
        <Link href="/contact"className='pl-3 pr-3'>contact page</Link>
    </div>
  )
}

export default Footer