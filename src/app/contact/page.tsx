"use client";

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
import { useState } from "react";
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
    phone: z
        .string()
        .regex(
            /^\+48\s?\d{3}[-\s]?\d{3}[-\s]?\d{3}$/,
            "Numer telefonu musi zaczynać się z +48"
        ),
    service: z.string().optional(),
    message: z.string().optional(),
});



export default function Contact() {
    const { handleSubmit,
        control,
        formState: { errors }, } = useForm({
            resolver: zodResolver(schema),
            defaultValues: {
                firstname: "",
                phone: "",
                service: "",
                message: "",
            }
        });
    const onSubmit = (data: {
        firstname: string,
        phone: string,
        service: string,
        message: string,

    }) => {
        console.log(data)
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

                                <Controller

                                    name="firstname"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            type="text"
                                            placeholder="Imię"
                                            {...field}
                                            className="w-full"
                                        />
                                    )
                                    }
                                />
                                {errors.firstname && (
                                    <p className="text-red-500 text-sm">{errors.firstname.message}</p>
                                )}


                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            type="text"
                                            placeholder="Numer kontaktowy"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}

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
            </div>
        </motion.section>
    );
}

{/** 
    export default function Contact() {
    return <motion.section initial={{ opacity: 0 }} animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
    }} className="py-6">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/**form
                <div className="order-2 xl:h-[54%] xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-3xl text-center text-accent">
                            Skontaktuj się z nami
                        </h3>
                        <p className="text-white/60 text-base text-center">Indywidualna wycena na podstawie zdjęć oraz szczegółowego opisu. Konsułtacja, doradztwo oraz umówienie się na termin. <br />Zapraszamy!</p>
                        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                            <Input type="firstname" placeholder="Imię" />
                            <Input type="phone" placeholder="Numer kontaktowy" />
                        </div>

                        
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Proszę wybrać usługę" />
                            </SelectTrigger>
                            <SelectContent className="min-w-[300px] max-w-full w-auto">
                                <SelectGroup>
                                    <SelectLabel>
                                        Proszę wybrać usługę
                                    </SelectLabel>
                                    {services.map(({ title }, idx) => { return <SelectItem key={idx} value={title} className="break-words whitespace-normal">{title}</SelectItem> })}

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                       
                        <Textarea className="h-[200px]" placeholder="Napisz  wiadomość do nas" />
                        <Button size="lg" className="max-w-40">Wyślij</Button>
                    </form>
                </div>

             
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {
                            info.map((item, idx) => {
                                return <li key={idx} className="flex  items-center gap-6">
                                    <div className="p-4 bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>

                                    <div>
                                        <p>{item.description}</p>
                                    </div>

                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>
}
*/}