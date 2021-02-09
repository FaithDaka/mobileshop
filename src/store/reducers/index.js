import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import authReducer from "./authReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    auth: authReducer,
    search: searchReducer,
    cart: cartReducer,
});

export default rootReducer;