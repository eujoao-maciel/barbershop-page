export const Hero = () => {
    return (
        <section
            id="hero"
            aria-label="Hero section"
            className="relative mt-20 min-h-dvh overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.78)),url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center bg-no-repeat md:mt-0"
        >
            <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-4 pb-14 text-center">
                <div className="flex max-w-3xl flex-col items-center">
                    <div
                        aria-hidden="true"
                        className="mb-8 h-25 w-25 rounded-full border border-gold-primary/60 bg-gold-primary/80"
                    />

                    <h1 className="max-w-[12ch] font-serif text-5xl font-bold tracking-[-0.02em] text-white-primary lg:text-6xl">
                        Name
                    </h1>

                    <p className="mt-1 font-serif text-xl italic text-gold-primary lg:text-2xl">
                        Barber
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-white-primary/75 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7">
                        a little description about barber
                    </p>
                </div>

                <div className="mt-8 flex w-80 max-w-md flex-col gap-3 sm:mt-10 sm:w-full sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                    <a
                        href="#booking"
                        aria-label="Book an appointment"
                        className="w-full bg-gold-primary px-6 py-4 text-center text-sm font-semibold tracking-[0.14em] text-black-primary transition-all duration-200 hover:scale-[1.02] hover:bg-white-primary active:scale-[0.98] sm:w-auto sm:tracking-[0.18em]"
                    >
                        BOOK APPOINTMENT
                    </a>

                    <a
                        href="#contact"
                        aria-label="Try the service for free"
                        className="w-full border border-gold-primary px-6 py-3 text-center text-xs font-semibold tracking-[0.14em] text-gold-primary transition-all duration-200 hover:scale-[1.02] hover:bg-gold-primary hover:text-black-primary active:scale-[0.98] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.18em]"
                    >
                        TRY IT FOR FREE
                    </a>
                </div>
            </div>
        </section>
    )
}
