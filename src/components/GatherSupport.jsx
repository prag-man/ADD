import Image from "next/image";
export const GatherSupport = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8">
      <Image
        src="/images/support.webp"
        width={400}
        height={300}
        alt="FOMO"
        className="hidden md:block m-4 rounded-md"
      />
      <p className="max-w-[65ch] ml-8 mt-4">
        {
          "At Anuvrat Digital Detox, we believe in the power of collective support. Our mission to promote balanced tech usage and mental well-being relies on community backing. Join us in fostering a healthier relationship with technology through shared goals, advocacy, and collaborative efforts. Together, we can make a meaningful difference in our digital lives and communities."
        }{" "}
      </p>
    </section>
  );
};
