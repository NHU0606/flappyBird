import { Result } from './Result';
import { bird } from './bird';
import { pipePool } from './pipePool';
import { _decorator, Contact2DType, Collider2D, IPhysics2DContact, Component, Node, CCInteger, director, Label, input, Input, EventKeyboard, KeyCode, Canvas, ConeCollider} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component { 
    @property({
        type: Result,
    })
    public result: Result;

    @property({
        type: bird,
    })
    public bird: bird;

    @property({
        type: pipePool,
    })
    public pipe: pipePool;

    @property({
        type: CCInteger
    })
    public pipeSpeed:number = 200;
    private colliderBird: Collider2D;
    private isOver:boolean = false;

    
    onLoad() {
        // this.initListener();
        this.result.resetScore();
        // this.isOver = true;
        // director.pause();
    }

    resetGame(){
        this.result.resetScore();
        this.startGame();
        console.log(1111)
        this.isOver = false;
    }

    gameOver(){
        this.result.showResults();
        this.isOver = true;
        director.pause();
    }  
   
    startGame() {
        this.result.hiddenResults();
        director.resume();
        this.isOver = false;
    }
    
    contactGroundPipe() {
        if (this.colliderBird) {
            this.colliderBird.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D){
        console.log(111)
        this.bird.hitPipe = true;
    }
    
    birdHit() {
        this.contactGroundPipe();
        if (this.bird.hitPipe == true) {
            this.gameOver();
        }
    }

    update(){
        console.log('hit ', this.bird.hitPipe);
        console.log('over ', this.isOver);
        if (this.isOver == false) {
            this.birdHit()
        }
    }
}
