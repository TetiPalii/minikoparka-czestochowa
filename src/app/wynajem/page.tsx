"use client"

import { motion } from "framer-motion";

export default function Wynajem() {
    return (<section className="flex flex-col items-center justify-center h-screen text-3xl font-semibold">
        <h1 className="h1 text-center mb-24 ">Oferujemy pod wynajem:</h1>
        <div className="container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                }}
                className="grid grid-cols-1  md:grid-cols-2 gap-[60px]"
            >



            </motion.div>
        </div>
    </section>
    )
}
