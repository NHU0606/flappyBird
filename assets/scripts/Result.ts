import { _decorator, Component, Node, Label,Button, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Result')
export class Result extends Component {
    @property({type: Label})
    public scoreLabel: Label;
    
    @property({type: Label})
    public highScore: Label;

    @property({type: Label})
    public urScore: Label;

    @property({type: Sprite})
    public textGameOver: Sprite;

    @property({type: Sprite})
    public boardScore: Sprite;

    @property({type: Button})
    public btnPlayAgain: Button;

    currentscore: number = 0;
    
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

        this.textGameOver.node.active = true;
        this.highScore.node.active = true;
        this.btnPlayAgain.node.active = true;
        this.boardScore.node.active = true;
        this.urScore.node.active = true;
        this.scoreLabel.node.active = false;
    }

    hiddenResults(){
        this.highScore.node.active = false;
        this.textGameOver.node.active = false;
        this.btnPlayAgain.node.active = false;
        this.urScore.node.active = false;
        this.boardScore.node.active = false;
    }
}