import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SaveColor')
export class SaveColor extends Component {
    public temp : Node | null = null;
}
