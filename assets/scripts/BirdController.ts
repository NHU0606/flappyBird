import { _decorator, Component, Node, input, Input, EventTouch, Vec3, Quat} from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('BirdController')
export class BirdController extends Component {
    @property({type: GameController})
    private gameCtrl: GameController;

    private birdPosition: Vec3
    public hitPipe:boolean = false; 
    private speed:number = 0.5;

    onLoad() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }
    
    onTouchStart (event: EventTouch) {
        this.speed = 3;
    }
            
    resetBird(){
        this.birdPosition = new Vec3(0,0,0)
        this.node.setPosition(this.birdPosition)
        this.hitPipe = false;
    }
    
    protected update(dt: number): void {
        this.speed -= 0.05;
        let positionY = this.node.position.y;
        positionY += this.speed;
        
        let angle = -(this.speed/2) * 10;
        if (angle >= 6) {
            angle = 6;
        }
        
        let quat = new Quat();
        Quat.fromEuler(quat, 0, 0, angle);
        this.node.setRotation(quat);
        
        this.node.position = new Vec3(this.node.position.x, positionY, 0)
        
        if(this.node.position.y > 317 || this.node.position.y < -260) {
            this.gameCtrl.gameOver();
        } 
    }
}
