// place to can choose color of bitd when click on the bird
import { _decorator, Color, Component, Node, Sprite, color, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('getColorBirdPlay')
export class getColorBirdPlay extends Component {   

    @property(Sprite)
    public sprite: Sprite = null;

    public randomColor = null;


    protected onLoad(): void {        
        this.node.on(Node.EventType.TOUCH_START, this.chooseColor, this);
    }

    public chooseColor() {
        this.randomColor = color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        this.sprite.color = this.randomColor;
    }  
}
