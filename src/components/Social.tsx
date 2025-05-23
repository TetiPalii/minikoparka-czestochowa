import Link from "next/link";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

const social = [
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/profile.php?id=61559576564617"
    },
    {
        icon: <FaTelegram />,
        path: "https://t.me/Neonil_Palii"
    },
    {
        icon: <FaWhatsapp />,
        path: "https://wa.me/48512419036"
    },
]

export default function Social({ containerStyles, iconStyles }: { containerStyles?: string, iconStyles?: string }) {
    return <div className={containerStyles}>
        {social.map((item, idx) => {
            return <Link target="_blank" rel="noopener noreferrer" key={idx} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
}