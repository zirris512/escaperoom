import React from "react";
import "pages/game.scss";
import Game from "../phaser/config";

function game() {
  return (
    <div className="gamescreen">
      <div id="game"></div>
    </div>
  );
}
export default game;
