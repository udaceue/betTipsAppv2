function TipsColumnsLayout(){
    return(
      <div className="ui fluid container">
      <div className="ui six column centered grid tipsColumn">
        <div className="ui column country stroke hide">Country</div>
        <div className="ui column league stroke hide">League</div>
        <div className="ui column homeTeam stroke">HomeTeam</div>
        <div className="ui column versus stroke"> Versus </div>
        <div className="ui column awayTeam stroke">AwayTeam</div>
        <div className="ui column ourTip stroke">Tip</div>
      </div>
    </div>
        )
        }
export default TipsColumnsLayout