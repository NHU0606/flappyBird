import { _decorator, Component, Node, AudioSource, Sprite } from 'cc';
import { BirdController } from './BirdController';
const { ccclass, property } = _decorator;

@ccclass('AudioController')
export class AudioController extends Component {
    @property(AudioSource)
    private audio: AudioSource = null;

    @property({type: BirdController})
    private bird: BirdController;

    @property({ type: Node })
    private on: Node;

    @property({ type: Node })
    private off: Node;    

    protected onLoad(): void {
        const audioSource = this.node.getComponent(AudioSource);
        this.audio = audioSource;       
        if (this.bird.hitPipe == true) {
            this.pauseAudio()
        } 
    }

    playAudio() {
        this.audio.volume = 1;
        this.off.active = false;
        this.on.active = true;
    }

    pauseAudio() {
        this.audio.volume = 0;
        this.off.active = true;
        this.on.active = false;
    }    
}
