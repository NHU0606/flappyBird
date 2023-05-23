import { _decorator, Component, Node, Sprite, color, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GetColor')
export class GetColor extends Component {
    @property(Sprite)
    private colorBird: Sprite = null;

    public randomColor = null;

    protected onLoad(): void {        
        this.node.on(Node.EventType.TOUCH_START, this.chooseColor, this);
    }

    private chooseColor() {
        this.randomColor = color(Math.floor(Math.random() * 256));
        this.colorBird.color = this.randomColor;
        console.log(this.randomColor)
    }  
}