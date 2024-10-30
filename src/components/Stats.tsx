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
        num: 500,
        text: "Zadowolonych klientów"
    }
]

export default function Stats() {
    return <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6
            max-w-[80vh] mx-auto xl:max-w-none">
                {stats.map((stat, index) => {
                    return <div className="flex
                    items-center justify-center flex-1 xl:justify-start" key={index}>
                        <CountUp end={stat.num} delay={2} duration={5} className="text-4xl xl:text-6xl font font-extrabold" />
                    </div>
                })}
            </div>
        </div>
    </section>
}