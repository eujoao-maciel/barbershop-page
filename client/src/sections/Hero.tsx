import barberbackground from "../assets/barberbackground.jpg"

export const Hero = () => {
    return (
        <section className="relative flex items-center justify-center w-full h-screen mt-20 lg:mt-0">
            <img
                src={barberbackground}
                alt="Hero section image"
                className="absolute z-10 top-0 left-0 w-screen h-full object-cover object-center"
            />

            <main className="relative flex flex-col items-center justify-center z-20">
                <div className="flex flex-col items-center mb-15 justify-center gap-10 sm:gap-13">
                    <div className="bg-gold-primary/80 rounded-full w-24 h-24 md:w-30 md:h-30 lg:w-35 lg:h-35"></div>

                    <div className="flex flex-col items-center justify-center gap-1">
                        <h1 className="font-serif font-semibold text-white-primary text-6xl md:text-7xl">
                            Name
                        </h1>
                        <h3 className="font-serif font-medium text-gold-primary text-2xl sm:text-4xl">
                            Barber
                        </h3>
                    </div>

                    <p>A litle description about barbershop</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                    <button className="bg-gold-primary border px-6 py-4 font-sans text-sm font-semibold uppercase text-black-primary transition-colors duration-200 hover:bg-white-primary">
                        Book appointment
                    </button>
                    <button className="border border-gold-primary bg-black-primary px-6 py-4 font-sans text-sm font-semibold uppercase text-gold-primary transition-colors duration-200 hover:bg-gold-primary hover:text-black-primary">
                        Send a message
                    </button>
                </div>
            </main>
        </section>
    )
}
