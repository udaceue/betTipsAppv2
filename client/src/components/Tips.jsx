import React, { useEffect, useState } from "react";

function Tips(props) {

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
