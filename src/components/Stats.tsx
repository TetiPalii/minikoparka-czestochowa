"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 5,
        text: "Lat doświadczenia"
    },
    {
        num: 300,
        text: "Zrealizowanych projektów"
    },
    {
        num: 250,
        text: "Pozytywnych opiinii"
    },
]

export default function Stats() {
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-col  gap-6 max-w-[80vw] mx-auto xl:max-w-none md:flex-wrap md:flex-row">
                {stats.map((stat, index) => {
                    console.log(stat.text.length)
                    return <div className="flex
                    items-center justify-center gap-4 flex-1 xl:justify-start " key={index}>
                        <CountUp end={stat.num} delay={2} duration={5} className="text-4xl xl:text-6xl font-extrabold text-start" />
                        <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `}>{stat.text}</p>
                    </div>

                })}
            </div>
        </div>
    </section >
}