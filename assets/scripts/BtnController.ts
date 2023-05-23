import { _decorator, Component, director, Node, AudioSource, Sprite} from 'cc';
import { BirdController } from './BirdController';
const { ccclass, property } = _decorator;

@ccclass('BtnController')
export class BtnController extends Component {
    private isIconShown: boolean = false;
       
    @property(AudioSource)
    public audio: AudioSource = null!;
    private isMuted: boolean = false;

    @property({ type: BirdController })
    private bird: BirdController; 

    @property({type: Sprite})
    private iconToShow: Sprite = null;    

    @property({type: Sprite})
    private iconToHide: Sprite = null;

    protected onLoad(): void {
        this.iconToShow.node.active = false;
        this.iconToHide.node.active = true;
    }

    onClickIcon () {
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
    
    onClickStartBtn() {
        director.loadScene('Choose')
    }

    onClickNextBtn() {
        director.loadScene('Play')
    }

    onClickAgainBtn() {
        director.loadScene('Play')
    } 
}
