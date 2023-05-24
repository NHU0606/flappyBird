import { SaveColor } from './SaveColor';
import { _decorator, Color, color, Component, director, find, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ChooseCtrl')
export class ChooseCtrl extends Component {
    @property ({type: Node})
    private bird: Node | null = null

    public temp : Color | null = null;
    private MyNode: string = 'MyNode';
    private randColor: Color = color('#FFFFFF') ;

    onClickChangeColor (randColor: Color) {
        let birdColor = this.bird.getComponent(Sprite)

        this.randColor = color(Math.floor(Math.random() * 255));
        birdColor.color = this.randColor
    }
    
    onChangeScene (){
        this.temp = this.randColor;
        localStorage.setItem('highscore', '0')
        
        if(!find(this.MyNode)){
            let params = new Node(this.MyNode)
            director.addPersistRootNode(params)
            let colorParam = params.addComponent(SaveColor)
            colorParam.temp = this.temp;
        }else{

            let colorParam = find(this.MyNode).getComponent(SaveColor);
            colorParam.temp = this.temp;
        }
        director.loadScene('Play')
    }
}

