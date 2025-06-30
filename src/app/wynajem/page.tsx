"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsTrigger, Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

const rentItems = [
    {
        title: "Agregaty prądotwórcze",
        img: "/agregat.jpeg",
        description: "Agregaty prądotwórcze to urządzenia, które przekształcają energię mechaniczną w energię elektryczną."
    },
    {
        title: "Niwelator rotacyjny",
        img: "/agregat.jpeg",
        description: "Niwelator rotacyjny to urządzenie pomiarowe, które służy do wyznaczania poziomów i spadków terenu."
    },

    {
        title: "Przycinarka spalinowa",
        img: "/agregat.jpeg",
        description: "Przycinarka spalinowa to narzędzie, które umożliwia precyzyjne cięcie różnych materiałów, takich jak drewno, metal czy tworzywa sztuczne."
    },
    {
        title: "Zagęszczarka",
        img: "/agregat.jpeg",
        description: "Zagęszczarka to urządzenie służące do zagęszczania gruntu, asfaltu lub betonu."
    },
]

export default function Wynajem() {
    return (<section className="flex flex-col items-center   h-screen text-3xl font-semibold">
        <h1 className="h1 text-center mb-24 mt-24">Oferujemy pod wynajem:</h1>
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 1.5, ease: "easeIn" },
            }}
            className="w-full flex items-center justify-center">
            <div className="container mx-auto">
                <Tabs className="flex flex-col gap-[20px] md:flex-row  " >
                    <TabsList className="flex flex-col items-center w-full mx-auto gap-8" >
                        {rentItems.map(({ title }, index) => {
                            return <TabsTrigger key={index} value={title}>{title}</TabsTrigger>



                        })}
                    </TabsList>
                    {/* content */}
                    <div className="w-full min-h-[70vh]">
                        {rentItems.map(({ title, description, img }, index) => {
                            return <TabsContent key={index} className="w-full" value={title}>
                                <ScrollArea className="h-[400px]">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <p className="text-base text-center " >{description}</p>
                                        <Image src={img} alt={title} width={300} height={70} className="rounded-xl" />
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                        })}
                    </div>
                </Tabs>

            </div>
        </motion.div>
    </section>
    )
}
