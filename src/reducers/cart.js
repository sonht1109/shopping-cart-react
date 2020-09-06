import * as actionTypes from '../constants/ActionTypes';

var initState = [
    {
        product: {
            id: 1,
            name: 'Huawei Nova 7i',
            src: 'https://cdn.tgdd.vn/Products/Images/42/218363/huawei-nova-7i-tgdd4-5.jpg',
            price: 228,
            desc: 'Made by Huawei',
            inventory: 5
        },
        quantity: 2
    }
]

var reducer = (state = initState, action)=>{
    switch(action.actionTypes){
        
        case actionTypes.ACT_ADD_TO_CART:
            console.log(action);
            return [...state];

        default:
            return [...state];
    }
}

export default reducer;