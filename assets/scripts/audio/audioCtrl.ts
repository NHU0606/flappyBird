import { _decorator, Component, input, Input, EventTouch, director, Node, AudioSource, Button } from 'cc';
import { bird } from '../bird';
const { ccclass, property } = _decorator;

@ccclass('audioCtrl')
export class audioCtrl extends Component {
    @property(AudioSource)
    private audio: AudioSource = null;

    @property({type: bird})
    private bird: bird;

    @property({ type: Node })
    private on: Node;

    @property({ type: Node })
    private off: Node;    

    private isIconShown: boolean = false;

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
