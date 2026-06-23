"use client";

import { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useAuthToken } from "@/hooks/useAuthToken";

const BookAppointment = ({ doctor }) => {
     const token = useAuthToken();
    const [appointmentTime, setAppointmentTime] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [patientName, setPatientName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [reason, setReason] = useState("");

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const { fee,name,_id,speciality,experience,availability,hospital,location} = doctor;

    const handlebooking = async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            doctorId: _id,
            doctorName: name,
            price: fee,
            Speciality: speciality,
            Experience: experience,
            Availability: availability,
            Hospital: hospital,
            Location: location,
            appointmentDate: new Date(appointmentDate),
            appointmentTime,
            email,
            patientName,
            gender,
            phone,
            reason
        };
        try {
            const res = await fetch("http://localhost:8000/bookings", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(bookingData)
            });

            const data = await res.json();
            console.log(data);

            setIsOpen(false);
            toast.success("booked successfully!")
        } catch (err) {
            console.error("Booking failed:", err);
        }
    };

    return (
        <>
            <Button
                onPress={() => setIsOpen(true)}
                className="mt-2 w-full sm:w-fit px-10 py-7 bg-[#6089F3] hover:bg-[#4a70e0] text-white text-lg font-semibold rounded-xl"
            >
                Book Appointment
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />

                    <div
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-xl mx-4 max-h-[90vh] overflow-y-auto z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold text-[#202942]">
                                Book Appointment
                            </h2>
                            <p className="text-base text-gray-500 mt-1">
                                with {doctor.name}
                            </p>
                        </div>

                        <div className="p-6 flex flex-col gap-4">
                            <Input
                                label="Your Email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                variant="bordered"
                            />

                            <Input
                                label="Doctor Name"
                                value={doctor.name}
                                readOnly
                                variant="bordered"
                            />

                            <Input
                                label="Patient Name"
                                placeholder="Enter patient name"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                variant="bordered"
                            />

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-600">
                                    Gender
                                </label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3]"
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <Input
                                label="Phone Number"
                                placeholder="+880"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                variant="bordered"
                            />

                            <div className="flex gap-4">

                                <div className="flex flex-col flex-1 gap-1">
                                    <label className="text-sm text-gray-600">
                                        Appointment Date
                                    </label>
                                    <Input
                                        type="date"
                                        variant="bordered"
                                        value={appointmentDate}
                                        onChange={(e) => setAppointmentDate(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col flex-1 gap-1">
                                    <label className="text-sm text-gray-600">
                                        Appointment Time
                                    </label>
                                    <Input
                                        type="time"
                                        variant="bordered"
                                        value={appointmentTime}
                                        onChange={(e) => setAppointmentTime(e.target.value)}
                                    />
                                </div>

                            </div>

                            <TextArea
                              placeholder="Describe your symptoms or reason for visit"
                                label="Reason for Visit (Optional)"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                variant="bordered"
                                rows={3}
                            />
                        </div>

                        <div className="p-6 border-t flex justify-end gap-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handlebooking}
                                className="px-6 py-2.5 rounded-xl bg-[#6089F3] hover:bg-[#4a70e0] text-white font-medium"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookAppointment;