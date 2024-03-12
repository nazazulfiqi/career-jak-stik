import { z } from "zod";

export const changePasswordSchema = z.object({
	currentPassword: z.string().min(1, { message: "Current Password is required" }),
	newPassword: z.string().min(1, { message: "New Password is required" }),
	confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
});