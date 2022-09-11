/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function DropdownFlags(props) {
  const { response } = props;
  const { events } = response;

  // console.log(events);

  const { leagues, setLeagues } = useState;
  // eslint-disable-next-line no-unused-vars

  function requestLeagues() {
    fetch(leagues, {}).then((responsik) => {
      responsik.json().then((data) => {
        // console.log(data);
        setLeagues(data);
      });
    });
  }

  useEffect(() => {
    requestLeagues();
  }, []);

  const getOptions = () => {
    const countries = events.map(
      ({
        tournament: {
          category: { name: countryName },
        },
      }) => countryName
    );
    return [...new Set(countries)];
  };

  const getOptionss = () => {
    const flags = events.map((element) => {
      const { tournament } = element;
      const { category } = tournament;
      const { alpha2 } = category;
      return alpha2;
    });
    return [...new Set(flags)];
  };

  // eslint-disable-next-line no-unused-vars
  const flagsTest = getOptionss();

  // const sortedFlags = getOptionss().sort();
  const sortedArr = getOptions().sort();
  // console.log(sortedFlags);

  return (
    <div className="ui fluid container test">
      <select onChange={(e) => props.sortingAlg(e.target.value)}>
        <option value="All Leagues">All Leagues</option>
        {sortedArr.map((country) => (
          // eslint-disable-next-line no-undef
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownFlags;
