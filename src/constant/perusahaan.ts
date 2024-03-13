import { EnumValues } from "zod";

export type optionType = {
	id: string;
	label: string;
};

export const JOBTYPES: EnumValues = ['Full Time', 'Part Time', 'Remote', 'Internship']

export const JOB_LISTINGS_COLUMNS: string[] = ['Roles', 'Status', 'Date Posted', 'Due Date', 'Job Type', 'Applicants', 'Needs']

export const JOB_LISTINGS_DATA = [
    {
        roles: "Senior Software Engineer",
        status: "Live",
        datePosted: "08 Feb 2024",
        dueDate: "16 Feb 2024",
        jobType: "Full-Time",
        applicants: 1,
        needs: 10
    }
]

export const NEWS_COLUMNS: string[] = ['Gambar', 'Judul','Isi','Tanggal Posting', 'Hastags', 'Penulis']

export const NEWS_DATA  = [
	{
		id: 1,
		title : "Lorem ipsum dolor sit amet",
		image: "/images/news/news1.png",
		createdAt : "20 Okt 2024",
		tags : ["Education", "Technology"],
		author : "Naza Zulfiqi",
		content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione optio suscipit amet rem aliquid iusto fugit, architecto dolor enim dolore in tempora nihil. Corrupti minus eligendi at? Ad, error corporis nesciunt fuga voluptates nihil. Aspernatur voluptatibus soluta asperiores ipsa voluptatum, facere eum laborum, nulla quaerat repellat perspiciatis a, dolorum necessitatibus?"
	}
]

export const JOB_APPLICANTS_COLUMNS:string[] = ['Nama', 'Posisi Sebelumnya', 'No.Telp', 'Resume']

export const JOB_APPLICANTS_DATA = [
    {
        name: "Naza Zulfiqi",
        appliedDate: "9 Feb 2024"
    }
]

export const LOCATION_OPTIONS: optionType[] = [
	{
		id: "Indonesia",
		label: "Indonesia",
	},
	{
		id: "Malaysia",
		label: "Malaysia",
	},
	{
		id: "Singapura",
		label: "Singapura",
	},
	{
		id: "Thailand",
		label: "Thailand",
	},
];

export const EMPLOYEE_OPTIONS: optionType[] = [
	{
		id: "1-50",
		label: "1-50",
	},
	{
		id: "51-150",
		label: "51-150",
	},
	{
		id: "151-250",
		label: "151-250",
	},
	{
		id: "251-500",
		label: "251-500",
	},
	{
		id: "501-1000",
		label: "501-1000",
	},
	{
		id: "1000-above",
		label: "1000-above",
	},
];
