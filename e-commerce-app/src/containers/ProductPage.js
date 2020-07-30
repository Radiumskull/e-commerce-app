import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Rating } from '../components/ProductCard';
import { addCart } from '../actions/cartActions';
import placeholder from '../assets/images/placeholder.png'

const ProductPage = (props) => {
    const product_id = props.match.params.id;
    const dispatch = useDispatch();
    const [product, setProduct ] = useState({});
    const [quantity, setQuantity] = useState(1);
    const products = useSelector(state => state.products.products);
    useEffect(() => {
        products.forEach((product) => {
            if(product._id === product_id){
                setProduct(product);
            }
        });
    }, [product_id, products]);
    const addCartHandler = () => {
        dispatch(addCart(product, quantity));
    }
    return (<div className="product-page">
        <button onClick={() => props.history.goBack()}>Back</button>
        <div className="product-main">
        <img className="product-image" src={product.image === undefined ? placeholder : 'data:image/png;base64,' + product.image} alt={product.name} height="200" width="50" style={{objectFit : 'contain'}}/>
            <div className="product-description">
                <h2>{product.name}</h2>
                <span>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                </span>
                <Rating rating={product.rating}/>
                <span className="button-span">
                    {/* <button style={{backgroundColor : "blue", color : "white"}}>Buy Now</button> */}
                    <select style={{width : '100px'}} value={quantity} onChange={(event) => setQuantity(parseInt(event.currentTarget.value))}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                    </select>
                    <button style={{backgroundColor : "blue", color : "white"}} onClick={addCartHandler}>Add Cart</button>

                </span>
            </div>
        </div>


        <div className="comment-section">
            <h3>Comments</h3>
            <Comment user="Aritra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="ritra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="itra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="tra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="ra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="a" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>

        </div>

    </div>);
}


export const Comment = (props) => {
    return(<div className="comment">
        <h4>{props.user} : </h4>
        <p>{props.comment}</p>
    </div>);
}

export default ProductPage;