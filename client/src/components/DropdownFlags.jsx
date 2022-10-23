import React, { useState, useEffect } from "react";

function DropdownFlags(props) {
  const { response } = props;
  const { events } = response;

  const { leagues, setLeagues } = useState;

  function requestLeagues() {
    fetch(leagues, {}).then((responsik) => {
      responsik.json().then((data) => {
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

  const flagsTest = getOptionss();

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
