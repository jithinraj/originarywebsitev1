"use server";

import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { z } from "zod";

const SignUpSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(100),
});

export async function signUp(formData: FormData) {
  const data = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    password: String(formData.get("password") || ""),
  };

  const parsed = SignUpSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: "Invalid input" };
  }

  const { name, email, password } = parsed.data;

  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return { ok: false, error: "Email already in use" };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: { name, email, passwordHash },
    });

    return { ok: true };
  } catch (error) {
    console.error("Signup error:", error);
    return { ok: false, error: "Something went wrong" };
  }
}