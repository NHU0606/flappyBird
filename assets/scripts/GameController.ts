import { _decorator, Collider2D, IPhysics2DContact, Contact2DType, Component, Node, Prefab, Vec3, math, instantiate, Sprite, director, find } from 'cc';
import { ResultController } from './ResultController';
import { BirdController } from './BirdController';
import { Score } from './Score';
import { SaveColor } from './ChooseColor/SaveColor';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({type: Prefab})
    private prefabPipe = null;
    private listPipe: Node[] =[null, null, null]

    @property({ type: Sprite })
    private listGround: Sprite[] = [null, null];

    @property({type: ResultController})
    public result: ResultController;

    @property({type: Node})
    public birdNode: Node = null;

    private bird : BirdController;

    @property({type: Score})
    public score: Score;

    @property(Sprite)
    public sprite: Sprite = null;

    private speed: number = 250;
    private pos: Vec3 = new Vec3();

    protected onLoad(): void {
        this.bird = this.birdNode.getComponent(BirdController);

        let collider = this.bird.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        if(director.getScene().name == 'Play'){
            this.result.resetScore();
            this.startGame();
        }

        let parameters = find('MyNode');
        let birdParameters = parameters.getComponent(SaveColor);
        this.sprite.color = birdParameters.temp;
    }

    start(){
        for (let i = 0; i< this.listPipe.length; i++) {
            this.listPipe[i] = instantiate(this.prefabPipe)
            if(this.listPipe[i])  this.node.addChild(this.listPipe[i])
                        
            let x = 500* i;
            let y = math.randomRangeInt(250, 5)
            
            this.listPipe[i].setPosition(new Vec3(x, y, 0))
            this.node.setPosition(new Vec3(x, y, 0))
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


    moveGround() {
        for (let i = 0; i < this.listGround.length; i++) {
          const ground = this.listGround[i].node.getPosition();
          ground.x -= 7;
          if (ground.x <= -940) {
            ground.x = 940;
          }
          this.listGround[i].node.setPosition(ground);
        }
    }

    resetGame(){
        this.result.resetScore();
        this.startGame();
    }

    gameOver(){
        this.prefabPipe.active = false;
        this.result.showResults();
        director.pause();
    }  
   
    startGame() {
        this.result.hiddenResults();
        director.resume();
    }
    
    birdHit() {
        if (this.bird.hitPipe == true) {
            this.gameOver();
        }
    }

    update(dt: number){
        this.moveGround();

        for (let i = 0; i < this.listPipe.length; i++){
            this.pos = this.listPipe[i].getPosition()
            this.pos.x -= this.speed*dt;

            if(this.pos.x <= -2300){
                this.score.addScore()
                this.pos.x = -700
                this.pos.y = math.randomRangeInt(150, 25)
            }
            this.listPipe[i].setPosition(this.pos)
        }
    }
}
