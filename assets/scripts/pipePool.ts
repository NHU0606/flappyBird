import { Result } from './Result';
import { _decorator, Component, Node, Prefab, find, NodePool, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

@ccclass('pipePool')
export class pipePool extends Component {
    @property({
        type: Prefab,
    })
    public prefabPipe = null;

    @property({
        type: Result,
    })
    public result: Result;

    isPass:boolean;
    private listPipe: Node[] =[null, null, null]
    private speed: number = 230;
    private pos: Vec3 = new Vec3();
    public game;
   

    onLoad(){
        this.game = find("GameCtrl").getComponent("GameCtrl")
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
        for (let i = 0; i< this.listPipe.length; i++){
            this.pos = this.listPipe[i].getPosition()
            this.pos.x -= this.speed*dt;

            if(this.pos.x <= -2000){
                this.result.addScore()
                this.isPass = false;
                this.pos.x = 600
                this.pos.y = random(150, 25)
            }
            this.listPipe[i].setPosition(this.pos)
        }

//make it continue
        // if(this.isPass == false && this.listPipe <= -495){
        //     this.isPass = true;
        //     this.game.passPipe()
        // }  
    }
    


}
