import React from "react";
import { FiDownload } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 w-fit mx-auto border-b-2 border-blue-300">About Us</h1>
        <div className="text-lg mb-8">
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
        <div className="text-lg mb-8">
          <p>
            Excessive use of digital devices can lead to various problems, such
            as communication gaps, loss of focus, cognitive decline, and mental
            health issues. We aim to address these challenges and provide
            solutions for a healthier digital lifestyle.
          </p>
          <p className="mt-4">
            Join us in the ADD (Anuvrat Digital Detox) revolution and take the
            pledge to break free from the digital cage. Our workshops and
            programs will help you understand the ills of the digital age,
            experience the real benefits of meditation, and take small vows for
            a healthier life.
          </p>
        </div>
        <div className="text-lg mb-8">
          <p>For more information and to get involved, please contact us at:</p>
          <address className="mt-4">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 focus:outline-none focus:shadow-outline"
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
