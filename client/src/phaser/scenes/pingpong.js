// import Phaser, { GameObjects } from "phaser";
import Phaser from "phaser";
// import images from "../assets/images.js";

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

  preload() {
    // this.load.image("paddle", images.paddle);
    // this.load.image("ball", images.ball);
    // this.load.image("wall", images.wall);
    this.load.image("paddle", "assets/images/paddle.png");
    this.load.image("ball", "assets/images/ball.png");
    this.load.image("wall", "assets/images/wall.png");
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
  }
  update() {
    if (this.gameOver) return;
    // Collision between ball and paddles
    this.physics.collide(this.paddles, this.ball);

    // Collision with walls so ball doesn't go into outer space
    this.physics.collide(this.walls, this.ball);

    // Reset velocity at each frame
    console.log(this.playerPaddle);
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
}

export default PingPong;
