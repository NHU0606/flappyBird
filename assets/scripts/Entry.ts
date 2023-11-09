import { RequestController } from './RequestController';
import { _decorator, Component, EditBox, Node, Label, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Entry')
export class Entry extends Component {
    @property({ type: RequestController })
    private requestController: RequestController;

    @property({ type: EditBox })
    private nickNameLabel: EditBox;
    private authData;
    public static currentUser;

    protected onLoad(): void {
        let res =  this.requestController.get('/check_user');
        res.then(r => {
           if (r['status'] == 200) {
            director.loadScene('Choose');
           } else {
            console.log("auth")
           }
        })
    }
    private async onInputSubmitted(): Promise<void> {
        const nickname = this.nickNameLabel.string;
        let formData = new FormData();
        formData.append("username", nickname);

        let res =  this.requestController.post(formData, '/auth');
        res.then(r => {
           if (r['status'] == 401) {
            console.log("auth")
           } else {
            director.loadScene('Choose');
            Entry.currentUser = r['id'];
           }
        })
        
    }

    onClickPlayBtn() {
        this.onInputSubmitted(); 
    } 
}

