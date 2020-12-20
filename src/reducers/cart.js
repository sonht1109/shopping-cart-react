import * as actionTypes from '../constants/ActionTypes';

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
                if(state[index].quantity + 1 <= product.inventory){
                    state[index] = {
                        ...state[index],
                        quantity: state[index].quantity + 1
                    }
                }
                else{
                    alert("Ban da chon qua so luong !")
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
                if((state[index].quantity === 1 && value === "1" )
                || state[index].quantity > 1){
                    if(state[index].quantity + parseInt(value, 10) <= product.inventory){
                        state[index] = {
                            ...state[index],
                            quantity: state[index].quantity += parseInt(value, 10)
                        }
                    }
                    else{
                        alert("Ban da chon vuot qua so luong !")
                    }
                }
            }
            return [...state];

        case actionTypes.ACT_PURCHASE:
            return [];

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