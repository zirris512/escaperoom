import React from "react";
import Phaser from "phaser";
import room1 from "./scenes/room1";
import PingPong from "./scenes/puzzle1";
import puzzle2 from "./scenes/puzzle2";
import puzzle3 from "./scenes/puzzle3";
import boot from "./scenes/boot";
import title from "./scenes/title";
import { IonPhaser } from "@ion-phaser/react";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [boot, title, room1, PingPong, puzzle2, puzzle3],
  parent: document.getElementById("game"),
  physics: {
    arcade: {
      gravity: {
        y: 200
      }
    }
  }
};

function Game() {
  return (
    <IonPhaser game={config} />
  )
}

export default Game;
