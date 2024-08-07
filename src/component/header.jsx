"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const pathname= usePathname()
    console.log(pathname)

    const links =[
        {title:'Home',href:'/'},
        {title:'Support',href:'/support'},
        {title:'Store',href:'/store'},
        {title:'About',href:'/about'}
    ]

    return(
        <header className='my-4'>
<nav>
    <ul className='flex items-center gap-x-5 justify-center'>
{links.map((makelink,i)=>{
    <li key={i} 
    className={`hover:border-b hover:cursor-pointer border-b ${
        makelink.href === pathname
          ? "border-b-white"
          : "border-b-transparent"
      } hover:border-b-white transition-all duration-300`}
    >
        <Link href={makelink.href}>{makelink.title}</Link>
    </li>
})}
      </ul>
     </nav>
        </header>
    )
}

export default Header