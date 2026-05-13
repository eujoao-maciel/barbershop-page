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
          <div className="flex min-h-[320px] flex-col justify-between border border-gold-primary bg-black-primary px-[20px] py-[24px] sm:px-[24px] sm:py-[28px] lg:h-[360px] lg:px-[24px] lg:py-[30px]">
            <div className="space-y-[8px] border-b border-gold-primary/20 pb-[18px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-primary">
                Contact
              </p>
              <h3 className="font-serif text-[28px] leading-[1] text-white-primary sm:text-[32px]">
                Visit us
              </h3>
            </div>

            <div className="grid gap-[16px] py-[18px]">
              {contactItems.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="flex items-start gap-[12px] sm:gap-[14px]"
                >
                  <Icon className="mt-[2px] size-[16px] shrink-0 text-gold-primary sm:size-[18px]" />

                  <div className="text-left">
                    <p className="text-[14px] font-medium leading-[1.35] text-white-primary sm:text-[15px]">
                      {title}
                    </p>
                    <p className="text-[13px] leading-[1.5] text-white-primary/60 sm:text-[14px]">
                      {subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="border-t border-gold-primary/20 pt-[16px] text-[12px] leading-[1.6] text-white-primary/55 sm:text-[13px]">
              Classic service, modern precision, and a space made for your
              routine.
            </p>
          </div>

          <div className="aspect-square w-full overflow-hidden border border-gold-primary bg-black-primary lg:h-[360px]">
            <AddressMap />
          </div>
        </div>
      </div>
    </section>
  );
};
