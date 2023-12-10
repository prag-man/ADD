import Image from "next/image";

export const CreateGoals = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8 items-center">
      <Image
        src="/images/goal.png"
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
          className="absolute left-1/3 -top-1/3  z-0"
        />
        <p className="relative z-10 max-w-[65ch] text-lg ml-8 md:mt-4">
          {
            "At Anuvrat Digital Detox, we're dedicated to fostering a balanced relationship with technology. Our goal creation process focuses on personalized, achievable milestones that promote mindful tech usage, mental wellness, and community engagement. Together, we aim to empower individuals for a healthier, happier digital life."
          }{" "}
        </p>
      </div>
    </section>
  );
};
