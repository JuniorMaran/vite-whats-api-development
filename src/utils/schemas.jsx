import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Digite um e-mail válido."),
  age: z.preprocess(
    (val) => (val ? Number(val) : undefined),
    z.number().min(18, "Você deve ter pelo menos 18 anos.")
  ),
});
