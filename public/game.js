var config = {
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 800,
        //mode: Phaser.Scale.FIT,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    }
};

class Game extends Phaser.Scene{
    preload(){
        this.canvas = this.sys.game.canvas;
    }

    create(){
        console.log(this.canvas.width)
        this.ball = this.add.circle(400, 400, 10, 0xffffff, 1)
        this.physics.add.existing(this.ball)
        this.ball.body.setBounce(1,1)
        this.ball.body.setCollideWorldBounds(true, 1, 1);
        this.ball.body.setVelocity(Phaser.Math.Between(550, 600),Phaser.Math.Between(250, 300))

        //this.block = this.add.rectangle(this.canvas.width/2, this.canvas.height/2, this.canvas.width, 200, 0xffffff, 1);

        this.paddleLeft = this.add.rectangle(50, this.canvas.height/2, 20, 100, 0xffffff, 1);
        this.paddleRight = this.add.rectangle(this.canvas.width - 50, this.canvas.height/2, 20,100, 0xffffff, 1);

        this.physics.add.existing(this.paddleLeft, true)
        this.physics.add.existing(this.paddleRight, true)
        

        this.physics.add.collider(this.paddleLeft, this.ball)
        this.physics.add.collider(this.paddleRight, this.ball)

        this.cursors = this.input.keyboard.createCursorKeys()

    }

    update(){
        const body = this.paddleLeft.body

        if(this.cursors.up.isDown && this.paddleLeft.y > 50){
            console.log("up is pressed")
            this.paddleLeft.y -= 10;
            body.updateFromGameObject();
        }else if(this.cursors.down.isDown && this.paddleLeft.y < this.canvas.height - 50){
            console.log("down is pressed")
            this.paddleLeft.y += 10;
            body.updateFromGameObject();
        }

        const diff = this.ball.y - this.paddleRight.y;
        //console.log(diff);
        if(this.paddleRight.y + diff > 50 && this.paddleRight.y + diff < this.canvas.height - 50){
        this.paddleRight.y = this.paddleRight.y + diff;
        this.paddleRight.body.updateFromGameObject();
        }
        /*
        if(diff < 0){
            //Ball is above the paddle
            this.paddleRight.y -=10;
            this.paddleRight.body.updateFromGameObject();
        }else if(diff > 0){
            // ball is below the paddle
            this.paddleRight.y += 10;
            this.paddleRight.body.updateFromGameObject();
        }*/
    }
    
}


var game = new Phaser.Game(config);

game.scene.add('game', Game)

game.scene.start('game')
