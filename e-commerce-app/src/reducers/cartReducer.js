const initState = {
    products : [],
    total : 0,
    product_count : 0,
}

const addToCart = (state, action) => {
    const newState = state;
    let flag = true;
    newState.products.forEach((product) => {
        if(product.product_id === action.product.product_id){
            flag = false;
            product.quantity += action.product.quantity;
            newState.product_count += action.product.quantity;
            newState.total += (product.price * action.product.quantity)
        }
    });
    if(flag) {
        newState.products = [...newState.products, action.product];
        newState.product_count += action.product.quantity;
        newState.total += action.product.price * action.product.quantity;
    };

    return newState;
}

const addQuantity = (state, action) => {
    const newState = state;
    newState.products.forEach((product) => {
        if(product.product_id === action.product_id) {
            newState.product_count -= product.quantity;
            newState.total -= (product.price * product.quantity);
            product.quantity = action.quantity;
            newState.product_count += product.quantity;
            newState.total += (product.price * product.quantity);
        }
    });

    return newState;
}

const removeFromCart = (state, action) => {
    const newState = state;
    newState.product_count -= action.product.quantity;
    newState.total -= (action.product.price * action.product.quantity); 
    newState.products = newState.products.filter((product, index, arr) => product.product_id !== action.product.product_id);
    return newState; 
}


const cartReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_TO_CART": return addToCart(state, action);
        case "ADD_QUANTITY": return addQuantity(state, action); 
        case "REMOVE_FROM_CART": return removeFromCart(state, action); 
        default:
            return state;
    }
} 

export default cartReducer;