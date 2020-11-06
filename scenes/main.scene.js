class Main extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Main', active: true });
    }

    preload ()
    {
        this.load.image('bg', 'assets/images/sky.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
    }
}