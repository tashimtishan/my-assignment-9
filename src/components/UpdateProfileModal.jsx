"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const UpdateProfileModal = ({ user }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(user?.name || "");
    const [image, setImage] = useState(user?.image || "");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        setLoading(true);
        try {
            await authClient.updateUser({
                name,
                image,
            });
            toast.success("Profile updated successfully!");
            setIsOpen(false);
            router.refresh();
        } catch (err) {
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full py-2.5 rounded-md bg-[#6089F3] hover:bg-[#4a70e0] text-white font-medium mt-5 transition-colors cursor-pointer"
            >
                Update Profile
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b">
                            <h2 className="text-2xl font-bold text-[#202942]">Update Profile</h2>
                            <p className="text-sm text-gray-500 mt-1">Update your name or profile photo</p>
                        </div>

                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Full Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3]"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-500">Photo URL</label>
                                <input
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="Enter image URL"
                                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:border-[#6089F3]"
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

export default UpdateProfileModal;