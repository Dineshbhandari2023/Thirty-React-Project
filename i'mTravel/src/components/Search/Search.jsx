import axios from "axios";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoGetApiOptions, GEO_API_URL } from "../../Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoGetApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          option: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: city.name`${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
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
      loadOption={loadOptions}
    />
  );
};

export default Search;
