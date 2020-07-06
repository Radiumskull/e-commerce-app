
export const addCart = (product, quantity) => {
    return {
        type : 'ADD_TO_CART',
        product : {...product, quantity : quantity === undefined ? 1 : quantity},
        price : product.price * quantity
    }
}


export const addQuantity = (product_id, quantity) => {
    return {
        type : 'ADD_QUANTITY',
        product_id : product_id,
        quantity : quantity
    }
}


export const removeProduct = (product) => {
    return {
        type : 'REMOVE_FROM_CART',
        product : product,
    }
}