import { RequestController } from './RequestController';
import { _decorator, Component, EditBox, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Entry')
export class Entry extends Component {
    @property({ type: RequestController })
    private RequestController: RequestController;
    @property({ type: Node })
    private mainEntry: Node;

    @property({ type: Node })
    private nickName: Node;

    @property({ type: EditBox })
    private nickNameLabel: EditBox;

    private request;

    onLoad() {
      this.request = new RequestController();
    }

    start() {
        this.mainEntry.active = false;
        this.nickName.active = true;
    }

    private onClickBtnOk(): void {
        this.mainEntry.active = true;
        this.nickName.active = false;
    }

    private async onIputSubmitted(): Promise<void> {
        const nickname = this.nickNameLabel.string;
        let formData = new FormData();
        formData.append("username", nickname);

        const res = this.request.post('/auth', formData);
        res.then(re => console.log(re));
        // console.log(nickname);
        
    }
}

