import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiChevronRight, HiArrowUp } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
    return (
       <footer className="bg-[#202942] px-6 sm:px-10 md:px-16 lg:px-32 xl:px-60 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Image src={"/heart.png"} alt="stethoscope" width={28} height={28}></Image>
                        <p className="text-2xl font-bold text-white">DocAppoint</p>
                    </div>
                    <p className="text-[#9098B1]">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl font-bold text-white">Company</p>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> About us</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Services</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Team</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Project</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Blog</Link>
                    <Link href="/login" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Login</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl font-bold text-white">Departments</p>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Eye Care</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Psychotherapy</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Dental Care</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Orthopedic</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Cardiology</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Gynecology</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#9098B1] hover:text-[#6089F3]"><HiChevronRight/> Neurology</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl font-bold text-white">Contact us</p>
                    <p className="flex items-center gap-2 text-[#9098B1]">
                        <HiOutlineMail /> 
                    DocAppoint@gmail.com</p>
                    <p className="flex items-center gap-2 text-[#9098B1]">
                        <HiOutlinePhone />
                         +152 534-468-323</p>
                    <p className="flex items-center gap-2 text-[#9098B1]"><HiOutlineLocationMarker /> View on Google map</p>

                    <div className="flex gap-3 mt-2">
                        <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#3A4360] text-white hover:bg-[#6089F3]"><FaFacebookF /></Link>
                        <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#3A4360] text-white hover:bg-[#6089F3]"><FaInstagram /></Link>
                        <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#3A4360] text-white hover:bg-[#6089F3]"><FaTwitter /></Link>
                        <Link href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#3A4360] text-white hover:bg-[#6089F3]"><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left border-t border-[#3A4360] mt-12 py-6">
                <p className="text-[#9098B1] text-sm md:text-base">2026 © DocAppoint. Design & Develop with love by tashim tishan.</p>
                <div className="flex gap-4 text-[#9098B1] text-sm md:text-base">
                    <Link href="#" className="hover:text-[#6089F3]">Terms</Link>
                    <Link href="#" className="hover:text-[#6089F3]">Privacy</Link>
                    <Link href="#" className="hover:text-[#6089F3]">About</Link>
                    <Link href="#" className="hover:text-[#6089F3]">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;