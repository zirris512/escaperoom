import Phaser from "phaser";

class puzzle2 extends Phaser.Scene {
    constructor() {
        super({ key: "puzzle2" });
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
        this.desk=this.add.image(800,500,"finalDesk"  ).setScale(0.45);
        



        this.add.text(this.background.displayWidth/2, 20, "Puzzle 2 goes here...");

        this.timeText = this.add.text(1100, 50, `${this.formatTime(this.currentTime)}`).setColor("#000").setScale(1.5);

        const spaceKey = this.input.keyboard.addKey('SPACE');

        spaceKey.on('down', function(event) {
            return(this.puzzle2Win = true);
        }, this);

        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        this.arrowRight.on("pointerdown", function() {
            this.scene.start("puzzle3", {
                time: this.currentTime,
                puzzle1Win: this.puzzle1Complete,
                puzzle2Win: this.puzzle2Win,
                puzzle3Win: this.puzzle3Complete
            });
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.start("puzzle1", {
                time: this.currentTime,
                puzzle1Win: this.puzzle1Complete,
                puzzle2Win: this.puzzle2Win,
                puzzle3Win: this.puzzle3Complete
            });
        }, this);

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

export default puzzle2;