import Phaser from "phaser";

class room1 extends Phaser.Scene {
    constructor() {
        super({ key: "room1" });
    };

    init(data) {
        this.currentTime = data.time;
        this.puzzle1Complete = data.puzzle1Win;
        this.puzzle2Complete = data.puzzle2Win;
        this.puzzle3Complete = data.puzzle3Win;
    }

    create(){
        //definine objects
        this.background = this.add.image(this.cameras.main.displayWidth/2,this.cameras.main.displayHeight/2,"room");
        this.openDoor = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2 + 40, "openDoor").setInteractive();
        this.openDoor.visible = false;
        this.door = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2 + 40, "door").setInteractive();
        this.arrowRight = this.add.image(this.cameras.main.width - 50, this.cameras.main.height/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
        this.arrowLeft = this.add.image(50, this.cameras.main.height/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });
        this.wallShelf = this.add.image(1000,300,"wallShelf").setScale(0.55);        
        this.bookShelf = this.add.image(500,450, "bookShelf").setScale(1.50);        
        this.anime = this.add.image(550,200, "anime").setScale(.70);

        this.arrowRight.on("pointerdown", function() {
            this.scene.start("puzzle1", {
                time: this.currentTime,
                puzzle1Win: this.puzzle1Complete,
                puzzle2Win: this.puzzle2Complete,
                puzzle3Win: this.puzzle3Complete
            });
        }, this);
        
        this.arrowLeft.on("pointerdown", function() {
            this.scene.start("puzzle3", {
                time: this.currentTime,
                puzzle1Win: this.puzzle1Complete,
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

        this.openDoor.on('pointerdown', function() {
            if(this.openDoor.visible) {
                console.log("You win!");
            }
        }, this)
    }

    update() {
        if(this.puzzle1Complete && this.puzzle2Complete && this.puzzle3Complete) {
            return(this.openDoor.visible = true, this.door.visible = false);
        }
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

export default room1;