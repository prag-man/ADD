import Image from "next/image";

export const MakeCommitment = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8 items-center">
      <Image
        src="/images/commitment.webp"
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
        <p className="relative z-10 max-w-[65ch] text-lg ml-8 md:mt-4">
          {
          "At Anuvrat Digital Detox, commitment is key to our mission. We encourage individuals to make a personal commitment to prioritize mindful tech use and well-being. Through our goal-oriented approach, we empower you to pledge and follow through on creating a balanced relationship with technology. Your commitment contributes to a more mindful, healthier digital landscape for yourself and the community."          }{" "}
        </p>
      </div>
    </section>
  );
};
