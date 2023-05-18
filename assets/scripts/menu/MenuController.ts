import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('menuController')
export class menuController extends Component {
    onClick () {
        director.loadScene('changeColor');
    }    
}
