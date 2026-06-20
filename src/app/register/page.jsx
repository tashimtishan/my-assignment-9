'use client'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const Loginpage = () => {
    return (
        <Form className="flex w-120 flex-col gap-4 container mx-auto p-10 mt-10 rounded-xl shadow-lg mb-10">

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
                name="photo Url"
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
                    Register
                </Button>
            </div>
            <div className="flex items-center w-full my-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-3 text-muted">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex gap-2">
                <Button className="w-full rounded-md" variant={"outline"} type="submit">
                    <FcGoogle className="w-5 h-5" /> Continue With Google
                </Button>
            </div>
            <div>
                <p className="text-center text-muted">Already Have An Account? <Link href={"/login"} className="font-semibold text-sky-500">Login</Link></p>
            </div>
        </Form>
    );
};

export default Loginpage;