import { _decorator, Component, Node, LabelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Score')
export class Score extends Component {
    public currentscore: number = 0;

    updateScore(num:number){
        this.currentscore = num;
        this.node.getComponent(LabelComponent).string = String(this.currentscore);
        let maxScore = parseInt(localStorage.getItem('highscore'))

        if(maxScore < num) {
            localStorage.setItem('highscore', num.toString())
        }
    }

    addScore(){
        this.updateScore(this.currentscore + 1) 
    }
}
