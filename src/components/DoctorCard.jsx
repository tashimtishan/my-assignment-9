import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";

const DoctorCard = ({ doctor }) => {
    return (
           <div className="group rounded-3xl border border-[#E1E7F7] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-[#6089F3]">
                    {doctor.specialty}
                </span>
            </div>

            <div className="p-6">
                <p className="font-semibold text-lg text-[#202942]">{doctor.name}</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-[#6B7390]">
                    <HiOutlineLocationMarker className="shrink-0" />
                    {doctor.hospital}, {doctor.location}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="px-3 py-1 rounded-full bg-[#F4F7FF] text-[#4B5470] font-medium">{doctor.experience} experience</span>
                    <span className="font-semibold text-[#202942]">৳{doctor.fee}</span>
                </div>

                <Link
                    href={`/appointments/${doctor._id}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#6089F3] text-white font-semibold hover:bg-[#4A72E0] transition-colors"
                >
                    View Details <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;