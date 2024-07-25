import axios from "axios";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoGetApiOptions, GEO_API_URL } from "../../Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOption = (inputValue) => {
    return fetch(
      `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
      geoGetApiOptions
    )
      .then((res) => Response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (value) => {
    setSearch(value);
    onSearchChange(value);
  };
  return (
    <AsyncPaginate
      placeholder="Search for the city.."
      debounceTimeout={700}
      value={search}
      onChange={handleOnChange}
      loadOption={loadOption}
    />
  );
};

export default Search;
