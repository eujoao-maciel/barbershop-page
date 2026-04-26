import { Title } from "../components/ui/Title.tsx";

export const Gallery = () => {
  const galleryFields = Array.from({ length: 6 });

  return (
    <section id="gallery" className="bg-black-primary px-7 py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14">
        <Title title="Gallery" />

        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          {galleryFields.map((_, index) => (
            <div
              key={index}
              className="aspect-[4/5] w-full border border-gold-primary bg-black-secondary"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
