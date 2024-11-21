'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { FaPhoneFlip, FaSquarePhoneFlip } from "react-icons/fa6";

export const HoverButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    return <div className="hidden relative xl:inline-block" onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
        <Button variant="outline" className=" uppercase flex items-center gap-2" size={"lg"}>

            <span>+48 512 419 036</span>
            <FaPhoneFlip />

        </Button>
        {isHovered && (
            <p className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-accent p-2 rounded shadow-lg w-full text-lg text-center">
                +48 512 419 036
            </p>
        )}
    </div>
}