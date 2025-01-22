"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 5,
        text: "Lat doświadczenia"
    },
    {
        num: 150,
        text: "Zrealizowanych projektów"
    },

]

export default function Stats() {
    return <section className=" pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-col  gap-4 max-w-[80vw] mx-auto md:flex-wrap md:flex-row items-center justify-center">
                {stats.map((stat, index) => {

                    return <div className="flex
                    items-center justify-center gap-4 flex-1 xl:justify-center" key={index}>
                        <CountUp end={stat.num} delay={2} duration={5} className="text-4xl xl:text-6xl font-extrabold text-start" />
                        <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `}>{stat.text}</p>
                    </div>

                })}
            </div>
        </div>
    </section >
}