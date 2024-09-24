"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "główna",
        path: "/"
    },
    {
        name: "kontakt",
        path: "/contact"
    },
    {
        name: "portfolio",
        path: "/portfolio"
    },

    {
        name: "opinie",
        path: "/opinion"
    },
]

export default function Nav() {
    const pathName = usePathname();

    return <nav className="flex gap-8 capitalize">
        {
            links.map((link, idx) => {
                return <Link href={link.path} key={idx} className={`${pathName === link.path && 'text-accent border-b-2 border-accent'}`}>{link.name}</Link>
            })
        }
    </nav>
}