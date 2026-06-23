'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
export const metadata = {
    title: "Login",
    description: "Login to your DocAppoint account to manage your appointments.",
};
const Loginpage = () => {
      const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        console.log(user)

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })
        if (data) {
            redirect("/")
        }
        if (error) {
            alert("invalid information")
        }
    }
       const handleGooglesignin = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }
    return (
        <Form onSubmit={onSubmit} className="flex w-120 flex-col gap-4 container mx-auto p-10 mt-10 rounded-xl shadow-lg mb-10">

            <div className="flex flex-col items-center justify-center">
                <Image src={"/heart.png"} alt="stethoscope" width={40} height={40}></Image>
                <p className="font-bold text-xl mt-3">Login</p>
                <p className="text-muted">Welcome Back To DocAppoint</p>
            </div>
            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="Enter Your Email Address" />
                <FieldError />
            </TextField>
            <TextField
                isRequired
                minLength={6}
                name="password"
                type="password"
                validate={(value) => {
                    if (value.length < 6) {
                        return "Password must be at least 6 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }
                    return null;
                }}
            >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <FieldError />
            </TextField>
            <div className="flex gap-2">
                <Button className="w-full mt-5 rounded-md bg-sky-500" type="submit">
                    Login
                </Button>
            </div>
            <div className="flex items-center w-full my-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-3 text-muted">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex gap-2">
                <Button onClick={handleGooglesignin} className="w-full rounded-md" variant={"outline"} type="submit">
                    <FcGoogle className="w-5 h-5" /> Continue With Google
                </Button>
            </div>
            <div>
                <p className="text-center text-muted">Dont Have An Account? <Link href={"/register"} className="font-semibold text-sky-500">Register</Link></p>
            </div>
        </Form>
    );
};

export default Loginpage;