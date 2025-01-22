
import { Button } from "@/components/ui/button";
import { FaPhoneFlip } from "react-icons/fa6";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";





export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between  xl:pb-8">

          {/**text */}
          <div className="text-center xl:text-left  xl:order-none">
            <span className="text-xl">Neonil Palii </span>
            <h1 className="h1 mb-6">Roboty ziemne<br /> <span className="text-accent">Usługi minikoparką </span>
            </h1>
            <p className="max-w-[500px] mb-5 text-white/80 hidden xl:block">Kompleksowe usługi ziemne w Częstochowie i okolicach! Specjalizujemy się w pracach ziemnych z wykorzystaniem minikoparki, wywrotki, glebogryzarki i innych niezbędnych maszyn. Zapewniamy indywidualną wycenę, terminowość i pełne dostosowanie do Twoich potrzeb. Skontaktuj się z nami i zaufaj profesjonalistom!</p>
            {/**button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" className="uppercase flex items-center gap-2" size={"lg"}>
                <Link href={"tel:+48512419036"} className="flex items-center gap-2">
                  <span>+48 512 419 036</span>
                  <FaPhoneFlip />
                </Link>
              </Button>



              <div className="mb-4 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 flex items-center justify-center border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>

          {/**photo */}
          <div className="order-1 xl:-none mb-4 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
      <div className="text-center flex justify-center items-center p-4">
        <p className="max-w-[500px] mb-5 text-white/80   xl:hidden">Kompleksowe usługi ziemne w Częstochowie i okolicach! Specjalizujemy się w pracach ziemnych z wykorzystaniem minikoparki, wywrotki, glebogryzarki i innych niezbędnych maszyn. Zapewniamy indywidualną wycenę, terminowość i pełne dostosowanie do Twoich potrzeb. Skontaktuj się z nami i zaufaj profesjonalistom!</p>
      </div>
    </main>
  );
}
