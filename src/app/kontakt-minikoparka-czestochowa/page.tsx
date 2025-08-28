"use client"
import { Toaster } from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";





const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Numer kontaktowy",
        description: "(+48) 512 419 036",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "u.minikoparka.np@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Lokalizacja",
        description: "Częstochowa, woj. Śląskie",
    },
];



export default function Contact() {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 2, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">

                    {/** Form */}
                    <div className="order-2 xl:h-[54%] xl:order-none">
                        <Suspense fallback={<div>Ładowanie...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>

                    {/** Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-6">
                                    <div className="p-4 bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>

                                    <div>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Toaster position="bottom-center" toastOptions={{
                    style: {
                        fontSize: '18px',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                        borderRadius: '8px',
                    },
                    duration: 5000,
                }} />
            </div >
        </motion.section >
    );
}