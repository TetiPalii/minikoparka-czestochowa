"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
import { FaPhoneFlip } from "react-icons/fa6";

const links = [
    {
        name: "główna",
        path: "/"
    },
    {
        name: "usługi",
        path: "/services"
    },
    {
        name: "kontakt",
        path: "/contact"
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