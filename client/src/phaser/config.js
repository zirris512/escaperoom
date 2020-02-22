import Phaser from "phaser";
import room1 from "./scenes/room1";
import puzzle1 from "./scenes/puzzle1";
import puzzle2 from "./scenes/puzzle2";
import puzzle3 from "./scenes/puzzle3";

const config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 700,
    scene: [room1, puzzle1, puzzle2, puzzle3],
    parent: "game"
};

const game = new Phaser.Game(config);

export default game;