import Phaser from "phaser";

const speed = 500;

class PingPong extends Phaser.Scene {
  constructor() {
    super({
      key: "puzzle1",
      physics: { arcade: {} }
    });
    this.score = {
      player: 0,
      ai: 0
    };
  }
  
  init(data) {
      this.currentTime = data.time;
      this.puzzle1Complete = data.puzzle1Win;
      this.puzzle2Complete = data.puzzle2Win;
      this.puzzle3Complete = data.puzzle3Win;
  }

  preload() {
    this.load.image("paddle", "/assets/images/paddle.png");
    this.load.image("ball", "/assets/images/ball.png");
    this.load.image("wall", "/assets/images/wall.png");
    console.log(this);
  }
  create() {
    console.log(this);
    // Two invisible walls for up and down
    this.walls = this.physics.add.group([], {
      immovable: true
    });
    this.walls.enableBody = true;
    let wall = this.walls.create(0, -40, "wall");
    wall.body = { immovable: true };
    wall = this.walls.create(0, 600, "wall");
    wall.body = { immovable: true };

    // Creating ball sprite
    const ball = this.physics.add.sprite(
      (this.physics.world.width - 40) / 2,
      (this.physics.world.height - 40) / 2,
      "ball"
    );

    // Enabling phyisics for the ball
    // this.physics.enable(ball);

    // Physics for the ball
    ball.body.bounce.x = 1;
    ball.body.bounce.y = 1;
    this.ball = ball;

    // Ball speed

    // Add bounds event listener and callback

    // ball.checkWorldBounds = true;
    // ball.events.onOutOfBounds.add(this.ballOut, this);
    ball.setCollideWorldBounds();

    // Creating player paddle
    // playerPaddle = paddles.create(
    //   10,
    //   (this.physics.world.height - 128) / 2,
    //   "paddle"
    // );

    const playerPaddle = this.physics.add.sprite(
      10,
      (this.physics.world.height - 128) / 2,
      "paddle"
    );
    playerPaddle.setImmovable(true);
    playerPaddle.setCollideWorldBounds(true);
    playerPaddle.setScale(0.5, 0.5);
    this.playerPaddle = playerPaddle;

    // Creating AI paddle
    const aiPaddle = this.physics.add.sprite(
      this.physics.world.width - 16 - 10,
      (this.physics.world.height - 128) / 2,
      "paddle"
    );
    aiPaddle.setImmovable(true);
    aiPaddle.setCollideWorldBounds(true);
    aiPaddle.setScale(0.5, 0.5);
    this.aiPaddle = aiPaddle;

    this.paddles = this.physics.add.group([aiPaddle, playerPaddle]);
    this.paddles.enableBody = true;

    // Making paddles immovable (no movement transfer)
    // paddles.setAll("body.immovable", true);

    // Collision between paddles and world bounds
    // paddles.setAll("body.collideWorldBounds", true);

    // Smaller paddles
    // paddles.setAll("scale.x", 0.5);
    // paddles.setAll("scale.y", 0.5);

    //  Our Controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.space = this.input.keyboard.addKey(32);

    // Help text
    this.helpText = this.add.text(16, 16, "Press Space Key to start !", {
      fontSize: "32px",
      fill: "#fff"
    });

    // Player Score
    this.playerScoreText = this.add.text(200, 125, this.score.player, {
      fontSize: "75px",
      fill: "#fff"
    });
    // AI score
    this.playerScoreText.setScale(0.5, 0.5);
    this.aiScoreText = this.add.text(600, 125, this.score.ai, {
      fontSize: "75px",
      fill: "#fff"
    });
    this.aiScoreText.setScale(0.5, 0.5);

    this.arrowRight = this.add.image(this.cameras.main.width - 50, this.cameras.main.height/2, "arrowRight").setScale(0.25).setInteractive({ useHandCursor: true });
    this.arrowLeft = this.add.image(50, this.cameras.main.height/2, "arrowLeft").setScale(0.25).setInteractive({ useHandCursor: true });
//         this.thisBed = this.add.image(800,550,"thisBed").setScale(1.40);
//         this.allMight = this.add.image(800,300, "allMight").setScale(.35);
//         this.wallShelf = this.add.image(300,300,"wallShelf").setScale(0.55);
//         this.add.text(this.background.displayWidth/2, 20, "Puzzle 1 goes here...");

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
  update() {
    if (this.gameOver) return;
    // Collision between ball and paddles
    this.physics.collide(this.paddles, this.ball);

    // Collision with walls so ball doesn't go into outer space
    this.physics.collide(this.walls, this.ball);

    // Reset velocity at each frame
    this.playerPaddle.body.velocity.y = 0;

    // Start Game pressing space
    if (
      this.space.isDown &&
      this.ball.body.velocity.x === 0 &&
      this.ball.body.velocity.y === 0
    ) {
      this.setVelocity(this.ball);
      this.helpText.destroy();
    }

    if (this.cursors.up.isDown) {
      //  Move to the top
      this.playerPaddle.body.velocity.y = -400;
    } else if (this.cursors.down.isDown) {
      //  Move to the bottom
      this.playerPaddle.body.velocity.y = 400;
    } else {
      //  Stand still
      // playerPaddle.animations.stop();
    }

    // simple AI for AI paddle
    this.aiPaddle.body.velocity.y = this.ball.body.velocity.y;
    this.aiPaddle.body.maxVelocity.y =
      Math.abs(this.ball.body.velocity.y) * 0.77;
  }
  updateScore() {
    //Point system increase
    if (this.ball.body.velocity.x > 0) {
      this.score.player += 1;
      console.log(this.score.player);
      this.playerScoreText.text = this.score.player;
      if (this.score.player >= 1) {
        this.endGame();
      }
    } else {
      this.score.ai += 2;

      this.aiScoreText.text = this.score.ai;
    }
  }

  setVelocity(ball) {
    // Random angle between -30 and 30 degrees
    var angle = Math.random() * (Math.PI / 2) - Math.PI / 4;

    // Generate speed  var speed = 300
    var xSpeed = -Math.cos(angle) * speed;
    var ySpeed = Math.sin(angle) * speed;
    ball.body.velocity.x = xSpeed;
    ball.body.velocity.y = ySpeed;
  }

  endGame() {
    this.gameOver = true;
    this.helpText = this.add.text(16, 16, "You win", {
      fontSize: "32px",
      fill: "#fff"
    });
    setTimeout(() => window.history.back(), 2000);
  }

  ballOut(ball) {
    this.updateScore();

    ball.reset(
      (this.physics.world.width - 40) / 2,
      (this.physics.world.height - 40) / 2
    );

    // Reset AI paddle
    this.aiPaddle.reset(
      this.physics.world.width - 32 - 20,
      (this.physics.world.height - 256) / 2
    );
    this.aiPaddle.body.velocity.x = 0;
    this.aiPaddle.body.velocity.y = 0;

    // Reset player paddle
    this.playerPaddle.reset(20, (this.world.height - 256) / 2);
    this.playerPaddle.body.velocity.x = 0;
    this.playerPaddle.body.velocity.y = 0;
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

export default PingPong;
