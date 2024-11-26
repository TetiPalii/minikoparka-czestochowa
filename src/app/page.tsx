
import { Button } from "@/components/ui/button";
import { FaPhoneFlip } from "react-icons/fa6";
import Image from "next/image";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
import { HoverButton } from "@/components/HoverButton";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/**text */}
          <div className="text-center xl:text-left  xl:order-none">
            <span className="text-xl">Neonil Palii </span>
            <h1 className="h1 mb-6">Roboty ziemne<br /> <span className="text-accent">Usługi minikoparką </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Realizujemy szeroki zakres usług na terenie Częstochowy oraz okolic, zapewniając pełne zaangażowanie i profesjonalizm. Wycena każdego projektu jest przygotowywana indywidualnie, aby najlepiej dopasować się do Państwa oczekiwań i specyfiki zlecenia.
            </p>
            {/**button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 flex items-center justify-center border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>

          {/**photo */}
          <div className="order-1 xl:-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  );
}
