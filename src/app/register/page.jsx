'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Registerpage = () => {
     const onSubmit = async (e) =>{
        e.preventDefault()

        const formData= new FormData(e.currentTarget)
        const user= Object.fromEntries(formData.entries())
        console.log(user)

        const {data, error} =await authClient.signUp.email({
            email: user.email,
            image: user.image,
            name: user.name,
            password: user.password
        })
        if(data){
            redirect("/login")
        }
        if(error){
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
                <p className="font-bold text-xl mt-3">Register</p>
                <p className="text-muted">Create Your DocAppoint Account</p>
            </div>
            <TextField
                isRequired
                name="name"
                type="text"
            >
                <Label>Name</Label>
                <Input placeholder="Enter Your Name Here" />
                <FieldError />
            </TextField>
            <TextField
                isRequired
                name="email"
                type="email"
            >
                <Label>Email</Label>
                <Input placeholder="Enter Your Email Address" />
                <FieldError />
            </TextField>
            <TextField
                name="image"
                type="url"
            >
                <Label>Photo URL (optional)</Label>
                <Input placeholder="https://...." />
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
                    if (!/[a-z]/.test(value)) {
                        return "Password must contain at least one lowercase letter";
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
                    Register
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
                <p className="text-center text-muted">Already Have An Account? <Link href={"/login"} className="font-semibold text-sky-500">Login</Link></p>
            </div>
        </Form>
    );
};

export default Registerpage;