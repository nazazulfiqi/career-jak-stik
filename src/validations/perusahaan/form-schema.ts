import {z} from "zod"

import { JOBTYPES } from "@/constant/perusahaan";



export const jobFormSchema = z.object({
    title: z.string({required_error: "Job Title is required"}).min(3, {message: "Job Title must be at least 3 characters"}),
    category : z.string({required_error: "You need to select a category"}),
    jobType: z.enum(JOBTYPES, {required_error: "You need to select a job type"}),
    salaryFrom : z.string({required_error: "Salary From is required"}),
    salaryTo : z.string({required_error: "Salary To is required"}),
    skills : z.string().array().nonempty({message: "Required Skill must be at least 1 skill"}),
    description : z.string({required_error: "Job Description is required"}).min(10, {message: "Job Description must be at least 10 characters"}),
    responsibility : z.string({required_error: "Job Description is required"}).min(10, {message: "Job Description must be at least 10 characters"}),
    benefit: z.string().array().nonempty({ message: "Benefits must be at least 1 benefit" })
})

export const overviewFormSchema = z.object({
	image: z.any(),
	name: z.string({ required_error: "Name is required" }),
	website: z.string({ required_error: "Website is required" }),
	location: z.string({ required_error: "Location is required" }),
	employee: z.string({ required_error: "Employee is required" }),
	industry: z.string({ required_error: "Industry is required" }),
	dateFounded: z.date({ required_error: "dateFounded is required" }),
	techStack: z
		.string({ required_error: "Tech Stack is required" })
		.array()
		.nonempty({ message: "Tech Stack must be at least 1 data" }),
	description: z.string({ required_error: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
	facebook: z.string({ required_error: "Facebook link is required" }),
	instagram: z.string({ required_error: "Instagram link is required" }),
	linkedin: z.string({ required_error: "LinkedIn link is required" }),
	twitter: z.string({ required_error: "Twitter link is required" }),
	youtube: z.string({ required_error: "Youtube link is required" }),
});

export const teamFormSchema = z.object({
	name: z.string({ required_error: "Name is required" }),
	position: z.string({ required_error: "Position is required" }),
	instagram: z.string({ required_error: "Instagram is required" }),
	linkedin: z.string({ required_error: "Linkedin is required" }),
});

export const signInFormSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
});

export const signUpFormSchema = z.object({
	name: z.string({ required_error: "Name is required" }),
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Email is not valid" }),
	password: z.string({ required_error: "Password is required" }),
});


export const newsFormSchema = z.object({
	image: z.any(),
	title: z.string({required_error: "Title is required"}),
	content: z.string({required_error: "Content is required"}),
    tags : z.string().array().nonempty({message: "Required tags must be at least 1 tag"}),
	
})