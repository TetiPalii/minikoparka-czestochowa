"use client"

import { Button } from "@/components/ui/button";
import { TabsTrigger, Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";

const rentItems = [
    {
        title: "Agregaty prądotwórcze",
        img: "/agregat.jpeg",
        subtitle: "Charakterystyka urządzenia:",
        description: [
            "Częstotliwość: 50 Hz",
            "Napięcie: 30 V",
            "Moc znamionowa: 5,6 kW",
            "Moc maksymalna: 6,2 kW",
            "Silnik: Honda",
            "Model: GX 390",
            "Pojemność: 389 cm³",
            "Chłodzenie: Powietrze",
            "Cylindry: 1",
            "Takt: 4",
            "Miska oleju: 1,1 L",
            "Rozruch: Manualny",
            "Paliwo: Benzyna",
            "Zbiornik: 6,1 L",
            "Spalanie (Moc 75%): 2,7 L/h",
            "Hałas Lwa: 97 dB(A)",
            "Waga: 69 kg",
            "Długość: 790 mm",
            "Szerokość: 580 mm",
            "Wysokość: 505 mm",
            "Agregaty trójfazowe umożliwiają zasilanie odbiorników na napięcie 400 V. Agregaty wyposażone w stabilizację napięcia tzw. AVR dedykowane są do zasilania odbiorników czułych na jakość prądu zasilania."]
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
        img: "",
        subtitle: "Charakterystyka urządzenia:",
        description: [
            "Wielozadaniowa przecinarka do prac remontowych i budowlanych.",
            "Ściernica korundowa ma średnicę 350 mm do cięcia na głębokość do 125 mm.",
            "W wyposażeniu standardowym posiada system redukujący drgania STIHL, system filtrów o długiej żywotności, półautomatyczny system napinania paska klinowego.",
            "Przecinarka TS gwarantuje precyzyjne i komfortowe prowadzenie noża.",
            "Wygodny rozruch dzięki zastosowaniu zaworu bezpieczeństwa.",
            "Prowadzone ręcznie lub na wózku prowadzącym FW 20.",
            "Zalety przecinarki STIHL TS:",
            "Łatwe uruchamianie.",
            "Wysoki komfort użytkowania.",
            "Lekka i solidna konstrukcja.",
            "Precyzyjne i komfortowe cięcie.",
            "Wysokie bezpieczeństwo pracy."
        ],
    },
    {
        title: "Zagęszczarka",
        subtitle: "Zagęszczarka Wacker Neuson",
        img: "/zageszczarka.jpeg",
        description: [
            "Wysoka wydajność: Maszyny te charakteryzują się dużą siłą zagęszczania, co pozwala na efektywne zagęszczanie różnych rodzajów podłoża.",
            "Trwałość i niezawodność: Wykonane z wysokiej jakości materiałów, zagęszczarki Wacker Neuson są odporne na zużycie i uszkodzenia, co przekłada się na długą żywotność i niski koszt eksploatacji.",
            "Ergonomia i komfort pracy: Wiele modeli posiada regulowaną wysokość uchwytu, amortyzację wibracji oraz intuicyjne sterowanie, co poprawia komfort pracy operatora i minimalizuje zmęczenie.",
            "Efektywność paliwowa: Nowoczesne silniki zapewniają oszczędność paliwa, co przekłada się na niższe koszty eksploatacji.",
            "Łatwość transportu i manewrowania: Wiele zagęszczarek Wacker Neuson wyposażonych jest w zintegrowane koła transportowe i/lub specjalne uchwyty, co ułatwia przemieszczanie maszyny na placu budowy.",
            "Wszechstronność zastosowań: Zagęszczarki Wacker Neuson sprawdzają się w różnych zastosowaniach, od zagęszczania gruntu i piasku po ubijanie asfaltu i betonu."
        ],

    },
    {
        title: "Wibrator do betonu",
        img: "",
        subtitle: "Charakterystyka urządzenia:",
        description: [
            "Zwiększenie wytrzymałości: usunięcie pęcherzy powietrza poprawia gęstość i spójność betonu, co przekłada się na jego wyższą wytrzymałość mechaniczną.",
            "Poprawa jakości betonu: wibratory pomagają w równomiernym rozprowadzeniu mieszanki betonowej i zapobiegają segregacji składników, co skutkuje lepszą jakością gotowego betonu.",
            "Ułatwienie pracy: dzięki wibratorom beton jest łatwiejszy w układaniu i formowaniu, co przyspiesza prace budowlane.",
            "Lepsze zagęszczenie betonu pozwala na użycie mniejszej ilości cementu przy zachowaniu wymaganej wytrzymałości.",
            "Wibratory pomagają w eliminacji porów, co prowadzi do zwiększenia szczelności betonu i jego odporności na przenikanie wody.",
            "Zagęszczenie betonu wibratorem poprawia jego przyczepność do prętów zbrojeniowych, co ma kluczowe znaczenie dla klienta."
        ],

    }
]

export default function Wynajem() {

    const [expanded, setExpanded] = useState(false);



    return (<section className="flex flex-col items-center   h-screen text-3xl font-semibold">
        <h1 className="h1 text-center mb-24 ">Oferujemy pod wynajem:</h1>
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

                            return <div key={index} className="w-full flex items-center justify-center data-[state=active]:bg-accent" onClick={(() => { setExpanded(false) })}>
                                <TabsTrigger value={title}>{title}</TabsTrigger>
                                <Button variant="primary" className="bg-[#27272c] rounded-l-none rounded-r-xl" aria-label="phone" size={"sm"}>
                                    <Link href={"tel:+48512419036"}>

                                        <FaPhoneFlip />
                                    </Link>
                                </Button>
                            </div>



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
                                <button className="text-accent text-base mb-2" onClick={() => setExpanded(!expanded)}>{expanded ? "pokaż mniej" : "pokaż więcej"}</button>
                                <div className="flex flex-col items-center justify-center gap-4">

                                    {img && <Image src={img} alt={title} width={500} height={50} className="rounded-xl" />}
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
