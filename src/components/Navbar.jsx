"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
const Navbar = () => {
    const { data: session, } = authClient.useSession()
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const linkClass = (href) => `hover:text-[#6089F3] ${pathname === href ? "text-[#6089F3]" : ""}`;

    const user = session?.user
    console.log(user)
    const handleSignout = async () => {
        await authClient.signOut();
    }

    const navLinks = (
        <>
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/appointments" className={linkClass("/appointments")}>All Appointments</Link>
            <Link href="/dashboard" className={linkClass("/dashboard")}>Dashboard</Link>
        </>
    );

    const authLinks = (
  <>
        {user ? (
            <>
                <Avatar>
                    <Avatar.Image src={user?.image || undefined} alt={user?.name} />
                    <Avatar.Fallback>{user?.name?.[0]?.toUpperCase()}</Avatar.Fallback>
                </Avatar>
                <Button onClick={handleSignout} variant={"danger"}>Logout</Button>
            </>
        ) : (
            <>
                <Link href="/login" className={linkClass("/login")}>Login</Link>
                <Link href="/register" className={linkClass("/register")}>Register</Link>
            </>
        )}
    </>
    );

    return (
        <div className="container mx-auto px-4 py-4 relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Image src={"/heart.png"} alt="stethoscope" width={40} height={40}></Image>
                    <Link href={"/"}><p className="text-xl md:text-2xl font-bold">DocAppoint</p></Link>
                </div>

                <div className="hidden lg:flex gap-6 text-[#202020] font-medium text-lg">
                    {navLinks}
                </div>

                <div className="hidden lg:flex gap-3 text-[#202020] font-medium text-lg">
                    {authLinks}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-[#202020]"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden flex flex-col gap-4 mt-4 pb-4 text-[#202020] font-medium text-lg border-t pt-4">
                    {navLinks}
                    <div className="flex gap-3 pt-2 border-t">
                        {authLinks}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;