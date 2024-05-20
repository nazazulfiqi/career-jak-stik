import { z } from "zod";

export const formFilterSchema = z.object({
	categories: z.array(z.string()),
});

export const formFilterCompanySchema = z.object({
	industry: z.array(z.string()),
});

export const updateProfileSchema = z.object({
  resume: z.optional(z.any()),
  transcript: z.optional(z.any()),
  name: z.string({ required_error: "Fullname is Required" }).min(5, { message: "Full name have min 5 characters" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Email not valid" }),
  phoneNumber: z.string().min(6, { message: "Phone have min 6 characters" }),
  latestJob: z.string(),
  major: z.string({ required_error: "Major is required" }),
  gpa: z.string({ required_error: "Ipk is required" }).min(1, { message: "Ipk is required" }),
  linkedInUrl: z.string(),
  portofolioUrl: z.string(),
  addInformation: z.string(),
  address: z.string(),
});


export const formSignInSchema = z.object({
	email: z
		.string({ required_error: "Email is requied" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
});

export const formSignUpSchema = z.object({
	email: z
		.string({ required_error: "Email is requied" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
	name: z
		.string({ required_error: "Name is required" })
		.min(3, { message: "Name should have minimal 3 characters" }),
});
