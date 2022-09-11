/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

function Tips(props) {
  // eslint-disable-next-line no-unused-vars
  const { response, sorting } = props;
  const { events } = response;

  const [eventsSorted, setEventsSorted] = useState(events);

  useEffect(() => {
    setEventsSorted(
      sorting !== "All Leagues"
        ? events.filter(
            (element) => element.tournament.category.name === sorting
          )
        : events
    );
  }, [sorting]);

  // sorting == select option from
  // DropdownFlags component

  return (
    <>
      <button className="clearFilters" onClick={props.ClearFilters}>
        Clear Filters
      </button>

      <div className="ui fluid container">
        {eventsSorted.map((element) => {
          const { homeTeam, awayTeam, tournament, id } = element;
          const { name: homeTeamName } = homeTeam;
          const { name: awayTeamName } = awayTeam;
          const { category } = tournament;
          const { name: leagueName } = tournament;
          const { name: countryName } = category;
          return (
            <div key={id} className="ui six column centered grid">
              <div className="ui column country hide">{countryName}</div>
              <div className="ui column league hide">{leagueName}</div>
              <div className="ui column homeTeam">{homeTeamName}</div>
              <div className="ui column versus"> VS </div>
              <div className="ui column awayTeam">{awayTeamName}</div>
              <div className="ui column ourTip">Tip</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tips;
