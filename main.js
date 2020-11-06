let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Main]
};

class Main extends Phaser.Scene {

    constructor ()
    {
        super('Main');
    }

    preload ()
    {
        this.load.image('bg', 'assets/images/sky.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.scene.bringToTop('Logo');
    }

}

let game = new Phaser.Game(config);