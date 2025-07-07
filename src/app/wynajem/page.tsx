"use client"

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
        img: "/niwelator.jpeg",
        description: [
            "Laser obrotowy do całkowicie automatycznego poziomowania w pionie i poziomie oraz wyznaczania wypoziomowanego punktu w górę.",
            "Spory zasięg działania – linia widoczna gołym okiem do 45 m, z detektorem do 320 m.",
            "Funkcja lasera punktowego – ułatwia przenoszenie punktów w pionie.",
            "Doskonała dokładność : ±0,5 mm na 10 m.",
            "Ręczny tryb pojedynczego nachylenia.",
            "Łatwe użytkowanie – komplet funkcji potrzebnych na budowie.",
            "Zasilanie akumulatorowe.",
            "Solidna, ogumowana konstrukcja – odporność na upadek z 2 m, klasa szczelności IP54.",
            "Uchwyt naścienny – do montażu na ścianach, konstrukcjach metalowych i tyczkach.",
            "Pilot zdalnego sterowania – samodzielna praca z urządzeniem.",
            "Łata niwelacyjna.",
            "Trójnóg z regulacją wysokości i spadków."
        ]

    },

    {
        title: "Przycinarka spalinowa",
        img: "/agregat.jpeg",
        description: "Przycinarka spalinowa to narzędzie, które umożliwia precyzyjne cięcie różnych materiałów, takich jak drewno, metal czy tworzywa sztuczne."
    },
    {
        title: "Zagęszczarka",
        img: "/agregat.jpeg",
        description: ""
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
                    <div className="w-full min-h-[70vh] py-16 md:py-0">
                        {rentItems.map(({ title, description, img }, index) => {
                            return <TabsContent key={index} className="w-full" value={title} >

                                {Array.isArray(description) ? <ul className="flex flex-col items-center md:items-start justify-center text-lg list-disc list-inside mb-6 text-center">
                                    {description.map((item, idx) => {
                                        return <li key={idx}>{item}</li>
                                    })}
                                </ul> : <p>{title}  </p>
                                }
                                <div className="flex flex-col items-center justify-center gap-4">

                                    <Image src={img} alt={title} width={500} height={50} className="rounded-xl" />
                                </div>

                            </TabsContent>
                        })}
                    </div>
                </Tabs>

            </div>
        </motion.div>
    </section>
    )
}
