"use client";

import { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import { SearchField } from "@heroui/react";

const AppointmentsList = ({ doctors }) => {
    const [query, setQuery] = useState("");

    const filteredDoctors = doctors.filter((doctor) => {
        const search = query.toLowerCase();
        return (
            doctor.name.toLowerCase().includes(search) ||
            doctor.specialty.toLowerCase().includes(search)
        );
    });

    return (
        <>
            <div className="container mx-auto text-center space-y-4 mt-8">
                <h2 className="text-4xl font-bold">All Appoinments</h2>
                <p className="text-muted">Find the right doctor for you</p>
                <SearchField name="search" value={query} onChange={setQuery} className={"w-80 md:w-150 container mx-auto"}>
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-70" placeholder="Search by doctor name or speciality..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>
            <div className="mt-12 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
                ))}
            </div>
        </>
    );
};

export default AppointmentsList;