"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci"
import Link from "next/link";
import { useState } from "react";

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
        name: "wynajem",
        path: "/wynajem-sprzetu-czestochowa"
    },
    {
        name: "kontakt",
        path: "/kontakt-minikoparka-czestochowa"
    },
    {
        name: "naprawa",
        path: "/naprawa-serwis-minikoparki-czestochowa"
    },

    // {
    //     name: "opinie",
    //     path: "/opinion"
    // },
]
export default function MobilNav() {

    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeSheet = () => {
        setIsOpen(false);
    };



    return <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center text-[32px] text-accent" aria-label="Otwórz nawigacyjne menu">
            <CiMenuFries />
        </SheetTrigger>
        <SheetContent className="flex flex-col">

            <SheetTitle className="sr-only">Nawigacja mobilna</SheetTitle>
            <SheetDescription className="sr-only">
                Wybierz stronę, aby przejść do jej zawartości.
            </SheetDescription>
            {/**logo */}
            <div className="mt-32 mb-12 text-center text-2xl">
                <Link href="/" onClick={closeSheet}>
                    <h1 className="text-4xl font-semibold">
                        Kopi
                        <span className="text-accent">ę</span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8">
                {links.map((link: {
                    name: string,
                    path: string
                }, idx: number) => { return <Link href={link.path} key={idx} onClick={closeSheet} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}>{link.name}</Link> })}
            </nav>

        </SheetContent>
    </Sheet >
}