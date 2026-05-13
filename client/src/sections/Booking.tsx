import { Title } from "../components/ui/Title.tsx";

export const Booking = () => {
  return (
    <section
      id="booking"
      className="min-h-screen bg-black-primary px-[28px] py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-[56px]">
        <Title title="Book your cut" />

        <div className="w-full max-w-[896px] border border-gold-primary bg-black-secondary px-[24px] py-[48px] sm:px-[40px] md:px-[64px] md:py-[80px]">
          <form className="mx-auto flex w-full max-w-[576px] flex-col gap-[16px]">
            <input
              type="text"
              placeholder="Full Name"
              className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
            />

            <select className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none">
              <option value="select">Select Service</option>
              <option value="haircut">Haircut</option>
              <option value="visagism">Visagism</option>
              <option value="beard">Beard Trim</option>
              <option value="wash">Hair Wash</option>
            </select>

            <input
              type="text"
              placeholder="dd/mm/aaaa"
              className="h-[48px] border border-gold-primary bg-surface-dark px-[16px] text-sm text-white-primary outline-none placeholder:text-white-primary/55"
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
  );
};
