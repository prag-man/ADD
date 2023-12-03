import Image from "next/image";
export const MakeCommitment = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8">
      <Image
        src="/images/commitment.webp"
        width={400}
        height={300}
        alt="FOMO"
        className="hidden md:block m-4 rounded-md"
      />
      <p className="max-w-[65ch] ml-8 mt-4">
        {
          "At Anuvrat Digital Detox, commitment is key to our mission. We encourage individuals to make a personal commitment to prioritize mindful tech use and well-being. Through our goal-oriented approach, we empower you to pledge and follow through on creating a balanced relationship with technology. Your commitment contributes to a more mindful, healthier digital landscape for yourself and the community."
        }{" "}
      </p>
    </section>
  );
};
