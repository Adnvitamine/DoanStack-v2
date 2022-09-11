// All our variables will be define here
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);
var platforms;
var player;
var i;
var speed;
var dialog = "";
var messageDialog;
var message = "";
var animFirst = true;
var animSecond = false;
var animThird = false;
var animFour = false;

function typeWriter() {
  //console.log(message)
  if (i < message.length) {
    dialog += message.charAt(i);
    //console.log(dialog);
    i++;

    messageDialog.setText(dialog);
    setTimeout(typeWriter, speed);
  }
  //console.log(dialog);
}
// Our functions related to the scene: preload(), create(), update()
function preload() {
  this.load.image("background", "assets/bg.png");
  //this.load.image('ground', 'assets/ground.png');
  this.load.spritesheet("hero-idle", "assets/hero-idle.png", {
    frameWidth: 30,
    frameHeight: 92,
  });
  this.load.spritesheet("hero-surprise", "assets/hero-surprise.png", {
    frameWidth: 30,
    frameHeight: 92,
  });

  this.load.spritesheet("hero-walk-right", "assets/hero-walk-right.png", {
    frameWidth: 30,
    frameHeight: 92,
  });

  this.load.spritesheet("hero-walk-left", "assets/hero-walk-left.png", {
    frameWidth: 30,
    frameHeight: 92,
  });
}

function create() {
  this.add.image(400, 300, "background");

  /*platforms = this.physics.add.staticGroup();
    
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');*/

  player = this.physics.add.sprite(100, 450, "hero-idle");
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.anims.create({
    key: "idle",
    frames: this.anims.generateFrameNumbers("hero-idle", {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "surprise",
    frames: this.anims.generateFrameNumbers("hero-surprise", {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    }),
    frameRate: 10,
  });
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("hero-walk-right", {
      frames: [0, 1, 2, 3],
    }),
    frameRate: 3,
    repeat: -1,
  });

  player.play("right");
  player.setScale(2);

  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  const herobody = player.body;

  if (animFirst) {
    if (herobody.x <= 500) {
      herobody.x += 2;
      //console.log(herobody.x);
    }

    if (herobody.x > 500) {
      animFirst = false;
      animSecond = true;
    }
  }
  ////
  if (animSecond) {
    //console.log(animSecond);
    if (player.anims.getName() === "right") {
      player.play("surprise");
      messageDialog = this.add.text(100, 200, "", {
        fontSize: "32px",
        fill: "#000",
        fontFamily: "Custom",
      });
      message = "!!!";
      speed = 100;
      i = 0;
      typeWriter();
      setTimeout(() => {
        animSecond = false;
        animThird = true;
        dialog = "";
        //messageDialog.setText('');
      }, 1500);
    }
  }
  ///
  if (animThird) {
    //console.log(player.anims.getName());
    if (player.anims.getName() === "surprise") {
      //console.log(player.anims.getName());
      player.play("idle");
      message =
        "HOOO...Hello and WELCOME!!\rHow are you?\rMy Name is Doan Nguyen\rit's so Niice to meet you!\rAs you can see, I am a...";
      speed = 30;
      i = 0;
      typeWriter();
      setTimeout(() => {
        speed = 10;
        message = "\r \rWEB DEVELOPER!!!";
        i = 0;
        typeWriter();
      }, 4000);
      setTimeout(() => {
        dialog = "";
        message = "";
        i = 0;
        animThird = false;
        animFour = true;
      }, 5000);
    }
  }
  ///
  if (animFour) {
    if (player.anims.getName() === "idle") {
      speed = 100;
      message =
        "By the way, this page is build\rwith Nextjs for the frontend.\rThe animation is made with\rPhaser.js";
      typeWriter();
    }
  }

  //console.log(`${animFirst}, ${animSecond}, ${animThird}, ${animFour}`)

  /*

    if(animFour){
        if (player.anims.getName() === 'idle'){
            messageDialog = this.add.text(100, 200, '', { fontSize: '32px', fill: '#000', fontFamily: 'Custom'});
            message = "By the way, this website is build";
            speed = 100;
            i = 0;
            typeWriter();
        }
    }*/
}
