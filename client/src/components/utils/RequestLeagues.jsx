import React from "react";

function RequestLeagues({ leagues, setLeagues }) {
  fetch(leagues, {}).then((responsik) => {
    responsik.json().then((data) => {
      setLeagues(data);
    });
  });
}

export default RequestLeagues;
