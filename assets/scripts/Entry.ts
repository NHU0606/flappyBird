import { _decorator, Component, EditBox, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Entry')
export class Entry extends Component {
    @property({ type: Node })
    private mainEntry: Node;

    @property({ type: Node })
    private nickName: Node;

    @property({ type: EditBox })
    private nickNameLabel: EditBox;

    start() {
        this.mainEntry.active = false;
        this.nickName.active = true;
    }

    private onClickBtnOk(): void {
        this.mainEntry.active = true;
        this.nickName.active = false;
    }

    private onIputSubmitted(): void {
        const nickname = this.nickNameLabel.string;

        console.log(nickname);
        
    }
}

