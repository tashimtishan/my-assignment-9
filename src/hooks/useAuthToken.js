"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export const useAuthToken = () => {
    const [token, setToken] = useState(null);
    const { data: session } = authClient.useSession();
    const user = session?.user;

    useEffect(() => {
        const fetchToken = async () => {
            if (!user) return;
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                }),
            });
            const data = await res.json();
            setToken(data.token);
        };
        fetchToken();
    }, [user]);

    return token;
};