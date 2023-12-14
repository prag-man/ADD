import Image from "next/image";

export const GatherSupport = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8 items-center">
      <Image
        src="/images/support.webp"
        width={400}
        height={300}
        alt="FOMO"
        className="hidden md:block m-4 rounded-md z-10"
      />

      <div className="relative">
        <Image
          src="/images/heart-tick.svg"
          width={300}
          height={300}
          alt="Heart"
          className="hidden md:block absolute left-1/3 -top-1/3  z-0"
        />
        <p className="relative z-10 text-lg max-w-[65ch] ml-8 md:mt-4 text-center md:text-left">
          {
          "At Anuvrat Digital Detox, we believe in the power of collective support. Our mission to promote balanced tech usage and mental well-being relies on community backing. Join us in fostering a healthier relationship with technology through shared goals, advocacy, and collaborative efforts. Together, we can make a meaningful difference in our digital lives and communities."
        }{" "}
        </p>
      </div>
    </section>
  );
};
