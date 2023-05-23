import { _decorator, Component, Node, director, find, color } from 'cc';
import { GetColor } from './GetColor';
import { SaveColor } from './SaveColor';
const { ccclass, property } = _decorator;

@ccclass('ChangeColor')
export class ChangeColor extends Component {
    @property({type: GetColor})
    public color: GetColor = null;
    
    public temp : Node | null = null;
    private MyNode: string = 'MyNode';

    onClick () {
        this.temp = this.color.randomColor;
        localStorage.setItem('highscore', '0')

        if(!find(this.MyNode)){
            let para = new Node(this.MyNode)
            director.addPersistRootNode(para)

            let colorParam = para.addComponent(SaveColor)
            colorParam.temp = this.temp;
        }else{
            let colorParam = find(this.MyNode).getComponent(SaveColor);
            colorParam.temp = this.temp;
        }
    }
}
