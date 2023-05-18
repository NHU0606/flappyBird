import { Result } from './Result';
import { bird } from './bird';
import { pipePool } from './pipePool';
import { audioCtrl } from './audio/audioCtrl';
import { _decorator, Contact2DType, Collider2D, IPhysics2DContact, Component, Node, CCInteger, director, find, Sprite} from 'cc';
import { changeColor } from './menu/changeColor';
const { ccclass, property } = _decorator;

@ccclass('gameCtrl')
export class gameCtrl extends Component {      
    @property({type: Result})
    public result: Result;

    @property({type: bird})
    public bird: bird;

    @property({type: audioCtrl})
    public audio: audioCtrl;

    @property({type: pipePool})
    public pipe: pipePool;

    @property({type: CCInteger})

    public pipeSpeed:number = 200;
    private isOver:boolean = false;

    @property(Sprite)
    public sprite: Sprite = null;

    protected onLoad(): void {
        let getColor = find('ChangeNode')
        let getColorPara = getColor.getComponent(changeColor)
        this.sprite.color = getColorPara.temp;

        this.result.resetScore();
        let collider = this.bird.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        if(director.getScene().name === "play"){
            this.pipe.node.active = true;
            this.result.resetScore();
            this.startGame();
            this.isOver = false;  
        }
    }

    onBeginContact(
        selfCollider: Collider2D,
        otherCollider: Collider2D,
        contact: IPhysics2DContact | null
    ) {
        this.bird.hitPipe = true;
        this.birdHit()
    }

    resetGame(){
        this.pipe.node.active = true;
        this.result.resetScore();
        this.startGame();
        this.isOver = false;
    }

    gameOver(){
        this.result.showResults();
        this.isOver = true;
        director.pause();
    }  
   
    startGame() {
        this.pipe.node.active = true;
        this.result.hiddenResults();
        director.resume();
        this.isOver = false;
    }
    
    birdHit() {
        if (this.bird.hitPipe == true) {
            this.pipe.node.active = false;
            this.gameOver();
        }
    }

    protected update(dt: number): void {
        if (this.isOver == false) {
            this.birdHit()
        }
    }
}