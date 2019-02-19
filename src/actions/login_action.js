//import { CLICKED_LOGIN } from './constants';

export function userLoginHandler(){
    console.log("action hit!!");
    return {
        type : "CLICKED_LOGIN"
    }
}