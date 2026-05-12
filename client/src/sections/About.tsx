import { Title } from "../components/ui/Title.tsx"
import ownerbarber from "../assets/ownerbarber.jpg"

const highlights = [
    { label: "Experience", value: "+10 years" },
    { label: "Clients", value: "+1000" },
    { label: "Style", value: "Premium" },
]

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-black-secondary px-7 py-20"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
                <Title title="About Us" />

                <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
                    <div className="min-h-[22rem] overflow-hidden border border-gold-primary sm:min-h-[28rem]">
                        <img
                            className="h-full w-full object-cover"
                            src={ownerbarber}
                            alt="owner barber"
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-8">
                        <div className="bg-surface-dark p-4 space-y-5 text-left">
                            <p className="text-base leading-7 text-white-primary/65 sm:text-lg">
                                We created this barbershop to bring back classic
                                grooming. A place where style and confidence
                                meet.
                            </p>

                            <p className="text-base leading-7 text-white-primary/65 sm:text-lg">
                                We offer more than a haircut — we create
                                experiences. Every detail is made for your
                                comfort.
                            </p>

                            <p className="text-base leading-7 text-white-primary/65 sm:text-lg">
                                We believe in quality, respect, and connection.
                                Every client is part of our story.'
                            </p>
                            <p className="text-base leading-7 text-white-primary/65 sm:text-lg">
                                We focus on precision and modern style. Every
                                service is done with care.
                            </p>

                            <p className="text-base leading-7 text-white-primary/65 sm:text-lg">
                                To be a trusted place where style meets
                                personality. More than a cut, a full experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {highlights.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="border border-gold-primary/80 bg-black-primary px-5 py-6 text-center"
                                >
                                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold-primary">
                                        {label}
                                    </span>
                                    <strong className="mt-3 block font-serif text-3xl text-white-primary">
                                        {value}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
