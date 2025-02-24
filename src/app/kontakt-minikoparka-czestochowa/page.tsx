"use client";

import toast, { Toaster } from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue,
    SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";




const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Numer kontaktowy",
        description: "(+48) 512 419 036",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "u.minikoparka.np@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Lokalizacja",
        description: "Częstochowa, woj. Śląskie",
    },
];

const services = [
    { title: "Wykopy pod sieci energetyczne" },
    { title: "Wykopy pod sieci  telekomunikacyjne" },
    { title: "Wykopy pod fundamenty" },
    { title: "Wykopy pod sieci kanalizacyjne" },
    { title: "Drenaże, odwodnienia" },
    { title: "Niwelacje terenu, skarpowanie" },
    { title: "Prace ogrodowe" },
    { title: "Usuwanie korzeni" },
    { title: "Inne" },
];

const schema = z.object({
    firstname: z
        .string()
        .min(3, "Imię musi mieć co najmniej 3 litery")
        .regex(/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/, "Imię może zawierać tylko litery"),
    phone: z.string().regex(/^\d{9}$/, "Numer telefonu musi zawierać dokładnie 9 cyfr."),
    service: z.string().optional(),
    message: z.string().optional(),
});




export default function Contact() {
    const { handleSubmit,
        control,
        formState: { errors },
        trigger,
        reset,

    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstname: "",
            phone: "",
            service: "",
            message: "",
        },
        mode: "onBlur"
    });
    const onSubmit = (clientData: {
        firstname: string,
        phone: string,
        service: string,
        message: string,

    }) => {
        const sendFormData = async (data: {
            firstname: string,
            phone: string,
            service: string,
            message: string,

        }) => {
            try {
                const response = await fetch('/api/send-data', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    toast.success("Wiadomość została wysłana!");
                    reset();
                } else {
                    alert("Wystąpił problem z wysyłką danych.");
                }
            } catch (error) {
                if (error instanceof Error) {
                    alert("Błąd: " + error.message);
                } else {
                    alert("Wystąpił nieznany błąd.");
                }
            }
        };

        sendFormData(clientData)
    };





    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">

                    {/** Form */}
                    <div className="order-2 xl:h-[54%] xl:order-none">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-3xl text-center text-accent">
                                Skontaktuj się z nami
                            </h3>
                            <p className="text-white/60 text-base text-center">
                                Indywidualna wycena na podstawie zdjęć oraz szczegółowego opisu.
                                Konsułtacja, doradztwo oraz umówienie się na termin. <br />Zapraszamy!
                            </p>
                            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 w-full">
                                <div className="w-full flex flex-col">
                                    <Controller

                                        name="firstname"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="text"
                                                placeholder="Imię"
                                                {...field}
                                                className="w-full"
                                                onBlur={() => trigger("firstname")}
                                            />
                                        )
                                        }
                                    />
                                    {errors.firstname && (<motion.div initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
                                        }}>
                                        <p className="text-red-500 text-sm px-1">{errors.firstname.message}</p>
                                    </motion.div>
                                    )}
                                </div>
                                <div className="w-full flex flex-col">

                                    <Controller
                                        name="phone"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="text"
                                                placeholder="Numer kontaktowy"
                                                {...field}
                                                onBlur={() => trigger("phone")}

                                            />
                                        )}
                                    />
                                    {errors.phone && (<motion.div initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
                                        }}>
                                        <p className="text-red-500 text-sm px-1">{errors.phone.message}</p>

                                    </motion.div>

                                    )
                                    }
                                </div>
                            </div>

                            {/** Select */}
                            <div>
                                <Controller
                                    name="service"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Proszę wybrać usługę" />
                                            </SelectTrigger>
                                            <SelectContent className="min-w-[300px] max-w-full w-auto">
                                                <SelectGroup>
                                                    <SelectLabel>Proszę wybrać usługę</SelectLabel>
                                                    {services.map(({ title }, idx) => (
                                                        <SelectItem
                                                            key={idx}
                                                            value={title}
                                                            className="break-words whitespace-normal"
                                                        >
                                                            {title}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.service && (
                                    <p className="text-red-500 text-sm">{errors.service.message}</p>
                                )}
                            </div>

                            {/** Textarea */}
                            <div>
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({ field }) => (
                                        <Textarea
                                            className="h-[200px]"
                                            placeholder="Napisz wiadomość do nas"

                                            {...field}
                                            onBlur={() => trigger("message")}
                                        />
                                    )}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                                )}
                            </div>

                            <Button size="lg" className="max-w-40" type="submit">
                                Wyślij
                            </Button>
                        </form>
                    </div>

                    {/** Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-6">
                                    <div className="p-4 bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>

                                    <div>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Toaster position="bottom-center" toastOptions={{
                    style: {
                        fontSize: '18px',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                        borderRadius: '8px',
                    },
                    duration: 5000,
                }} />
            </div >
        </motion.section >
    );
}