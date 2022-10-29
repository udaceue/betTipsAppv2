import React from "react";
import ListFieldsGenerator from "../components/utils/ListFieldsGenerator";

function AboutVipListLayout() {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted relaxed divided list">
        <ListFieldsGenerator
          heading="More Tips"
          description=" You'll get exclusive tips with more accurency"
        />
        <ListFieldsGenerator
          heading="Higher Odds"
          description=" Tips with courses over 2.5 with over 50% win rate"
        />
        <ListFieldsGenerator
          heading="More Tools"
          description=" Tools like Kelly Criterion Calculator or Poisson
                    Distribution Calculator and more will be available for you."
        />
        <ListFieldsGenerator
          heading="Private Vip Chat"
          description=" You will be added to our private group on Telegram. To
                    exchange insights and knowledge with other users of our
                    community."
        />
        <ListFieldsGenerator
          heading="More Disciplines"
          description=" Tips from other disciplines like tenis, hokey, martial arts and more..."
        />
        <ListFieldsGenerator
          heading="Full Bet History"
          description=" Do you wanna how much you won or lost with our bets? Would
                    you like to know your yield? Get Vip Today!"
        />
      </div>
    </div>
  );
}

export default AboutVipListLayout;
