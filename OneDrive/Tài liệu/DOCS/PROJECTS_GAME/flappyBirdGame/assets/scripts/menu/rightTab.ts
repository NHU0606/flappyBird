import { _decorator, Component, Node, tween, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('rightTab')
export class rightTab extends Component {
    @property(Node)
    rigthTab: Node = null;

    start() {
        tween(this.rigthTab).repeatForever(
            tween()
                .to(1, { position: v3(180, 73, 0) })  
                .to(1, { position: v3(170, 73, 0) })  
        ).start(); 
    }   
}
