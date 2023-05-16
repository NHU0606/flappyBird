import { _decorator, Component, EventMouse, AudioSource, ColliderComponent, EventKeyboard, Quat, EventTouch, KeyCode, Node, Vec3, input, Input, Collider } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bird')
export class bird extends Component {
    @property(AudioSource)
    audioSource: AudioSource = null;        
    
    public birdPosition: Vec3
    public hitPipe:boolean = false; 
    private speed:number = 0.5;

    onLoad() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        // input.on(Input.EventType.KEY_DOWN, this.keyDown, this)
    }
    //under code cmt that's mean u can use space keyboard

    // keyDown(event: EventKeyboard){
    //     if(event.keyCode == 32) {
    //         let poY = this.node.position.y + 150;
    //         this.node.position = new Vec3(this.node.position.x, poY, 0)
    //     }
    // }   

    onTouchStart (event: EventTouch) {
        this.speed = 3;
    }
    
    resetBird(){
        this.birdPosition = new Vec3(0,0,0)
        this.node.setPosition(this.birdPosition)
        this.hitPipe = false;
    }
    
    update(deltaTime: number) {        
        this.speed -= 0.05;
        let positionY = this.node.position.y;
        positionY += this.speed;
        
        let angle = -(this.speed/2) * 10;
        if (angle >= 10) {
            angle = 10;
        }
        
        let quat = new Quat();
        Quat.fromEuler(quat, 0, 0, angle);
        this.node.setRotation(quat);

        this.node.position = new Vec3(this.node.position.x, positionY, 0)

    }
}
