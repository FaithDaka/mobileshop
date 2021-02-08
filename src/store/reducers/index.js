import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer,
    search: searchReducer,
    cart: cartReducer,
});

export default rootReducer;