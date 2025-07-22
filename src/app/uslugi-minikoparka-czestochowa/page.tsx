"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const services = [
    {
        title: "Wykopy pod sieci energetyczne i telekomunikacyjne, fundamenty",
        img: "/networks.jpg"
    },
    {
        title: "Wykopy pod sieci kanalizacyjne",
        img: "/sewage.jpeg"
    },
    {
        title: "Drenaże, odwodnienia",
        img: "/dehydration.jpeg"
    },
    {
        title: "Niwelacje terenu, skarpowanie",
        img: "/escarpment.jpg"
    },

    {
        title: "Prace ogrodowe",
        img: "/garden.jpg"
    },
    {
        title: "Usuwanie korzeni",
        img: "/rootRemoval.jpg"
    },




];

export default function Services() {
    const lastItemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (lastItemRef.current) {
                const rect = lastItemRef.current.getBoundingClientRect();
                const isVisible =
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth);

                if (!isVisible) {
                    lastItemRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                    });
                }
            }
        }, services.length * 300 + 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="flex flex-col justify-center  pb-24 ">
            <h1 className="h1 text-center mb-24 ">Wykonujemy:</h1>
            <motion.div initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
                }} className="container mx-auto">
                <div
                    className="grid grid-cols-1  md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div className="min-h-[150px] shadow-inner relative " key={index}
                        >
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index } }}
                                key={index}
                                className="flex flex-col flex-1 justify-center items-center gap-2  sm:h-full"
                                ref={index === services.length - 1 ? lastItemRef : null}
                                style={{ willChange: 'opacity' }}
                            >

                                <div className="flex absolute h-full w-full overflow-hidden px-8">
                                    <Image src={service.img} alt={service.title} quality={100} className="object-cover  rounded-xl " fill sizes="(max-width:768px):80vw, 30vw" loading="lazy" />
                                </div>
                                <Link href={'/kontakt-minikoparka-czestochowa'} className="z-20 cursor-pointer hover:underline">
                                    <h2 className="text-xl md:text-xl text-white font-extrabold uppercase text-center">
                                        {service.title}
                                    </h2>
                                </Link>

                            </motion.div>

                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
