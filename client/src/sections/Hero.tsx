export const Hero = () => {
    return (
        <section
            id="hero"
            aria-label="Hero section"
            className="relative min-h-screen bg-center bg-no-repeat"
        >
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80"
                    alt="Barber cutting hair"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
            <div className="absolute left-1/2 top-24 h-32 w-32 -translate-x-1/2 rounded-full bg-gold-primary/70 blur-2xl" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8">
                <div className="flex max-w-3xl flex-col items-center text-center">
                    <h1 className="font-serif text-5xl font-bold tracking-[-0.02em] text-white-primary sm:text-6xl lg:text-7xl">
                        Name
                    </h1>

                    <p className="mt-3 font-serif text-2xl italic text-gold-primary sm:text-3xl">
                        Barber
                    </p>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white-primary/75 sm:text-base">
                        a little description about barber
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#booking"
                            aria-label="Book an appointment"
                            className="rounded-sm bg-gold-primary px-7 py-3 text-sm font-semibold tracking-[0.18em] text-black-primary transition-all duration-200 hover:bg-white-primary hover:scale-[1.02] active:scale-[0.98]"
                        >
                            BOOK APPOINTMENT
                        </a>

                        <a
                            href="#contact"
                            aria-label="Try the service for free"
                            className="rounded-sm border border-gold-primary px-7 py-3 text-sm font-semibold tracking-[0.18em] text-gold-primary transition-all duration-200 hover:bg-gold-primary hover:text-black-primary hover:scale-[1.02] active:scale-[0.98]"
                        >
                            TRY IT FOR FREE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
