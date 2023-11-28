"use client"
import { link } from "fs"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

type navlinks = {
    name: string,
    href: string
}

const Navegation = ({navlinks} : {navlinks : navlinks[]}) =>{
    const pathName = usePathname()
    const router = useRouter()
    
    return(
        <nav>
            <ul>
                {navlinks.map((link) => {
                    const isActive = pathName.endsWith(link.href)
                    return (<li key={link.name}>
                        <Link  href={link.href} >{link.name} {isActive ? 'Active' : 'Disable'}</Link>
                        <br/>
                        <button onClick={() => router.push(link.href)}>{link.name}</button>
                    </li>)
                })}
            </ul>
        </nav>
    )
}

export default Navegation