// import { _decorator, Component, Node, } from 'cc';
// const { ccclass, property } = _decorator;
// 
// @ccclass('AudioManager')
// export class AudioManager extends Component {
//     private static _instance: AudioManager = null;
// 
//     public static get instance(): AudioManager {
//         return AudioManager._instance;
//     }
// 
//     onLoad() {
//         if (AudioManager._instance != null) {
//             this.node.destroy();
//             return;
//         }
//         AudioManager._instance = this;
//         game.addPersistRootNode(this.node);
//     }
// }
