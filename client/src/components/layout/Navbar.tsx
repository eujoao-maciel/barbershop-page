import { Menu } from 'lucide-react'

export const Navbar = () => {
    const navLinks = [
        { label: "Services", href: "#services" },
        { label: "Gallery", href: "#gallery" },
        { label: "Book now", href: "#booking" },
        { label: "Contact", href: "#contact" },
    ]

    return (
        <header className="fixed md:static mb-20 md:mb-4 top-0 left-0 z-50 w-full border-b border-gold-primary bg-black-primary">
            <div className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex w-full items-center justify-between py-5">
                    <div className="flex flex-shrink-0 items-center gap-3">
                        <span
                            className="block h-10 w-10 rounded-full bg-gold-primary"
                            aria-hidden="true"
                        />

                        <div className="flex flex-col leading-none">
                            <span className="font-serif text-lg font-semibold text-white-primary">
                                Barber Name
                            </span>
                            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-primary">
                                Barber
                            </span>
                        </div>
                    </div>

                    <div className="hidden flex-1 items-center justify-center lg:flex">
                        <nav aria-label="Primary navigation">
                            <ul className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="font-serif text-base font-medium text-white-primary transition-colors duration-200 hover:text-gold-primary"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="hidden flex-shrink-0 items-center justify-end lg:flex">
                        <div className="flex items-center gap-3">
                            <a
                                href="#about"
                                className="border border-gold-primary px-4 py-2 font-sans text-sm font-semibold text-gold-primary transition-colors duration-200 hover:bg-gold-primary hover:text-black-primary"
                            >
                                About
                            </a>
                            <a
                                href="#booking"
                                className="bg-gold-primary px-6 py-3 font-sans text-sm font-semibold text-black-primary transition-colors duration-200 hover:bg-white-primary"
                            >
                                Schedule Now
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-shrink-0 items-center justify-end lg:hidden">
                        <button>
                          <Menu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
