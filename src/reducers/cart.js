import * as actionTypes from '../constants/ActionTypes';

var initState = []

var reducer = (state = initState, action)=>{
    switch(action.type){
        
        case actionTypes.ACT_ADD_TO_CART:
            var {product, quantity} = action;
            let index = findIndexInCart(state, product);
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