const initState = {
  products : [],
}


const productReducer = (state = initState, action) => {
    switch(action.type){
        case "UPDATE_PRODUCTS":
            console.log(action.products)
            return {products : [...action.products] };
        default:
            return state;
    }
} 

export default productReducer;