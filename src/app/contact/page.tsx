"use client"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Numer kontaktowy",
        description: "(+48) 512 419 036"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "u.minikoparka.np@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Lokalizacja",
        description: "Częstochowa, woj. Śląskie"
    },
]


export default function Contact() {
    return <motion.section initial={{ opacity: 0 }} animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
    }} className="py-6">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/**form */}
                <div className="order-2 xl:h-[54%] xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-3xl text-center text-accent">
                            Skontaktuj się z nami
                        </h3>
                        <p className="text-white/60 text-base text-center">Indywidualna wycena na podstawie zdjęć oraz szczegółowego opisu. Konsułtacja, doradztwo oraz umówienie się na termin. <br />Zapraszamy!</p>
                        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                            <Input type="firstname" placeholder="Imię" />
                            <Input type="phone" placeholder="Numer kontaktowy" />
                        </div>
                    </form>
                </div>

                {/**info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
            </div>
        </div>
    </motion.section>
}