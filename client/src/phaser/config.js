import Phaser from "phaser";
import room1 from "./scenes/room1";

const config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 700,
    scene: [room1],
    parent: "game"
};

const game = new Phaser.Game(config);

export default game;