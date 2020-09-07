import * as mess from '../constants/Messages';
import * as actionTypes from '../constants/ActionTypes';

var initState = mess.MSG_WELCOME;

var reducer = (state = initState, action)=>{
    switch(action.type){
        case actionTypes.CHANGE_MESS:
            state = action.mess;
            return state;
        default:
            return state;
    }
}

export default reducer;