import { RequestController } from './RequestController';
import { _decorator, Component, EditBox, Node, Label, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Entry')
export class Entry extends Component {
    @property({ type: RequestController })
    private requestController: RequestController;

    @property({ type: EditBox })
    private nickNameLabel: EditBox;

    @property({ type: Node })
    private warnNode: Node;

    protected onLoad(): void {
        let token = JSON.parse(localStorage.getItem('token')) || undefined;
        if (token) {
            director.loadScene('Choose');
            this.requestController.get('/ranking');
        }
    }
    private async onInputSubmitted(): Promise<void> {
        const nickname = this.nickNameLabel.string;
        let formData = new FormData();
        formData.append("username", nickname);

        let res = this.requestController.post_without_header(formData, '/check_user');
        res.then(r => {
            if (r['token'] != '') {
                localStorage.setItem('token', JSON.stringify(r['token']));
                director.loadScene('Choose');
            } else {
                this.warnNode.active = true;
                console.log("auth")
            }
        })

    }

    onClickPlayBtn() {
        this.onInputSubmitted();
    }

   
}

