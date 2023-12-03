import Image from "next/image";
export const AssesProgress = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8">
      <Image
        src="/images/asses.jpeg"
        width={400}
        height={300}
        alt="FOMO"
        className="hidden md:block m-4 rounded-md"
      />
      <p className="max-w-[65ch] ml-8 mt-4">
        {
          "At Anuvrat Digital Detox, assessing progress is integral to our journey towards mindful tech usage. We provide tools and guidance to track and measure your advancement in achieving tech wellness goals. Through regular evaluations and support, we help you stay on track, celebrate milestones, and adjust strategies as needed. Together, we ensure your progress aligns with your commitment to a balanced digital lifestyle"
        }{" "}
      </p>
    </section>
  );
};
