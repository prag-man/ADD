import Image from "next/image";

export const Create = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8 items-center">
      <Image
        src="/images/assist.jpeg"
        width={400}
        height={300}
        alt="FOMO"
        className="hidden md:block m-4 rounded-md z-10"
      />

      <div className="relative">
        <Image
          src="/images/heart-tick.svg"
          width={200}
          height={200}
          alt="Heart"
          className="hidden md:block absolute bottom-1 left-1/3 top-0 z-0"
        />
        <p className="relative z-10 max-w-[35ch] text-lg ml-8 md:mt-4 text-center md:text-left">
          Create a community of like-minded individuals who can support and
          encourage each other in their digital detox journey.
        </p>
      </div>
    </section>
  );
};