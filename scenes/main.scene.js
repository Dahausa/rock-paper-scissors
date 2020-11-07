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
        let startButton = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo').setInteractive()
        startButton.once('pointerup', this.startGame, this);

        let style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        let text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'You know the rules!',style);



        text.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
    }

    startGame() {
        console.log("Call next scene")
    }
}