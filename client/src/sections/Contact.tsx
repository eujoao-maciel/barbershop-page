import { Clock3, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Title } from "../components/ui/Title.tsx";
import { AddressMap } from "../components/ui/AddressMap.tsx";

const contactItems: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}[] = [
  {
    icon: MapPin,
    title: "123 Barber Avenue",
    subtitle: "Toronto, ON M5V 2T6",
  },
  {
    icon: Phone,
    title: "(416) 555-0189",
    subtitle: "Call us for bookings",
  },
  {
    icon: Mail,
    title: "hello@barbername.com",
    subtitle: "Send us your questions",
  },
  {
    icon: Clock3,
    title: "Mon - Sat: 9AM - 8PM",
    subtitle: "Sunday: Closed",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="bg-black-secondary px-[28px] py-[80px]">
      <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-[56px]">
        <Title title="Contact Info" />

        <div className="grid w-full max-w-[920px] gap-[24px] lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="aspect-square w-full border border-gold-primary bg-black-primary p-[20px] sm:p-[24px] lg:h-[360px] lg:p-[20px]"></div>

          <div className="aspect-square w-full overflow-hidden border border-gold-primary bg-black-primary lg:h-[360px]">
            <AddressMap />
          </div>
        </div>
      </div>
    </section>
  );
};
