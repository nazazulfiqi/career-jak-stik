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
  latestJob: z.string({ required_error: "Latest Job is required" }).min(2, { message: "Latest Job have min 2 characters" }),
  major: z.string({ required_error: "Major is required" }).min(2, { message: "Major have min 2 characters" }),
  gpa: z.string({ required_error: "Ipk is required" }).min(1, { message: "Ipk is required" }),
  linkedInUrl: z.string({ required_error: "LinkedIn Url is required" }).min(5, { message: "LinkedIn Url have min 5 characters" }),
  portofolioUrl: z.string({ required_error: "Portofolio Url is required" }).min(5, { message: "Portofolio Url have min 5 characters" }),
  addInformation: z.string({ required_error: "Add Information is required" }).min(5, { message: "Add Information have min 5 characters" }),
  address: z.string({ required_error: "Address is required" }).min(5, { message: "Address have min 5 characters" }),
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
