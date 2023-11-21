import { _decorator, Component, director, Node} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BtnController')
export class BtnController extends Component {
    onClickStartBtn() {
        director.loadScene('Choose')
    }

    onClickAgainBtn() {
        director.loadScene('play')
    } 
}
