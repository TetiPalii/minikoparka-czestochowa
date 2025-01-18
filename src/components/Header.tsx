import Link from "next/link";
import Nav from "./Nav";
import MobilNav from "./MobilNav";

export default function Header() {
    return <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/**logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Kopi
                    <span className="text-accent">ę.</span>
                </h1>
            </Link>

            {/* desktop nav  */}

            <div className="hidden xl:flex items-center gap-8">
                <Nav />

            </div>

            { /**mobile nav */}
            <div className="xl:hidden">
                <MobilNav />
            </div>
        </div>
    </header>
}