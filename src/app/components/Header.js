import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className=' flex justify-between  p-3'>
        <h1 className=' uppercase text-xl font-semibold p-3 '>Care</h1>
        <div  className=' flex space-x-4'>
  <Link href="/" className=' text-lg lowercase font-sans text-neutral-900 p-2  ring-1 rounded-3xl w-36 text-center ring-neutral-900' >menu</Link>
  <Link href="/" className=' text-lg uppercase  text-neutral-900 p-2 '>FAQ</Link></div>
      <div className=' flex justify-evenly space-x-4'>
      <Link href="/" className=' p-2 text-lg'>about</Link>
      <Link href="/" className='p-2 text-lg'>services</Link>
      <Link href="/" className='p-2 text-lg ring-1 rounded-3xl w-40 text-center ring-neutral-900'>contact  <span class="relative inline-flex rounded-full h-2 w-2 bg-red-300"></span><span class="fixed flex h-3 w-3">
  <span class="animate-ping fixed inline-flex h-full w-full rounded-full bg-red-300 opacity-75"> </span>

</span></Link></div>
    </div>
  )
}
