import { HiStar } from "react-icons/hi";

const reviews = [
    {
        name: "Mehzabin Karim",
        initials: "MK",
        context: "Booked Dr. Imran Hossain · Neurologist",
        quote: "I checked Dr. Imran's open slots, picked 5 PM, and got a confirmation right away. No calling Square Hospital's reception three times like I used to.",
        rating: 5,
    },
    {
        name: "Tanvir Ahmed",
        initials: "TA",
        context: "Booked Dr. Nusrat Jahan · Pediatrician",
        quote: "My son needed a same-week pediatrician visit. I booked from my phone, then moved the time the next day without calling anyone to reschedule.",
        rating: 5,
    },
    {
        name: "Farhana Sultana",
        initials: "FS",
        context: "Booked Dr. Farzana Akter · Dermatologist",
        quote: "The ৳700 fee was shown before I even picked a slot. No surprise add-ons at the counter like my last clinic visit.",
        rating: 4,
    },
];

const PatientReviews = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-6 md:px-10 lg:px-20">
                <div className="text-center max-w-xl mx-auto">
                    <p className="text-sm font-semibold tracking-wide text-[#6089F3] uppercase">Patient Stories</p>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#202942]">
                        What patients say after booking
                    </h2>
                    <p className="mt-4 text-[#6B7390]">
                        Real visits, real specialists, no front desk back-and-forth.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="group relative rounded-3xl bg-[#F4F7FF] border border-[#E1E7F7] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="absolute top-4 right-6 font-serif text-7xl text-[#6089F3]/10 select-none">
                                
                            </span>

                            <div className="relative flex gap-1 text-[#F5B400]">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <HiStar key={i} className={i < review.rating ? "" : "text-[#E1E7F7]"} />
                                ))}
                            </div>

                            <p className="relative mt-5 text-[#374166] leading-relaxed">
                                {review.quote}
                            </p>

                            <div className="relative flex items-center gap-3 mt-7">
                                <div className="w-11 h-11 shrink-0 rounded-full bg-[#6089F3]/10 flex items-center justify-center text-[#6089F3] font-semibold text-sm">
                                    {review.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-[#202942] text-sm">{review.name}</p>
                                    <p className="text-xs text-[#9098B1]">{review.context}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientReviews;