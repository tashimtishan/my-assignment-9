"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateBookingModal = ({ booking }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [patientName, setPatientName] = useState(booking.patientName);
    const [date, setDate] = useState(booking.appointmentDate?.split("T")[0]);
    const [time, setTime] = useState(booking.appointmentTime);
    const [reason, setReason] = useState(booking.reason);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleUpdate = async () => {
        setLoading(true);
        await fetch(`http://localhost:8000/bookings/${booking._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                patientName,
                appointmentDate: date,
                appointmentTime: time,
                reason,
            }),
        });
        setLoading(false);
         toast.success("Appointment updated successfully!");
        setIsOpen(false);
        router.refresh();
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex-1 py-2 rounded-xl border border-[#6089F3] text-[#6089F3] font-medium hover:bg-[#6089F3] hover:text-white transition-colors cursor-pointer"
            >
                Update
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold text-[#202942]">Update Appointment</h2>
                        </div>

                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Doctor Name</label>
                                <input
                                    value={booking.doctorName}
                                    readOnly
                                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-3 py-2.5 text-gray-400 cursor-not-allowed"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Patient Name</label>
                                <input
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3]"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1 flex-1">
                                    <label className="text-sm text-gray-500">Date</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3]"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <label className="text-sm text-gray-500">Time (BD Time)</label>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3]"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Reason for Visit</label>
                                <textarea
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    rows={3}
                                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3] resize-none"
                                />
                            </div>
                        </div>

                        <div className="p-6 border-t flex justify-end gap-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                disabled={loading}
                                className="px-6 py-2.5 rounded-xl bg-[#6089F3] hover:bg-[#4a70e0] text-white font-medium disabled:opacity-60"
                            >
                                {loading ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateBookingModal;