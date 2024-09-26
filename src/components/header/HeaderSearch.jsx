"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

// import { Input } from "../ui/input";
import { Input } from "@/components/ui/input"

export default function HeaderSearch() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    console.log(searchTerm);
    // Perform search logic here
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="">
        <span className="relative">
        <IoMdSearch
            size={25}
            coloe="#C1C0C8"
            className="absolute left-2 bottom-2"
          />
        </span>
        <Input
          className="pl-8 w-[280px]"
          type="text"
          placeholder="Search Blog"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
