import { _decorator, Component, Node, Label,Button, Sprite } from 'cc';
import { score } from './score';
const { ccclass, property } = _decorator;

@ccclass('result')
export class result extends Component {    
    @property({type: score})
    private score: score;

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

    resetScore(){
        this.score.updateScore(0);
        this.hiddenResults()
    }

    startGame(){
        this.score.updateScore(0);
        this.hiddenResults()
    }

    showResults(){
        let maxScore = parseInt(localStorage.getItem('highscore'))
        this.highScore.string = 'High score: ' + maxScore
        this.urScore.string = 'Your score: ' + this.score.currentscore

        this.node.active = true;       
        this.score.node.active = false;
    }

    hiddenResults(){
        this.node.active = false;
    }
}