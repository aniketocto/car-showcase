"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifyingsvg"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState(" ");
  const [model, setmodel] = useState(" ");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar_item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="carrera"
          className="searchbar_input"
        />
        <SearchBar />
      </div>
    </form>
  );
};

export default SearchBar;
