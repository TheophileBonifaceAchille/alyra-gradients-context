import React, { useState, createContext } from "react";

export const FilterContext = createContext();

const FilterContexProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContexProvider;
