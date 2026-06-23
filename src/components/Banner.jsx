import Image from "next/image";
import Link from "next/link";
import { HiCheckCircle, HiOutlineLocationMarker } from "react-icons/hi";

const departments = ["Cardiology", "Eye Care", "Dental Care", "Neurology", "Gynecology"];

const Hero = () => {
    return (
        <section className="bg-[#F4F7FF] p-5 pb-20">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-50 items-center">

                <div>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#6089F3] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2BAE7E] animate-pulse motion-reduce:animate-none"></span>
                        Now booking across Dhaka
                    </p>

                    <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#202942] leading-[1.1]">
                        Book a doctor in minutes, <span className="text-[#6089F3]">not in line.</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-[#4B5470] max-w-xl">
                        Search verified specialists, check real time slots, and confirm your visit without standing at the reception desk.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/appointments"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6089F3] text-white font-semibold hover:bg-[#4A72E0] transition-colors"
                        >
                            Browse Doctors
                        </Link>
                        <Link
                            href={"/dashboard"}
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#C7D2EC] text-[#202942] font-semibold hover:border-[#6089F3] hover:text-[#6089F3] transition-colors"
                        >
                            My Bookings
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                        {departments.map((dept) => (
                            <span
                                key={dept}
                                className="px-3 py-1 rounded-full bg-white border border-[#E1E7F7] text-xs font-medium text-[#4B5470]"
                            >
                                {dept}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="relative max-w-sm mx-auto lg:max-w-md lg:mx-0 scale-130">
                    <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-2 rounded-3xl bg-[#6089F3]/10 border border-[#E1E7F7]"></div>

                    <div className="relative -rotate-1 hover:rotate-0 transition-transform duration-300 rounded-3xl bg-white border border-[#E1E7F7] shadow-xl shadow-[#6089F3]/10 overflow-hidden">
                        <div className="flex items-center justify-between px-6 pt-5">
                            <div className="flex items-center gap-2">
                                <Image src="/heart.png" alt="DocAppoint" width={20} height={20} />
                                <span className="text-sm font-bold text-[#202942]">DocAppoint</span>
                            </div>
                            <span className="text-xs font-semibold text-[#9098B1]">Token 014</span>
                        </div>

                        <div className="flex items-center gap-4 px-6 pt-5">
                            <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden ring-2 ring-[#6089F3]/10">
                                <Image
                                    src="/photo-1758691462651-611d730c5272.jpg"
                                    alt="Dr. Ayesha Rahman"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-[#202942]">Dr. Ayesha Rahman</p>
                                <p className="text-sm text-[#6B7390]">Cardiologist · Labaid Cardiac Hospital</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 px-6 pt-6 text-sm">
                            <div>
                                <p className="text-[#9098B1] text-xs uppercase tracking-wide">Date</p>
                                <p className="font-semibold text-[#202942] mt-1">Fri, 12 May</p>
                            </div>
                            <div>
                                <p className="text-[#9098B1] text-xs uppercase tracking-wide">Time</p>
                                <p className="font-semibold text-[#202942] mt-1">04:00 PM</p>
                            </div>
                            <div className="flex items-start gap-1">
                                <HiOutlineLocationMarker className="mt-0.5 text-[#9098B1] shrink-0" />
                                <p className="text-[#4B5470]">Dhanmondi, Dhaka</p>
                            </div>
                            <div>
                                <p className="text-[#9098B1] text-xs uppercase tracking-wide">Fee</p>
                                <p className="font-semibold text-[#202942] mt-1">৳800</p>
                            </div>
                        </div>

                        <div className="relative mt-6">
                            <div className="border-t-2 border-dashed border-[#E1E7F7]"></div>
                            <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#F4F7FF]"></div>
                            <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F4F7FF]"></div>
                        </div>

                        <div className="flex items-center justify-between px-6 py-5">
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2BAE7E]">
                                <HiCheckCircle /> Confirmed
                            </span>
                            <span className="text-xs text-[#9098B1]">Next slot in 25 min</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;