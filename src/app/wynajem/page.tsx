"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const rentItems = [
    {
        title: "Agregat prądotwórczy",
        img: "/agregat.jpeg",
        desription: "jednofazowy HONDA 5,5Kw"
    },
    {
        title: "Agregat prądotwórczy",
        img: "/agregat.jpeg",
        desription: "jednofazowy HONDA 5,5Kw"
    },
    {
        title: "Agregat prądotwórczy",
        img: "/agregat.jpeg",
        desription: "jednofazowy HONDA 5,5Kw"
    },
    {
        title: "Agregat prądotwórczy",
        img: "/agregat.jpeg",
        desription: "jednofazowy HONDA 5,5Kw"
    },
]

export default function Wynajem() {
    return (<section className="flex flex-col items-center justify-center h-screen text-3xl font-semibold">
        <h1 className="h1 text-center mb-24 mt-24">Oferujemy pod wynajem:</h1>
        <div className="container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                }}
                className="grid grid-cols-1  md:grid-cols-4 gap-[60px]"
            >

                {rentItems.map(({ title, img, desription }:
                    { title: string, img: string, desription: string }) => {
                    return (
                        <div className="flex flex-col items-center justify-center min-h-[150px] shadow-inner relative" key={title}>
                            <Image src={img} alt={title} quality={100} sizes="(max-width:768px):80vw, 30vw" className="object-cover rounded-xl " fill />
                            <div className="z-20">
                                <h2 className="object-cover rounded-xl " >{title}</h2>
                                <p>{desription}</p>
                            </div>

                        </div>
                    )
                })}

            </motion.div>
        </div>
    </section>
    )
}
