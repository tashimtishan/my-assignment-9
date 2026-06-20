"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
     const pathname = usePathname();
        const linkClass = (href) => `hover:text-[#6089F3] ${pathname === href ? "text-[#6089F3]" : ""}`;
    return (
       <div className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
                {/* image here */}
                <Image src={"/heart.png"} alt="stethoscope" width={40} height={40}></Image>
                <Link href={"/"}><p className="text-2xl font-bold">DocAppoint</p></Link>
            </div>

            <div className="flex gap-6 text-[#202020] font-medium text-lg">
                <Link href="/" className={linkClass ("/")}>Home</Link>
                <Link href="/appointments" className={linkClass ("/appointments")}>All Appointments</Link>
                <Link href="/dashboard" className={linkClass ("/dashboard")}>Dashboard</Link>
            </div>

            <div className="flex gap-3 text-[#202020] font-medium text-lg">
                <Link href="/login" className={linkClass ("/login")}>Login</Link>
                <Link href="/register" className={linkClass ("/register")}>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;