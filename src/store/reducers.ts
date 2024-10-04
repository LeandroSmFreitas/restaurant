import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    theme: themeReducer
});

export default rootReducer;