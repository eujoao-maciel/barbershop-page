import { Title } from "../components/ui/Title.tsx";

export const Services = () => {
  const serviceCards = Array.from({ length: 4 });

  return (
    <section
      id="services"
      className="bg-black-secondary px-7 py-20 min-h-screen flex items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 md:gap-16">
        <Title title="Services" />

        <div className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {serviceCards.map((_, index) => (
            <div
              key={index}
              aria-hidden="true"
              className="min-h-[12rem] border border-gold-primary bg-black-primary sm:min-h-[15rem] lg:min-h-[17rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
