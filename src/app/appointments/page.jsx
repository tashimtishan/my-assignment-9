import DoctorCard from "@/components/DoctorCard";
import { getDoctors } from "@/lib/getdoctors";
import AppointmentsList from "@/components/AppointmentsList";
import { Label, SearchField } from "@heroui/react";


 export const metadata = {
    title: "All Appointments",
    description: "Browse all available doctors and book your appointment today.",
};
const Appointmentspage = async () => {
    const doctors = await getDoctors();
    
    return <AppointmentsList doctors={doctors} />;
    
};

export default Appointmentspage;