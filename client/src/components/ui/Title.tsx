type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="mx-auto flex w-full max-w-[20rem] flex-col items-center gap-4 text-center sm:max-w-[26rem] md:max-w-[32rem]">
      <h2 className="font-serif text-4xl font-normal tracking-[0.02em] text-white-primary md:text-5xl">
        {title}
      </h2>

      <span
        aria-hidden="true"
        className="block h-[3px] w-28 rounded-full bg-gold-primary sm:w-36 md:w-72"
      />
    </div>
  );
};
