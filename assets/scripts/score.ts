import { _decorator, Component, Node, LabelComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Score')
export class Score extends Component {
    public currentscore: number = 0;

    async updateScore(num:number){
        this.currentscore = num;
        this.node.getComponent(LabelComponent).string = String(this.currentscore);
        let maxScore = parseInt(localStorage.getItem('highscore'))

        if(maxScore < num) {
            let formData = new FormData();
            formData.append("ranking[level]", "0");
            formData.append("ranking[score]", num.toString());
            formData.append("ranking[timing]", "0");
            formData.append("ranking[user_id]", "1");
            formData.append("ranking[game_id]", "2");
            try {
                const res = await fetch(
                'http://localhost:3000/v1/ranking',
                    {
                        method: 'POST',
                        body: formData
                    }
                );

                const resData = await res.json();

                console.log(resData);
            } catch (err) {
                console.log(err.message);
            }
            localStorage.setItem('highscore', num.toString())
        }
    }

    addScore(){
        this.updateScore(this.currentscore + 1) 
    }
}
