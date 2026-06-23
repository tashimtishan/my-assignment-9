"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useAuthToken } from "@/hooks/useAuthToken";

const DeleteBooking = ({ bookingId }) => {
    const token = useAuthToken();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setLoading(true);
        try {
            await fetch(`http://localhost:8000/bookings/${bookingId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            toast.success("Booking deleted successfully!");
            setIsOpen(false);
            router.refresh();
        } catch (err) {
            toast.error("Failed to delete booking.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex-1 py-2 rounded-xl border border-red-400 text-red-400 font-medium hover:bg-red-400 hover:text-white transition-colors cursor-pointer"
            >
                Delete
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 flex flex-col items-center gap-4 text-center">
                            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a1 1 0 00-1-1h-4a1 1 0 00-1 1m6 0H7" />
                                </svg>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-[#202942]">Delete Booking</h2>
                                <p className="text-gray-500 mt-1 text-sm">Are you sure you want to delete this booking? This action cannot be undone.</p>
                            </div>

                            <div className="flex gap-3 w-full mt-2">
                                <Button
                                    onPress={() => setIsOpen(false)}
                                    className="flex-1 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 rounded-xl font-medium"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onPress={handleDelete}
                                    isLoading={loading}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium"
                                >
                                    {loading ? "Deleting..." : "Yes, Delete"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteBooking;