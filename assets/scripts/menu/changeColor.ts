// place to get color of the bird and convert to scene play after choose color
import { _decorator, Component, director, Node} from 'cc';
import { colorBird } from './colorBird';
const { ccclass, property } = _decorator;

@ccclass('changeColor')
export class changeColor extends Component {
    @property({type: colorBird})
    public color: colorBird = null;

    public temp = null;

    onClick () {
        director.loadScene('play');  
        this.temp = this.color.randomColor;
        director.addPersistRootNode(this.node);
        localStorage.setItem('highscore', '0')
    }
}
