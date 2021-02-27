const initState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]")
}

const cartReducer = (state = initState, action)=> {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const {product} = action.payload;
      const check = state.cartItems.find(pr => pr.id === product.id);
      if(check){
          return state;
      } else {
          // product.quantity = quantity;
          return {
              ...state, cartItems: [...state.cartItems, product]
          }

      }
      case 'INCREMENT':
        findPro = state.cartItems.find(product => product.id === action.payload);
        index = state.cartItems.findIndex(product => product.id === action.payload);
        findPro.quantity += 1;
        state.cartItems[index] = findPro;
        return {
            ...state,
            totalPrice: state.totalPrice + findPro.price, totalQuantities: state.totalQuantities+1
        }
      case "DECREMENT":
      findPro = state.cartItems.find(product => product.id === action.payload);
      index = state.cartItems.findIndex(product => product.id === action.payload);
      if(findPro.quantity > 1){
         findPro.quantity -= 1;
         state.cartItems[index] = findPro;
         return {
             ...state,
             totalPrice: state.totalPrice - findPro.price, totalQuantities: state.totalQuantities - 1
         }
      } else {
          return state;
      }
      case 'REMOVE':
      findPro = state.cartItems.find(product => product.id === action.payload);
      const filtered = state.cartItems.filter(product => product.id !== action.payload);
      return {
          ...state,
          cartItems: filtered
      }
    default:
      return state;
  }
};

export default cartReducer;
