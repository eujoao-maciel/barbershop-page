import { useState } from "react"
import { Title } from "../components/ui/Title.tsx"
import { createBookingMessage } from "../features/booking.utils.ts"

export const Booking = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [date, setDate] = useState("")

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !phone || !service || !date) {
            alert("Please fill all fields.")
            return
        }

        const message = createBookingMessage(name, phone, service, date)

        const barberPhone = "5585994513251"

        const whatsappUrl = `https://wa.me/${barberPhone}?text=${encodeURIComponent(message)}`

        window.open(whatsappUrl, "_blank")
    }

    return (
        <section
            id="booking"
            className="min-h-screen bg-black-primary px-[28px] py-[80px]"
        >
            <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-[56px]">
                <Title title="Book your cut" />

                <div className="w-full max-w-[896px] border border-gold-primary bg-black-secondary px-[24px] py-[48px] sm:px-[40px] md:px-[64px] md:py-[80px]">
                    <form
                        onSubmit={handleBooking}
                        className="mx-auto flex w-full max-w-[576px] flex-col gap-[16px]"
                    >
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                        />

                        <select
                            className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none"
                            value={service}
                            onChange={(e) => {
                                setService(e.target.value)
                            }}
                        >
                            <option value="">Select Service</option>
                            <option value="haircut">Haircut</option>
                            <option value="visagism">Visagism</option>
                            <option value="beard">Beard Trim</option>
                            <option value="wash">Hair Wash</option>
                        </select>

                        <input
                            type="date"
                            className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                        />

                        <button
                            type="submit"
                            className="h-[48px] bg-gold-primary text-[11px] font-semibold uppercase tracking-[0.18em] text-black-primary transition-opacity duration-200 hover:opacity-80"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
