import { _decorator, Component, Node, KeyCode, EventKeyboard, Label, director, Input, input } from 'cc';
const { ccclass, property } = _decorator;
import { GameCtrl } from './Gamectrl';

@ccclass('Result')
export class Result extends Component {
    @property({
        type: Label
    })
    public scoreLabel: Label;
    
    @property({
        type: Label
    })
    public highScore: Label;

    @property({
        type: Label        
    })
    public rerultEnd: Label;

    maxScore: number = 0;
    currentscore: number = 0;

    updateScore(num:number){
        this.currentscore = num;
        this.scoreLabel.string = ('' + this.currentscore);
    }

    resetScore(){
        this.updateScore(0);
        this.hiddenResults()
    }

    startGame(){
        this.updateScore(0);
        this.hiddenResults()
    }

    
    // addScore(){
    //     this.updateScore(this.currentscore + 1) 
    //     console.log(this.currentscore)      
    // }

    addScore(){
        this.updateScore(this.currentscore + 1) 
        console.log(this.currentscore)      
    }

    showResults(){
        this.maxScore = Math.max(this.maxScore, this.currentscore)
        this.highScore.string = 'High score' + this.maxScore
        this.rerultEnd.node.active = true;
        this.highScore.node.active = true;
    }

    hiddenResults(){
        this.highScore.node.active = false;
        this.rerultEnd.node.active = false;
    }
    
}
