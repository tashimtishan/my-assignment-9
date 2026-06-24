import DashboardClient from "@/components/DashboardClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export const metadata = {
    title: "Dashboard",
    description: "Manage your appointments and profile on DocAppoint.",
};

const Dashboardpage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;

  const token = jwt.sign(
    { userId: user?.id, name: user?.name, email: user?.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  const result = await fetch(`${process.env.API_URL}/bookings/${user?.id}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await result.json();
  const bookingData = Array.isArray(data) ? data : [];

  return <DashboardClient user={user} bookingData={bookingData} />;
};

export default Dashboardpage;