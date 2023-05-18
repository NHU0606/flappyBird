import { _decorator, Component, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('leftTab')
export class leftTab extends Component {
    @property(Node)
    leftTab: Node = null;

    start() {
        tween(this.leftTab).repeatForever(
            tween()
                .to(1, { position: v3(-164, 73, 0) })  
                .to(1, { position: v3(-154, 73, 0) })  
        ).start(); 
    }    
}
