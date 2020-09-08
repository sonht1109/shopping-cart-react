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

export const deleteItem = (product)=>{
    return{
        type: actionTypes.ACT_REMOVE_FROM_CART,
        product
    }
}

export const updateQuantity = (product, value)=>{
    return{
        type: actionTypes.ACT_UPDATE_QUANTITY,
        product,
        value
    }
}

export const purchase = ()=>{
    return{
        type: actionTypes.ACT_PURCHASE
    }
}