import Phaser from "phaser";

class puzzle1 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle1" });
    };

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.arrowRight = this.add.image(this.cameras.main.width - 50, this.cameras.main.height/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
        this.arrowLeft = this.add.image(50, this.cameras.main.height/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });

        this.add.text(this.background.displayWidth/2, 20, "Puzzle 1 goes here...");

        this.arrowRight.on("pointerdown", function() {
            this.scene.launch("puzzle2", {
                time: this.initialTime,
                formatTime: this.formatTime,
                gameTimer: this.gameTimer
            });
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.launch("room1");
        }, this);

        this.initialTime = 0;

        this.timeText = this.add.text(this.cameras.main.width/2, this.cameras.main.height/2, `${this.formatTime(this.initialTime)}`).setColor("#000");

        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.gameTimer,
            callbackScope: this,
            loop: true
        });
    }

    formatTime(secs) {
        let minutes = Math.floor(secs/60);
        let seconds = secs%60;

        seconds = seconds.toString().padStart(2,'0');
        return `${minutes}:${seconds}`;
    }

    gameTimer() {
        this.initialTime += 1;
        this.timeText.setText(`${this.formatTime(this.initialTime)}`);
        localStorage.setItem('currentTime', this.formatTime(this.initialTime));
    }
}

export default puzzle1;