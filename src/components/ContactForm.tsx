"use client"

import { useSearchParams } from "next/navigation";
import { schema } from "../lib/schemas/contactSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
import { motion } from "framer-motion";
import { services } from "@/data/data";
import { Textarea } from "./ui/textarea";



export function ContactForm() {

    const service: string | null = useSearchParams().get("service");

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
            service: service || "",
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

    useEffect(() => {
        if (service) {
            reset((prevValues) => ({
                ...prevValues,
                service: service,
            }));
        }
    }, [service, reset]);

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        >
            <h1 className="text-3xl text-center text-accent">
                Skontaktuj się z nami
            </h1>
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
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="min-w-[300px] max-w-full w-auto" >
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

    );
}