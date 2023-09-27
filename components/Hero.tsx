"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find, Book or Rent a car -- quickly and easily
        </h1>
        <p className="hero_subtitle">
          Streamline Your car rental expirience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero_image-container">
        <div className="hero_image">
          <Image
            src="/hero.png"
            alt="hero"
            className="object-contain mt-52"
            width={500}
            height={500}
          />
        </div>
        <div className="hero_image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
