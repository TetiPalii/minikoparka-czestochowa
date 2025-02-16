"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

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
        }, services.length * 300 + 4000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="flex flex-col justify-center  pb-24 ">
            <h1 className="h1 text-center mb-24 ">Wykonujemy:</h1>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1  md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div className="sm:h-[150px] shadow-inner relative  " key={index}>


                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: index + 2, ease: "easeInOut" },
                                }}
                                className="  flex flex-col flex-1 justify-center items-center gap-2 duration-500 sm:h-full  "
                                ref={index === services.length - 1 ? lastItemRef : null}
                            >

                                <div className="hidden sm:flex absolute h-full w-full overflow-hidden opacity-[60%]">
                                    <Image src={service.img} alt={service.title} quality={100} className="object-cover rounded-xl " fill sizes="(max-width:768px):80vw, 30vw" priority />
                                </div>
                                <div className="z-20">
                                    <h2 className="text-xl md:text-2xl font-bold duration-500 uppercase text-center ">
                                        {service.title}
                                    </h2>
                                </div>
                                <motion.div
                                    style={{

                                        backgroundColor: "#00ff99", // Kolor borderu
                                    }}

                                    initial={{ opacity: 0, width: "0%" }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        delay: index + 2
                                    }}
                                    className="sm:hidden h-[0.4px]"

                                />
                            </motion.div>

                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

