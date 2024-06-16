import { z } from "zod";


export const applyJobSchema = z.object({
  name: z.string({ required_error: "Fullname is Required" }).min(5, { message: "Full name have min 5 characters" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Email not valid" }),
  phoneNumber: z.string().min(6, { message: "Phone have min 6 characters" }),
  latestJob: z.string(),
  linkedInUrl: z.string(),
  portofolioUrl: z.string(),
  addInformation: z.string(),
  resume: z.optional(z.any()),
});
