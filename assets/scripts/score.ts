import { _decorator, Component, Node, LabelComponent } from 'cc';
import { RequestController } from './RequestController';
const { ccclass, property } = _decorator;

@ccclass('Score')
export class Score extends Component {
    public currentscore: number = 0;

    @property({ type: RequestController })
    private requestController: RequestController;

    protected onLoad(): void {
        
    }

    async updateScore(num:number){
        this.currentscore = num;
        this.node.getComponent(LabelComponent).string = String(this.currentscore);
        let maxScore = parseInt(localStorage.getItem('highscore'))

        if(maxScore < num) {
            let formData = new FormData();
            formData.append("ranking[level]", "0");
            formData.append("ranking[score]", num.toString());
            // formData.append("ranking[timing]", "0");
            // formData.append("ranking[user_id]", "1");
            // formData.append("ranking[game_id]", "2");
            let res =  this.requestController.post(formData, '/ranking');

            console.log('res', res);
            
            
            localStorage.setItem('highscore', num.toString())
        }
    }

    addScore(){
        this.updateScore(this.currentscore + 1) 
    }
}
