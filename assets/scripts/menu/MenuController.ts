import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    onLoad () {
        this.node.on('click', this.onClick, this);
    }

    onClick () {
        director.loadScene('changeColor');
    }
    protected update(dt: number): void {
    }
}
