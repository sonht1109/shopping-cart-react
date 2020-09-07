import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import mess from './mess'

const reducer = combineReducers({
    products,
    cart,
    mess
})
export default reducer;