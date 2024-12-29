"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signIn } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function SignInPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await signIn(data.email, data.password);
            toast.success("Sign-in successfully, Welcome back");
            router.push('/');
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An error occurred during sign in");
            }
        }
        finally {
            setLoading(false);
            reset();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                />
                {errors.email && <p>{errors.email.message}</p>}
                
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                />
                {errors.password && <p>{errors.password.message}</p>}
                
                <button type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </form>
            <Link href="/signUp">Sign Up</Link>
        </div>
    )
}