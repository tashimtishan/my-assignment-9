import BookAppointment from "@/components/BookAppointment";
import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar, HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/doctors/${id}`);
  const doctor = await res.json();

  return (
    <div className="container mx-auto flex justify-center py-12 md:py-20 px-4 rounded-lg shadow-lg mt-10 mb-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-5xl w-full">

        <div className="relative w-full h-80 sm:h-96 lg:w-[380px] lg:h-[450px] shrink-0 rounded-2xl overflow-hidden">
          <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
        </div>

        <div className="flex flex-col gap-6 flex-1 w-full">
          <div>
            <p className="text-[#4274f5] font-medium text-lg md:text-xl border inline-block px-3 bg-[#C0E2FD] rounded-full">{doctor.specialty}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#202942]">{doctor.name}</h1>
            <p className="text-gray-500 mt-2 text-base md:text-lg">{doctor.experience} of experience</p>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{doctor.description}</p>

          <div className="flex flex-col gap-3 text-gray-600 text-base md:text-lg">
            <p className="flex items-center gap-3">
              <HiOutlineOfficeBuilding className="text-[#6089F3] text-xl shrink-0" />
              {doctor.hospital}
            </p>
            <p className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-[#6089F3] text-xl shrink-0" />
              {doctor.location}
            </p>
            <p className="flex items-center gap-3">
              <HiOutlineCurrencyDollar className="text-[#6089F3] text-xl shrink-0" />
              Consultation Fee: ৳{doctor.fee}
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 font-semibold text-[#202942] mb-3 text-base md:text-lg">
              <HiOutlineClock className="text-[#6089F3] text-xl shrink-0" />
              Availability
            </p>
            <div className="flex gap-3 flex-wrap">
              {doctor.availability.map((slot, i) => (
                <span key={i} className="px-5 py-2 rounded-full border border-[#6089F3] text-[#6089F3] text-sm md:text-base font-medium">
                  {slot}
                </span>
              ))}
            </div>
          </div>

          <BookAppointment doctor={doctor}></BookAppointment>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;