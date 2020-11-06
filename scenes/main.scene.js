class Main extends Phaser.Scene {

    constructor() {
        super({ key: 'Main', active: true });
        this.dynamic = null
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('logo', 'assets/images/logo.png');
    }

    create() {
        this.add.image(400, 300, 'background');
        let startButton = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY,'logo').setInteractive()

        startButton.once('pointerup', this.startGame, this);
    }

    startGame() {
        console.log("Call next scene")
    }
}