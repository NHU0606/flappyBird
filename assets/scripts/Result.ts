import { _decorator, Component, Node, Label,Button, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('result')
export class result extends Component {
    @property({type: Label})
    private scoreLabel: Label;
    
    @property({type: Label})
    private highScore: Label;

    @property({type: Label})
    private urScore: Label;

    @property({type: Sprite})
    private textGameOver: Sprite;

    @property({type: Sprite})
    private boardScore: Sprite;

    @property({type: Button})
    private btnPlayAgain: Button;

    private currentscore: number = 0;
    
    updateScore(num:number){
        this.currentscore = num;
        this.scoreLabel.string = ('' + this.currentscore);
        let maxScore = parseInt(localStorage.getItem('highscore'))

        if(maxScore < num) {
            localStorage.setItem('highscore', num.toString())
        }
    }

    resetScore(){
        this.updateScore(0);
        this.hiddenResults()
    }

    startGame(){
        this.updateScore(0);
        this.hiddenResults()
    }

    addScore(){
        this.updateScore(this.currentscore + 1) 
    }
    
    showResults(){
        let maxScore = parseInt(localStorage.getItem('highscore'))
        this.highScore.string = 'High score: ' + maxScore
        this.urScore.string = 'Your score: ' + this.currentscore

        this.node.active = true;       
        // this.scoreLabel.node.active = false;
    }

    hiddenResults(){
        this.node.active = false;
    }
}