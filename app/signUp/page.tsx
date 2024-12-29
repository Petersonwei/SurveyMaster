"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/services/auth";
import { toast } from "sonner";

const schema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"), 
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const { handleSubmit, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await signUp(data.email, data.password);
            toast.success("Account created successfully, Please Verify your email address");
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An error occurred during sign up");
            }
        }
        finally {
            setLoading(false);
            reset();
        }
    }

    // For testing purposes only
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="fullName" />
            <input name="email" type="email" />
            <input name="password" type="password" />
            <button type="submit" disabled={loading}>Sign Up</button>
        </form>
    );
}