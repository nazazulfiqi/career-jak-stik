import { z } from "zod";

export const settingCompanySchema = z.object({
  name: z.string({ required_error: "Fullname is Required" }).min(5, { message: "Full name have min 5 characters" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Email not valid" }),
  location: z.any(),
  employeeTotal: z.any(),
  industry: z.any(),
  dateFounded: z.any(),
  techStack: z.any(),
  about: z.string().min(10, { message: "About must be at least 10 characters" }),
});