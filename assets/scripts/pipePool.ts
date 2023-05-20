import { result } from './result';
import { score } from './score';
import { _decorator, Component, Node, Prefab, NodePool, instantiate, Vec3, math } from 'cc';
const { ccclass, property } = _decorator;
const random = (min, max) => {
    return math.randomRangeInt(min, max);
}

@ccclass('pipePool')
export class pipePool extends Component {
    @property({type: score})
    public score: score;

    @property({type: Prefab})
    private prefabPipe = null;

    @property({type: result})
    private result: result;

    private isPass:boolean;
    private listPipe: Node[] =[null, null, null]
    private speed: number = 250;
    private pos: Vec3 = new Vec3();
    private game;
   

    onLoad(){
        this.isPass = false;
    }

    start(){
        for (let i = 0; i< this.listPipe.length; i++) {
            this.listPipe[i] = instantiate(this.prefabPipe)
            if(this.listPipe[i])  this.node.addChild(this.listPipe[i])
                        
            let x = 500* i;
            let y = random(250, 5)
            
            this.listPipe[i].setPosition(new Vec3(x, y, 0))
            this.node.setPosition(new Vec3(x, y, 0))
        }
    }

    update(dt: number){
        for (let i = 0; i < this.listPipe.length; i++){
            this.pos = this.listPipe[i].getPosition()
            this.pos.x -= this.speed*dt;

            if(this.pos.x <= -2000){
                this.score.addScore()
                this.isPass = false;
                this.pos.x = -500
                this.pos.y = random(150, 25)
            }
            this.listPipe[i].setPosition(this.pos)
        }
    }
}
