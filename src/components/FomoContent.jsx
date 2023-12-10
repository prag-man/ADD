import Image from "next/image";

export const FomoContent = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8 items-center">
      <Image
        src="/images/fomo-1.png"
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
          "In Acharya Tulsi's perspective, the Anuvrat Movement is a project dedicated to the spiritual and moral renewal of life. Its aim extends beyond the societal and political welfare of individuals, focusing on their spiritual and moral betterment. Spiritual well-being is regarded as the highest and comprehensive good, encompassing both personal and communal welfare"          }{" "}
        </p>
      </div>
    </section>
  );
};
