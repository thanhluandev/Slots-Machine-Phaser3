import Config from '../../Config/config';
import Options from '../../Constants/options';
import Style from '../../Css/style';
import Sprite from '../Sprite';
//Class Maxbet
export default class Maxbet {
    constructor(scene) {
        this.scene = scene;
        this.addMaxbet();
    }

    addMaxbet() {
        this.maxBet = new Sprite(this.scene, Config.width - 477, Config.height - 50, 'bgButtons', 'btn-maxbet.png');
        this.txtMaxBet = this.scene.add.dynamicBitmapText(Config.width - 550, Config.height - 70, 'txt_bitmap', Options.txtMaxBet, Style.fontSize);
        this.txtMaxBet.setDisplayCallback(this.scene.textCallback);
        this.txtCountMaxBet = this.scene.add.text(Config.width - 555, Config.height - 140, 'BET: ' + Options.coin * Options.line, Style.styleButton);
        //pointer down
        this.maxBet.on('pointerdown', this.onMaxbet, this);
        //pointer up
        this.maxBet.on('pointerup', () => this.maxBet.setScale(1));
    }

    /*end function add maxbet*/

    onMaxbet() {
        if (!Options.checkClick && Options.line * Options.coin
            < 1000 && Options.txtAutoSpin === 'AUTO') {
            this.maxBet.setScale(0.9);
            //play audio button
            this.scene.audioPlayButton();
            Options.line = 20;
            this.scene.btnLine.txtCountLine.setText(Options.line);
            Options.coin = 50;
            this.scene.coin.txtCountCoin.setText(Options.coin);
            this.txtCountMaxBet.setText('BET: ' + Options.line * Options.coin);
        }
    }

    /*end function on maxbet*/
}