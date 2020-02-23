import Phaser from "phaser";

class Title extends Phaser.Scene {
    constructor() {
        super({ key: "title" });
    };

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room").setAlpha(0.5);
        this.door = this.add.image(this.background.displayWidth/2, this.background.displayHeight/2 - 20, "door").setAlpha(0.75);

        this.title = this.add.text(this.background.displayWidth/2 - 290, this.background.displayHeight * 1/8, "Escape Room", { fontFamily: "Arial Black, Gadget, sans-serif"}).setFontSize(80);
        this.startbtn = this.add.text(this.cameras.main.width/2 - 40, 350, "Start", { fill: "#FFF"}).setFontSize(30).setInteractive({ useHandCursor: true })
        .on("pointerover", () => this.hoverOver())
        .on("pointerout", () => this.restState())
        .on("pointerup", () => this.btnClick());

        
    }

    hoverOver() {
        this.startbtn.setStyle({ fill: "#000" });
    };

    btnClick() {
        this.startbtn.setStyle({ fill: "#0F0"});
        this.scene.start("room1");
    };

    restState() {
        this.startbtn.setStyle({ fill: "#FFF" })
    }
}

export default Title;