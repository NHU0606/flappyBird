import { _decorator, Component, Node, director, tween, v3} from 'cc';
import { changeColor } from './changeColor';
const { ccclass, property } = _decorator;

@ccclass('nextBtnController')
export class nextBtnController extends Component {
    @property(Node)
    mySprite: Node = null;

    @property(Node)
    Color: Node = null;

    @property({type: changeColor})
    private changecolor: changeColor;

    start() {
        tween(this.mySprite).repeatForever(
            tween()
                .to(1, { position: v3(402, -246, 0) })  
                .to(1, { position: v3(392, -246, 0) })  
        ).start(); 
    }
}
