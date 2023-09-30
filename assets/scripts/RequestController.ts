import { _decorator, Collider2D, IPhysics2DContact, Contact2DType, Component, Node, Prefab, Vec3, math, instantiate, Sprite, director, find } from 'cc';
const { ccclass, property } = _decorator;

const ENDPOINT = 'http://localhost:3000/v1';
@ccclass('RequestController')
export class RequestController extends Component {

  contructor() {
  }

  async post(url: any, params?: any) {
    let resData;
    try {
      const res = await fetch( ENDPOINT + url,
        {
          method: 'POST',
          body: params
        }
      );
      resData = await res.json();
    } catch (err) {
      console.log(err.message);
    }
    return resData;
  }

  async get(url: any) {
    let resData;
    try {
      const res = await fetch( ENDPOINT + url,
          {
            method: 'GET',
          }
      );
      resData = await res.json();
    } catch (err) {
      console.log(err.message);
    }
    return resData;
  }

  async delete(url:any) {
    // method: DELETE
  }

  async update(url: any, params?: any) {
    // method: PUT
    // params 
  }

}
