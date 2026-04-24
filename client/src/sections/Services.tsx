import {
  BrushCleaning,
  Droplets,
  Scissors,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Title } from "../components/ui/Title.tsx";

export const Services = () => {
  const serviceCards: {
    icon: LucideIcon;
    title: string;
    description: string;
    price: string;
  }[] = [
    {
      icon: Scissors,
      title: "Haircut",
      description: "Modern cuts for your everyday style.",
      price: "$10",
    },
    {
      icon: BrushCleaning,
      title: "Beard Trim",
      description: "Precise beard shaping with a polished finish.",
      price: "$12",
    },
    {
      icon: Sparkles,
      title: "Visagism",
      description: "Personalized styling for your face and image.",
      price: "$15",
    },
    {
      icon: Droplets,
      title: "Hair Wash",
      description: "Refreshing cleansing for a clean scalp feel.",
      price: "$8",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black-secondary px-7 py-20 min-h-screen flex items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 md:gap-16">
        <Title title="Services" />

        <div className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {serviceCards.map(
            ({ icon: Icon, title, description, price }, index) => (
              <div
                key={index}
                aria-hidden="true"
                className="flex min-h-[12rem] flex-col items-center border border-gold-primary bg-black-primary px-4 pt-8 text-center sm:min-h-[15rem] sm:pt-10 lg:min-h-[17rem]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 text-black-primary sm:h-7 sm:w-7" />
                </span>

                <h3 className="mt-5 text-base font-medium text-white-primary sm:mt-6 sm:text-lg">
                  {title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-6 text-white-primary/60">
                  {description}
                </p>

                <span className="mt-6 mb-5 text-base font-medium text-gold-primary sm:text-lg">
                  {price}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
