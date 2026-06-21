import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";
import DoctorCard from "./DoctorCard";
import { getDoctors } from "@/lib/getdoctors";

const Featuresdoctors = async () => {
    const doctors = await getDoctors();
    const topDoctors = [...doctors]
        .sort((a, b) => parseInt(b.experience) - parseInt(a.experience))
        
    return (
        <section className="bg-white py-10 lg:py-20">
            <div className="container mx-auto px-6 md:px-10 lg:px-20">
                <div className="text-center max-w-xl mx-auto">
                    <p className="text-sm font-semibold tracking-wide text-[#6089F3] uppercase">Handpicked for you</p>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#202942]">Top Rated Doctors</h2>
                    <p className="mt-4 text-[#6B7390]">Specialists trusted by patients across Dhaka, ready to see you this week.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topDoctors.slice(0, 3).map((doctor) => (
                      <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard> 
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featuresdoctors;