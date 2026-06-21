import Hero from "@/components/Banner";
import Featuresdoctors from "@/components/Featuresdoctors";
import { Suspense } from "react";
import { Spinner } from "@heroui/react";
import Review from "@/components/Review";
import Whychoosedocpoint from "@/components/Whychoosedocpoint";

export default function Home() {
  return (
    <main>
     <Hero></Hero>
     <Suspense
                fallback={
                    <div className="flex justify-center items-center py-24">
                        <Spinner size="lg" />
                    </div>
                }
            >
                <Featuresdoctors />
            </Suspense>
     <Whychoosedocpoint></Whychoosedocpoint>
     <Review></Review>
    </main>
  );
}
