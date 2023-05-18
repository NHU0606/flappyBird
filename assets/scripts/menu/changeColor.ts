// place to get color of the bird and convert to scene play after choose color
import { _decorator, Component, director, Node} from 'cc';
import { getColorBirdPlay } from './getColorBirdPlay';
const { ccclass, property } = _decorator;

@ccclass('changeColor')
export class changeColor extends Component {
    @property({type: getColorBirdPlay})
    public birdColor: getColorBirdPlay = null;

    public temp = null;

    onClick () {
        this.temp = this.birdColor.randomColor;
        director.addPersistRootNode(this.node);
        director.loadScene('play');  
        localStorage.setItem('highscore', '0')
    }
}
