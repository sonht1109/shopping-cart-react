import * as actionTypes from '../constants/ActionTypes';

export const addToCart = (product, quantity)=>{
    return{
        type: actionTypes.ACT_ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMess = (mess)=>{
    return{
        type: actionTypes.CHANGE_MESS,
        mess
    }
}