import { _decorator, Component, Sprite, Button, Node, Input, input, AudioSource, EventTouch, director } from 'cc';
import { bird } from '../bird';
const { ccclass, property } = _decorator;

@ccclass('audioBtn')
export class audioBtn extends Component {
    @property(AudioSource)
    public audio: AudioSource = null!;
    private isMuted: boolean = false;

    @property({ type: bird })
    public bird: bird; 

    @property({type: Sprite})
    iconToShow: Sprite = null;    

    @property({type: Sprite})
    iconToHide: Sprite = null;

    @property({ type: Button })
    private btnPlayAgain: Button; 

    private isIconShown: boolean = false;

    protected onLoad(): void {
        this.node.on('click', this.onClick, this);
        this.iconToShow.node.active = false;
        this.iconToHide.node.active = true;
    }

    onClick () {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.audio.volume = 0;
        } else {
            this.audio.volume = 1;
        }               
    }  

    onToggleButtonClicked() {
        this.isIconShown = !this.isIconShown;
        this.updateIconsVisibility();
    }

    updateIconsVisibility() {
        this.iconToShow.node.active = this.isIconShown;
        this.iconToHide.node.active = !this.isIconShown;
    }

    onClickBtnAgain () {
        director.loadScene("play")
    }  
}
