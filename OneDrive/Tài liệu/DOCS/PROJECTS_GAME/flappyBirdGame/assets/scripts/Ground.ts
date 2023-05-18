import { _decorator, Component, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('Ground')
export class Ground extends Component {
    @property({type: Node})
    public ground1: Node;

    @property({type: Node})
    public ground2: Node;

    private groundWidth1: number;
    private groundWidth2: number;

    private tempStartPosition1 = new Vec3;
    private tempStartPosition2 = new Vec3;

    private speedGround: number = 10;

    startGround(){
        this.groundWidth1 = this.ground1.getComponent(UITransform).width;
        this.groundWidth2 = this.ground2.getComponent(UITransform).width;
    
        this.tempStartPosition1.x = 0;
        this.tempStartPosition2.x = this.groundWidth1;

        this.ground1.setPosition(this.tempStartPosition1)
        this.ground2.setPosition(this.tempStartPosition2)
    }

    update(deltaTime: number){
        this.tempStartPosition1 = this.ground1.position;
        this.tempStartPosition2 = this.ground2.position;

        this.tempStartPosition1.x -= this.speedGround
        this.tempStartPosition2.x -= this.speedGround

        if(this.tempStartPosition1.x <= -960){
            this.tempStartPosition1.x = 960;
        }

        if(this.tempStartPosition2.x <= -960){
            this.tempStartPosition2.x = 960;
        }
    
        this.ground1.setPosition(this.tempStartPosition1)
        this.ground2.setPosition(this.tempStartPosition2)
    }    
    
    
}
