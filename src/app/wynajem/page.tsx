"use client"

import { TabsTrigger, Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const rentItems = [
    {
        title: "Agregaty prądotwórcze",
        img: "/agregat.jpeg",
        description: "Agregaty prądotwórcze to urządzenia, które przekształcają energię mechaniczną w energię elektryczną."
    },
    {
        title: "Niwelator rotacyjny",
        img: "/niwelator.jpeg",
        subtitle: "Charakterystyka urządzenia:",
        description: [
            "Laser obrotowy do całkowicie automatycznego poziomowania w pionie i poziomie oraz wyznaczania wypoziomowanego punktu",
            "Spory zasięg działania – wiązka widoczna gołym okiem z ok. 45m i wychwytywana detektorem w promieniu aż do 320 m",
            "Funkcja lasera punktowego",
            "Doskonała dokładność – błąd pomiaru wynosi zaledwie +/-0,5mm na 10m",
            "Ręczny tryb pojedynczego nachylenia",
            "Łatwe użytkowanie – urządzenie posiada wszystkie zaawansowane funkcje potrzebne w miejscu pracy",
            "Zasilanie akumulatorowe",
            "Solidna konstrukcja – ogumowana rama gwarantuje odporność na upadek z wysokości 2m oraz szczelność na poziomie IP54",
            "Uchwyt naścienny",
            "Pilot do niwelatora – możliwość sterowania urządzeniem z odległości umożliwia całkowicie samodzielną pracę",
            "Łata niwelacyjna 5 m",
            "Trójnóg z możliwością regulowania wysokości oraz ustawienia spadków"
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

    const [expanded, setExpanded] = useState(false);


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
                    <div className="w-full min-h-[70vh] py-6 md:py-0">
                        {rentItems.map(({ title, description, img, subtitle }, index) => {
                            return <TabsContent key={index} className="w-full" value={title} >
                                <h2 className="mb-4 text-center">{subtitle}</h2>
                                {Array.isArray(description) ? <ul className="flex flex-col items-start md:items-start justify-center text-lg list-disc list-inside text-start">
                                    {description.map((item, idx) => {
                                        return expanded ? (<li key={idx}>{item}</li>) : idx <= 2 && <li key={idx}>{item}</li>

                                    })}
                                </ul> : null
                                }
                                <button className="text-accent text-base mb-2" onClick={() => setExpanded(!expanded)}>{expanded ? "Zwiń    " : "Rozwiń"}</button>
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
