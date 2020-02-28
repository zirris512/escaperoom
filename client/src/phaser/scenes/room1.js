import Phaser from "phaser";

class room1 extends Phaser.Scene {
  constructor() {
    super({ key: "room1" });
  }

  init(data) {
    this.currentTime = data.time;
    console.log();
  }


  create() {
    //definine objects
    this.background = this.add.image(
      this.cameras.main.displayWidth / 2,
      this.cameras.main.displayHeight / 2,
      "room"
    );
    this.openDoor = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 + 40,
      "openDoor"
    );
    this.openDoor.visible = false;
    this.door = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2 + 40,
      "door"
    );
    this.arrowRight = this.add
      .image(
        this.cameras.main.width - 50,
        this.cameras.main.height / 2,
        "arrowRight"
      )
      .setScale(0.25)
      .setInteractive({ useHandCursor: true });
    this.arrowLeft = this.add
      .image(50, this.cameras.main.height / 2, "arrowLeft")
      .setScale(0.25)
      .setInteractive({ useHandCursor: true });

    this.door.setInteractive();
    this.openDoor.setInteractive();
    this.door.on(
      "pointerdown",
      function() {
        if (this.door.visible) {
          return (this.door.visible = false)((this.openDoor.visible = true));
        }
      },
      this
    );
        this.wallShelf = this.add.image(1000,300,"wallShelf").setScale(0.55);
        this.bookShelf = this.add.image(550,450, "bookShelf").setScale(1.50);
        this.anime = this.add.image(550,200, "anime").setScale(.70);


    this.openDoor.on(
      "pointerdown",
      function() {
        if (this.openDoor.visible) {
          return (this.openDoor.visible = false)((this.door.visible = true));
        }
      },
      this
    );

    this.arrowRight.on(
      "pointerdown",
      function() {
        this.scene.start("puzzle1", {
          time: this.currentTime
        });
      },
      this
    );

    this.arrowLeft.on(
      "pointerdown",
      function() {
        this.scene.start("puzzle3", {
          time: this.currentTime
        });
      },
      this
    );

    this.timeText = this.add
      .text(1100, 50, `${this.formatTime(this.currentTime)}`)
      .setColor("#000")
      .setScale(1.5);

    this.gameTimer = this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });
  }

  formatTime(secs) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;

    seconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  updateTimer() {
    this.currentTime += 1;
    this.timeText.setText(`${this.formatTime(this.currentTime)}`);
    localStorage.setItem("currentTime", this.formatTime(this.currentTime));
  }
}

export default room1;
