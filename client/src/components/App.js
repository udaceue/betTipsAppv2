import "../assets/App.css";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import Tipsters from "./Tipsters";
import items from "../data/data";
import HeaderWithMenu from "./HeaderWithMenu";
import Scores from "../data/Scores";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tipstersItems, setTipstersItems] = useState(items);
  const [scoress, setScoress] = useState(Scores);

  useEffect(() => {
    setScoress(Scores);
  }, []);

  // eslint-disable-next-line no-console
  console.log(scoress);
  return (
    <div className="ui fluid container">
      <HeaderWithMenu/>

      <Home />
      <Tipsters items={tipstersItems} />
    </div>
  );
}

export default App;
