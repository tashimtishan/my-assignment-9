import DoctorCard from "@/components/DoctorCard";
import { getDoctors } from "@/lib/getdoctors";
import AppointmentsList from "@/components/AppointmentsList";
import { Label, SearchField } from "@heroui/react";
const Appointmentspage = async () => {
    const doctors = await getDoctors();
    
    return <AppointmentsList doctors={doctors} />;
    
};

export default Appointmentspage;