"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    { title: "Usuwanie korzeni" },
    { title: "Prace ogrodowe" },
    { title: "Drenaże, odwodnienia" },
    { title: "Niwelacje terenu, skarpowanie" },
    { title: "Wykopy pod sieci kanalizacyjne" },
    {
        title: "Wykopy pod sieci energetyczne i telekomunikacyjne, fundamenty",
    },
];

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <h1 className="h1 text-center mb-32">Wykonujemy:</h1>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: index + 2, ease: "easeInOut" },
                            }}
                            className="flex flex-col flex-1 justify-center items-center gap-6 group hover:text-outline-hover transition-all duration-500 cursor-pointer"
                        >
                            <div>
                                <h2 className="text-xl font-bold group-hover:text-accent transition-all duration-500 uppercase">
                                    {service.title}
                                </h2>
                            </div>
                            <motion.div
                                style={{
                                    height: "1px", // Wysokość borderu
                                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Kolor borderu
                                }}

                                initial={{ opacity: 0, width: "0%" }}
                                animate={{ width: "100%", opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: index + 2
                                }}

                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
