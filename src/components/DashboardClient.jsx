"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const DashboardClient = ({ user, bookingData }) => {
    const [activeTab, setActiveTab] = useState("bookings");

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#202942] mb-8">Dashboard</h1>

            <div className="flex gap-3 mb-8">
                <button
                    onClick={() => setActiveTab("bookings")}
                    className={`px-6 py-2.5 rounded-xl font-medium transition-colors cursor-pointer ${activeTab === "bookings"
                            ? "bg-[#6089F3] text-white"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    My Bookings
                </button>
                <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-6 py-2.5 rounded-xl font-medium transition-colors cursor-pointer ${activeTab === "profile"
                            ? "bg-[#6089F3] text-white"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    My Profile
                </button>
            </div>

            {activeTab === "bookings" && (
                <div>
                    {bookingData.length === 0 ? (
                        <p className="text-gray-500 text-lg">No bookings found.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bookingData.map((booking) => (
                                <div key={booking._id} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-3">
                                    <div className="flex flex-col gap-1.5 flex-1">
                                        <div>
                                            <p className="font-semibold text-[#202942] text-lg">{booking.doctorName}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Patient: <span className="font-semibold text-black">{booking.patientName}</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Date: <span className="font-semibold text-black">{formatDate(booking.appointmentDate)}</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Time: <span className="font-semibold text-black">{booking.appointmentTime}</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Reason: <span className="font-semibold text-black">{booking.reason || "—"}</span></p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-3 border-t border-gray-100">
                                        <button className="flex-1 py-2 rounded-xl border border-[#6089F3] text-[#6089F3] font-medium hover:bg-[#6089F3] hover:text-white transition-colors cursor-pointer">
                                            Update
                                        </button>
                                        <button className="flex-1 py-2 rounded-xl border border-red-400 text-red-400 font-medium hover:bg-red-400 hover:text-white transition-colors cursor-pointer">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {activeTab === "profile" && (
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-w-md">
                    <div className="flex flex-col gap-3 text-gray-700">

                        <div className="flex items-center gap-3">
                            {user?.image ? (
                                <Image src={user.image} alt="userimage" width={55} height={55} className="rounded-full" />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-[#6089F3] flex items-center justify-center text-white font-bold text-lg shrink-0">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <div>
                                <p className="font-bold">{user?.name}</p>
                                <p className="font-medium">{user?.email}</p>
                            </div>
                        </div>
                       <Button className={"w-full rounded-md bg-[#6089F3] mt-5"}>Update Profile</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardClient;