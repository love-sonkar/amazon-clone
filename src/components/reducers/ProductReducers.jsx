const ProductReducers = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((i) => {
          return i.id === action.payload.id
            ? (i.qty = action.payload.qty)
            : i.qty;
        }),
      };
  }
  return { ...state };
};

export default ProductReducers;
