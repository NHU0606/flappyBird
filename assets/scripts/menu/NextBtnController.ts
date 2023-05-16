import { _decorator, Component, Node, director, tween, v3} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NextBtnController')
export class NextBtnController extends Component {
    @property(Node)
    mySprite: Node = null;

   

    start() {
        tween(this.mySprite).repeatForever(
            tween()
                .to(1, { position: v3(402, -246, 0) })  
                .to(1, { position: v3(392, -246, 0) })  
        ).start(); 
    }
    onLoad () {
        this.node.on('click', this.onClick, this);
    }

    onClick () {
        director.loadScene('play');   
    }
}
