import Phaser from "phaser";

class puzzle2 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle2" });
    };

    init(data) {
        this.currentTime = data.time;
        this.formatTime = data.formatTime;
        this.updateTimer = data.gameTimer;
    }

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.arrowRight = this.add.image(this.cameras.main.width - 50, this.cameras.main.height/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
        this.arrowLeft = this.add.image(50, this.cameras.main.height/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });

        this.add.text(this.background.displayWidth/2, 20, "Puzzle 2 goes here...");

        this.timeText = this.add.text(this.cameras.main.width/2, this.cameras.main.height/2, `${this.formatTime(this.currentTime)}`).setColor("#000");

        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        this.arrowRight.on("pointerdown", function() {
            this.scene.launch("puzzle3");
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.launch("puzzle1");
        }, this);

    }
}

export default puzzle2;