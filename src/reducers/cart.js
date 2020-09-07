import * as actionTypes from '../constants/ActionTypes';
import { useDebugValue } from 'react';

var initState = []

var reducer = (state = initState, action)=>{
    var index = -1;
    switch(action.type){
        case actionTypes.ACT_ADD_TO_CART:
            var {product, quantity} = action;
            index = findIndexInCart(state, product);
            if(index === -1){
                state.push({
                    product,
                    quantity
                })
            }
            else{
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity + 1
                }
            }
            return [...state];

        case actionTypes.ACT_REMOVE_FROM_CART:
            var {product} = action;
            index = findIndexInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            return [...state];
        
        case actionTypes.ACT_UPDATE_QUANTITY:
            var {product, value} = action;
            index = findIndexInCart(state, product);
            if(index !== -1){
                if(state[index].quantity === 0 && value === "1" 
                || state[index].quantity > 0){
                    state[index] = {
                        ...state[index],
                        quantity: state[index].quantity += parseInt(value, 10)
                    }
                }
            }
            return [...state];

        default:
            return [...state];
    }
}

const findIndexInCart = (cart, item)=>{
    var index = -1;
    for(let i=0; i<cart.length; i++){
        if(cart[i].product.id === item.id){
            index = i;
        }
    }
    return index;
}


export default reducer;