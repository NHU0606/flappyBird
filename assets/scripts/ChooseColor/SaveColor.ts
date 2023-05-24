import { _decorator, Color, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SaveColor')
export class SaveColor extends Component {
    public temp : Color | null ;
}
