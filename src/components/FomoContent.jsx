import Image from "next/image";
export const FomoContent = () => {
  return (
    <section className="flex mt-8 text-left mx-4 md:mx-8 items-center">
      <Image
        src="/images/fomo-1.png"
        width={400}
        height={300}
        alt="FOMO"
        className="hidden md:block m-4"
      />
      <p className="max-w-[65ch] ml-8 md:mt-4">
        {
          "In the view of Acharya Tulsi, the founder of Anuvrat Movement, this movement is a project for spiritual and moral rejuvenation of life. Its objective is much higher than man’s social and political good. It aims at his spiritual or moral good. The spiritual good is not only the highest good but the total good. It includes both one’s own good and the good of others."
        }
      </p>
    </section>
  );
};
