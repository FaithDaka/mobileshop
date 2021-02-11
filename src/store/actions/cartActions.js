
export const addToCart = (product) => async (dispatch, getState) => {
  
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        id: product._id,
        title: product.title,
        images: product.images[0].url,
        price: product.price,
        discount: product.discount,
        discountprice: product.discountprice,
        countInStock: product.countInStock
      },
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: "CART_REMOVE_ITEM",
      payload: id,
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }