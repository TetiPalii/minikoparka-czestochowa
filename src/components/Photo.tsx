
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Photo() {
    return <div className="h-full w-full relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
            {/**image */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
                className="w-[280px] h-[280px] xl:h-[490px] xl:w-[490px] mix-blend-lighten absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Image src="/mainFoto.jpeg" alt="minidigger" quality={100} priority className="object-cover rounded-full " fill sizes="(max-widh:768px)80vw,50vw" />

            </motion.div>


            {/**circle */}
            <motion.svg className={"w-[300px] h-[300px] xl:w-[515px] xl:h-[515px]"} fill={'transparent'} viewBox="0 0 506 506" xmlns="hrrp://www.w3.org/2000/svg">
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: ["160, 360"]
                    }} transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }} />
            </motion.svg>

        </motion.div>
    </div>
}