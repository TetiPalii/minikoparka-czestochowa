"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


const links = [
    {
        name: "główna",
        path: "/"
    },
    {
        name: "usługi",
        path: "/uslugi-minikoparka-czestochowa"
    },
    {
        name: "kontakt",
        path: "/kontakt-minikoparka-czestochowa"
    },
]

export default function Nav() {
    const pathName = usePathname();

    return <nav className="flex gap-8 ">
        {
            links.map((link, idx) => {
                return <Link href={link.path} key={idx} className={`${pathName === link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
            })
        }

    </nav>
}