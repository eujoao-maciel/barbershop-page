import { Title } from "../components/ui/Title.tsx"
import barberClient from "../assets/barber-client.jpeg"
import classicBarber from "../assets/classicBarberShop.jpeg"
import barber from "../assets/barber.jpeg"
import clippercreating from "../assets/clippercreating.jpeg"
import barbershopPole from "../assets/barbershopPole.jpeg"
import barber2 from "../assets/barber2.jpg"

export const Gallery = () => {
    const galleryImages = [
        {
            src: barberClient,
            alt: "Barber trimming a client's beard in the chair.",
        },
        {
            src: classicBarber,
            alt: "Barbershop interior with chairs and warm lighting.",
        },
        {
            src: barber2,
            alt: "Classic barbershop with black chairs and a brick wall.",
        },
        {
            src: barber,
            alt: "Barber refining a men's haircut with comb and scissors.",
        },
        {
            src: clippercreating,
            alt: "Clipper creating a fade on a men's haircut.",
        },
        {
            src: barbershopPole,
            alt: "Barbershop pole with a shaving brush in the background.",
        },
    ]

    return (
        <section id="gallery" className="bg-black-primary px-7 py-20">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14">
                <Title title="Gallery" />

                <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
                    {galleryImages.map((image) => (
                        <div
                            key={image.src}
                            className="group aspect-[4/5] w-full overflow-hidden border border-gold-primary bg-black-secondary"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
