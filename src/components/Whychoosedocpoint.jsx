import { HiBadgeCheck, HiOutlineClock, HiShieldCheck, HiOutlineCash } from "react-icons/hi";

const reasons = [
    {
        icon: HiBadgeCheck,
        title: "Verified Specialists",
        desc: "Every doctor on DocAppoint is checked across departments like cardiology, dermatology, and neurology before they're listed.",
    },
    {
        icon: HiOutlineClock,
        title: "Real Slots, No Calling",
        desc: "See each doctor's actual open hours and grab a slot directly, instead of phoning the front desk to ask what's free.",
    },
    {
        icon: HiShieldCheck,
        title: "Secure Booking",
        desc: "Your appointments sit behind a signed-in account, so only you can view, update, or cancel what you've booked.",
    },
    {
        icon: HiOutlineCash,
        title: "Upfront Fees",
        desc: "Consultation fees are shown before you book, so there's no surprise once you're sitting in the waiting room.",
    },
];

const Whychoosedocpoint = () => {
    return (
        <section className="bg-[#F4F7FF] py-16 lg:py-24">
            <div className="container mx-auto px-6 md:px-10 lg:px-20">
                <div className="text-center max-w-xl mx-auto">
                    <p className="text-md font-semibold tracking-wide text-[#6089F3] uppercase">Why DocAppoint</p>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#202942]">
                        Built around how Dhaka actually books a doctor
                    </h2>
                    <p className="mt-4 text-[#6B7390]">
                        No more queueing at reception or calling around for an open slot, everything happens from your phone.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group rounded-3xl bg-white border border-[#E1E7F7] p-7 hover:border-[#6089F3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#6089F3]/10 flex items-center justify-center text-[#6089F3] text-2xl group-hover:bg-[#6089F3] group-hover:text-white transition-colors duration-300">
                                <Icon />
                            </div>
                            <p className="mt-5 font-semibold text-lg text-[#202942]">{title}</p>
                            <p className="mt-2 text-sm text-[#6B7390] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Whychoosedocpoint;