"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"
const services = [
    {
        num: "01",
        title: "Usuwanie korzeni"

    },
    {
        num: "02",
        title: "Prace ogrodowe"
    },
    {
        num: "03",
        title: "Drenaże, odwodnienia"
    },
    {
        num: "04",
        title: "Niwelacje terenu, skarpowanie"
    },
    {
        num: "05",
        title: "Wykopy pod sieci kanalizacyjne"
    },
    {
        num: "06",
        title: "Wykopy pod sieci energetyczne i telekomunikacyjne, fundamenty"
    },
]

export default function Services() {
    return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{
                opacity: 0
            }} animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }} className="grid gird-cols-1 md:grid-cols-2 gap-[60px]">
                {services.map((service, index) => {
                    return <div key={index} className="flex flex-col flex-1 justify-evenly gap-6 group hover:text-outline-hover transition-all duration-500 cursor-pointer">
                        <div>
                            <div className="text-5xl font-extrabold text-outline text-transparent ">
                                {service.num}
                            </div>
                            <h2>{service.title}</h2>
                        </div>
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                })}
            </motion.div>
        </div>
    </section>
}