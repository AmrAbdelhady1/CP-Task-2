import React, { useState } from "react";
import {
  SearchArrowSvg,
  SearchFileSvg,
  SearchSvg,
  WarningSvg,
} from "../../assets/svg/searchSvgs";
import "./style.css";

interface Props {
  label: string;
}

const CustomeConatiner = ({ label }: Props) => {
  return (
    <div className="search-filter-container border-t border-t-[#F2F2F2]">
      <div className="flex items-center gap-2">
        <SearchFileSvg />
        <h1 className="search-filter-text !font-normal">{label}</h1>
      </div>
      <SearchArrowSvg />
    </div>
  );
};

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const filteredContainers = [
    { label: "Personal Information" },
    { label: "Education" },
    { label: "Work Experience" },
    { label: "Activity Filter" },
    { label: "Advanced Filter" },
  ].filter((container) =>
    container.label.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div className="search-input-container w-[320px] md:w-[385px]">
        <div className="search-input">
          <SearchSvg />
          <input
            type="text"
            placeholder="Search by name, edu, exp, or #tag"
            className="focus:outline-none w-full"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <WarningSvg />
      </div>

      <div className="search-filter-layout">
        <div className="search-filter-container">
          <h1 className="search-filter-text">Filters</h1>
          <p className="search-filter-text !text-xs !font-light">
            {filteredContainers.length} Selected
          </p>
        </div>
        {filteredContainers.map((container, index) => (
          <CustomeConatiner key={index} label={container.label} />
        ))}
      </div>
    </div>
  );
};
