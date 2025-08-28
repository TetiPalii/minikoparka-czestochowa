import { z } from "zod";

export const schema = z.object({
    firstname: z
        .string()
        .min(3, "Imię musi mieć co najmniej 3 litery")
        .regex(/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/, "Imię może zawierać tylko litery"),
    phone: z.string().regex(/^\d{9}$/, "Numer telefonu musi zawierać dokładnie 9 cyfr."),
    service: z.string().optional(),
    message: z.string().optional(),
});