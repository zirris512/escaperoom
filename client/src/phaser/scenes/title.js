import Phaser from "phaser";

class Title extends Phaser.Scene {
    constructor() {
        super({ key: "title" });
    };

    init(data) {
        this.currentTime = data.time;
        this.puzzle1Complete = data.puzzle1Win;
        this.puzzle2Complete = data.puzzle2Win;
        this.puzzle3Complete = data.puzzle3Win;
    }

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room").setAlpha(0.5);
        this.door = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2 + 40, "door").setAlpha(0.75);

        this.title = this.add.text(this.cameras.main.width/2 - 290, this.cameras.main.height * 1/6, "Escape Room", { fontFamily: "Arial Black, Gadget, sans-serif"}).setFontSize(80);
        this.startbtn = this.add.text(this.cameras.main.width/2 - 40, 400, "Start", { fill: "#FFF"}).setFontSize(30).setInteractive({ useHandCursor: true })
        .on("pointerover", () => this.hoverOver())
        .on("pointerout", () => this.restState())
        .on("pointerup", () => this.btnClick());

        
    }

    hoverOver() {
        this.startbtn.setStyle({ fill: "#000" });
    };

    btnClick() {
        this.startbtn.setStyle({ fill: "#0F0"});
        this.scene.start("room1", {
            time: this.currentTime,
            puzzle1Win: this.puzzle1Complete,
            puzzle2Win: this.puzzle2Complete,
            puzzle3Win: this.puzzle3Complete
        });
    };

    restState() {
        this.startbtn.setStyle({ fill: "#FFF" })
    }
}

export default Title;