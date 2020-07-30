const axios = require('axios');

export const addCart = (product) => {
    return {
        type : 'ADD_TO_CART',
        product : product,
        price : product.price
    }
}

export const addProducts = (products) => {
    return {
        type: 'UPDATE_PRODUCTS',
        products : products
    }
}

export const topProducts = () => {
    return dispatch => {
        const url = 'http://localhost:5000/api/products/top'
        axios.get(url).then(res => {
            return dispatch(addProducts(res.data))
        })
    }
}

export const populateProducts = (category, search) => {
    return dispatch => {
        let url;
        if(category !== undefined && search !== undefined){
            url  = `http://localhost:5000/api/products/?category=${category}&search=${search}`;
        } else if(category === undefined && search !== undefined){
            url  = `http://localhost:5000/api/products/?search=${search}`;
        } else if(category !== undefined && search === undefined){
            url  = `http://localhost:5000/api/products/?category=${category}`;
        } else {
            url  = `http://localhost:5000/api/products/?`;
        }
        axios.get(url).then(
            res => {
                console.log(res.data)
                console.log("Data ^")
              return dispatch(addProducts(res.data))
            }).catch(e => {
              console.log(e)
                return dispatch(addProducts([]))
            });
    }
}