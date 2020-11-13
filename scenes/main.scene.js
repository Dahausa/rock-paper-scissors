class Main extends Phaser.Scene {

    constructor() {
        super({ key: 'Main', active: true });
        this.dynamic = null
        this.width = null
        this.height = null
        this.centerX = null
        this.centerY = null
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('logo', 'assets/images/logo.png');
        this.load.audio('intro', ['assets/sounds/ost/rpc.ogg'])
    }

    create() {

        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.centerX = this.cameras.main.centerX
        this.centerY = this.cameras.main.centerY

        this.add.image(400, 300, 'background');
        let rectangle = this.add.rectangle(0, this.height * 2, this.width * 2, 240, 0x006D77);
        this.addFadeFromBottom(rectangle, this.centerY -10, 1500)

        let startButton = this.add.image(this.centerX, this.height * 2, 'logo').setInteractive()
        startButton.once('pointerup', this.startGame, this);
        this.addFadeFromBottom(startButton, this.centerY, 2000, () => {
            this.tweens.add({
                targets: startButton,
                duration: 2000,
                ease: 'Sine.easeInOut',
                repeat: -1,
                yoyo: true,
                alpha: 0.5,
                delay: 1000
            });
            let style = { font: "bold 20px Arial", fill: "#ccc", boundsAlignH: "center", boundsAlignV: "middle", };
            let text = this.add.text(this.centerX - 70, this.centerY - 35, 'Press to play!', style);
        });

        let style = { font: "bold 32px Arial", fill: "#ccc", boundsAlignH: "center", boundsAlignV: "middle", };
        let text = this.add.text(this.centerX - 150, this.height * 2, 'You know the rules!', style);
        this.addFadeFromBottom(text, this.centerY - 100, 2500, () => {
            this.tweens.add({
                targets: text,
                duration: 3000,
                ease: 'Sine.easeInOut',
                repeat: 0,
                yoyo: false,
                alpha: 0,
                delay: 1000
            }) 
        })

        text.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
    }

    startGame() {
        this.playloopAudio('intro')
        console.log("Call next scene")
    }

    /**
     * Add an animations that fades from the bottom to the y
     * @param {GameObject} object 
     * @param {Number} yCoord target y coordinate
     * @param {Number} duration in ms 
     * @param {function} callback 
     */
    addFadeFromBottom(object, yCoord, duration, callback) {
        this.tweens.add({
            targets: object,
            y: yCoord,
            duration: duration,
            ease: 'Sine.easeInOut',
            repeat: 0,
            yoyo: false,
            onComplete: callback
        });
    }

    /**
     * Plays audio in a loop
     * @param {string} key 
     */
    playloopAudio(key) {
        let config = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }
        let intro = this.sound.add(key);
        intro.play(config)
        return intro
    }
}