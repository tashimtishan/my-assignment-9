import DashboardClient from "@/components/DashboardClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Dashboardpage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
     console.log(user)
    const result = await fetch(`http://localhost:8000/bookings/${user?.id}`)
    const bookingData = await result.json();
    console.log(bookingData)
  return <DashboardClient user={user} bookingData={bookingData} />; 
};

export default Dashboardpage;