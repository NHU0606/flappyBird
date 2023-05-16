import { _decorator, Component, Node, Sprite, Color, Input, input, math, color} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('changeColor')
export class changeColor extends Component {
    @property(Sprite)
    private sprite: Sprite = null;

    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.changeColor, this);
    }

    private changeColor() {
        const randomColor = color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        this.sprite.color = randomColor;
    }
            
}
