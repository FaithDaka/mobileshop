export const addToCart = (product) => (dispatch, getState) => {
  
  dispatch({
    type: "ADD_TO_CART",
    payload: {product} ,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// export const removeFromCart = (product) => (dispatch, getState) => {
//   const cartItems = getState()
//     .cart.cartItems.slice()
//     .filter((x) => x._id !== product._id);
//   dispatch({ type: "REMOVE_FROM_CART", payload: { cartItems } });
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE",
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}