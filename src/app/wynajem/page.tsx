"use client"

import { TabsTrigger, Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

const rentItems = [
    {
        title: "Agregaty prądotwórcze",
        img: "/agregat.jpeg",
        description: "jednofazowy HONDA 5,5Kw"
    },
    {
        title: "Niwelator rotacyjny",
        img: "/agregat.jpeg",
        description: "jednofazowy "
    },

    {
        title: "Przycinarka spalinowa",
        img: "/agregat.jpeg",
        description: " HONDA 5,5Kw"
    },
    {
        title: "Zagęszczarka",
        img: "/agregat.jpeg",
        description: " 5,5Kw"
    },
]

export default function Wynajem() {
    return (<section className="flex flex-col items-center   h-screen text-3xl font-semibold">
        <h1 className="h1 text-center mb-24 mt-24">Oferujemy pod wynajem:</h1>
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 2, ease: "easeIn" },
            }}>
            <div className="container mx-auto flex items-center justify-center">
                <Tabs className="flex flex-col gap-[60px] md:flex-row  " >
                    <TabsList className="flex flex-col justify-center items-center max-w-[380px] w-full mx-auto" >
                        {rentItems.map(({ title }, index) => {
                            return <TabsTrigger key={index} value={title}>{title}</TabsTrigger>



                        })}
                    </TabsList>
                    {/* content */}
                    <div className="w-full min-h-[70vh]">
                        {rentItems.map(({ title, description }, index) => {
                            return <TabsContent key={index} className="w-full" value={title}>{description}</TabsContent>
                        })}
                    </div>
                </Tabs>

            </div>
        </motion.div>
    </section>
    )
}
