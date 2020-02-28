import Phaser from "phaser";

class puzzle1 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle1" });
    };

    init(data) {
        this.currentTime = data.time;
        this.puzzle1Complete = data.puzzle1Win;
        this.puzzle2Complete = data.puzzle2Win;
        this.puzzle3Complete = data.puzzle3Win;
    }

    create() {
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.arrowRight = this.add.image(this.cameras.main.width - 50, this.cameras.main.height/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
        this.arrowLeft = this.add.image(50, this.cameras.main.height/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });
        this.thisBed = this.add.image(800,550,"thisBed").setScale(1.40);
        this.allMight = this.add.image(800,300, "allMight").setScale(.35);
        this.wallShelf = this.add.image(300,300,"wallShelf").setScale(0.55);
        this.add.text(this.background.displayWidth/2, 20, "Puzzle 1 goes here...");

        const spaceKey = this.input.keyboard.addKey('SPACE');

        spaceKey.on('down', function(event) {
            return(this.puzzle1Win = true);
        }, this);

        this.arrowRight.on("pointerdown", function() {
            this.scene.start("puzzle2", {
                time: this.currentTime,
                puzzle1Win: this.puzzle1Win,
                puzzle2Win: this.puzzle2Complete,
                puzzle3Win: this.puzzle3Complete
            });
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.start("room1", {
                time: this.currentTime,
                puzzle1Win: this.puzzle1Win,
                puzzle2Win: this.puzzle2Complete,
                puzzle3Win: this.puzzle3Complete
            });
        }, this);

        this.timeText = this.add.text(1100, 50, `${this.formatTime(this.currentTime)}`).setColor("#000").setScale(1.5);

        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
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

    updateTimer() {
        this.currentTime += 1;
        this.timeText.setText(`${this.formatTime(this.currentTime)}`);
        localStorage.setItem('currentTime', this.formatTime(this.currentTime));
    }
}

export default puzzle1;