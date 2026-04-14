import { X } from "lucide-react"

type NavLink = {
    label: string
    href: string
}

type Props = {
    isOpen: boolean
    onClose: () => void
    navLinks: NavLink[]
}

export const MobileMenuModal = ({ isOpen, onClose, navLinks }: Props) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 lg:hidden">
            <div onClick={onClose} className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-y-0 right-0 w-full bg-black-primary p-6 flex flex-col">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-white text-lg font-semibold">
                        Barber Name
                    </h2>

                    <button onClick={onClose}>
                        <X className="text-white" />
                    </button>
                </div>

                <nav className="flex flex-col gap-6 text-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={onClose}
                            className="text-white hover:text-gold-primary"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#about"
                        onClick={onClose}
                        className="text-white hover:text-gold-primary"
                    >
                        About
                    </a>
                </nav>

                <a
                    href="#booking"
                    onClick={onClose}
                    className="mt-auto bg-gold-primary text-black py-3 text-center font-semibold"
                >
                    Schedule Now
                </a>
            </div>
        </div>
    )
}
