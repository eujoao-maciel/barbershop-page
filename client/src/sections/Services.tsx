import { useState } from "react";
import {
  BrushCleaning,
  Droplets,
  Scissors,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Title } from "../components/ui/Title.tsx";

export const Services = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
              <button
                key={index}
                type="button"
                onClick={() =>
                  setActiveCard((currentCard) =>
                    currentCard === index ? null : index,
                  )
                }
                className={`group flex min-h-[12rem] flex-col items-center border border-gold-primary px-4 pt-8 text-center transition-all duration-200 sm:min-h-[15rem] sm:pt-10 lg:min-h-[17rem] ${
                  activeCard === index
                    ? "bg-surface-dark shadow-[0_0_0_1px_rgba(201,162,39,0.35)]"
                    : "bg-black-primary"
                } md:bg-black-primary md:shadow-none md:hover:-translate-y-1 md:hover:bg-surface-dark`}
                aria-pressed={activeCard === index}
                data-active={activeCard === index}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary sm:h-16 sm:w-16">
                  <Icon
                    className={`h-6 w-6 text-black-primary transition-transform duration-200 sm:h-7 sm:w-7 ${
                      activeCard === index ? "scale-110" : ""
                    } md:scale-100 md:group-hover:scale-110`}
                  />
                </span>

                <h3
                  className={`mt-5 text-base font-medium text-white-primary transition-colors duration-200 sm:mt-6 sm:text-lg ${
                    activeCard === index ? "text-gold-primary" : ""
                  } md:text-white-primary md:group-hover:text-gold-primary`}
                >
                  {title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-6 text-white-primary/60">
                  {description}
                </p>

                <span className="mt-6 mb-5 text-base font-medium text-gold-primary sm:text-lg">
                  {price}
                </span>
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
