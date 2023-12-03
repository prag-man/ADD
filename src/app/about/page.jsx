import React from "react";
import { FiDownload } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="py-10 md:px-24 px-5">
      <div className="container mx-auto px-4">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-6 md:mb-8 w-fit mx-auto border-b-2 border-[#664228]">About Us</h1>
        <div className="md:text-lg mb-6 md:mb-8 md:text-left text-center">
          <p>
            Digital technology has brought about significant changes in our
            lives, both positive and negative. At Anuvrat Vishva Bharati
            Society, our mission is to create a community of like-minded
            individuals who support and encourage each other in their digital
            detox journey. We aim to help individuals strike a balance between
            their use of technology and their daily lives, promoting mindfulness
            and self-care in an increasingly digital world.
          </p>
          <p className="mt-4">
            Our vision is to assist individuals worldwide in achieving a healthy
            balance between their use of technology and their daily lives. We
            want to promote a culture of mindfulness and self-care in an
            increasingly digital world, enabling individuals to lead a healthy
            lifestyle while being mindful of digital use and helping them
            connect with their inner selves.
          </p>
        </div>
        <div className="md:text-lg mb-8 md:text-left text-center">
          <p>
            Excessive use of digital devices can lead to various problems, such
            as communication gaps, loss of focus, cognitive decline, and mental
            health issues. We aim to address these challenges and provide
            solutions for a healthier digital lifestyle.
          </p>
          <p className="mt-4 md:text-lg">
            Join us in the ADD (Anuvrat Digital Detox) revolution and take the
            pledge to break free from the digital cage. Our workshops and
            programs will help you understand the ills of the digital age,
            experience the real benefits of meditation, and take small vows for
            a healthier life.
          </p>
        </div>
        <div className="md:text-lg mb-8">
          <p className="font-semibold">For more information and to get involved, please contact us at:</p>
          <address className="md:mt-4 mt-2">
            Anuvrat Vishwa Bharati Society
            <br />
            Head Office: Children’s Peace Palace
            <br />
            Post Box No.28, Rajsamand - 313324
            <br />
            Rajasthan - India
            <br />
            Email: head.office@anuvibha.org
          </address>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/Digital_Detox_Brochure.pdf" 
            className="bg-[#664228] text-white font-bold md:py-3 md:px-6 py-2 px-4 rounded-full flex gap-2 items-center space-x-2 focus:outline-none focus:shadow-outline"
            download
          >
            <FiDownload />
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
