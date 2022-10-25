import React, { useState, useEffect } from "react";
import RequestLeagues from "./utils/RequestLeagues";
import getUniqueCountries from "./utils/GetUniqueCountries";

 



function DropdownFlags(props) {
  const { response } = props;
  const { events } = response;
  console.log(events)

  const { leagues, setLeagues } = useState;

  <RequestLeagues leagues={leagues} setLeagues={setLeagues} />


  useEffect(() => {
      <RequestLeagues leagues={leagues} setLeagues={setLeagues}/>
  }, []);

  const getUniqueCountries = () => {
    const countries = events.map(
      ({
        tournament: {
          category: { name: countryName },
        },
      }) => countryName
    );
    return [...new Set(countries)];
  };

  
  const getUniqueFlags = () => {
    const flags = events.map((element) => {
      const { tournament } = element;
      const { category } = tournament;
      const { alpha2 } = category;
      return alpha2;
    });
    return [...new Set(flags)];
  };

  const flagsTest = getUniqueFlags();
  console.log(flagsTest)


  const sortedArr = getUniqueCountries().sort();
  const sortedArr = getOptions().sort();


  return (
    <div className="ui fluid container test">
      <select onChange={(e) => props.sortingAlg(e.target.value)}>
        <option value="All Leagues">All Leagues</option>
        {sortedArr.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownFlags;
