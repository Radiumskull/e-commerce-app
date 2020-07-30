import React, { useState, useEffect } from 'react';
import placeholder from '../assets/images/placeholder.png';
import { useSelector, useDispatch } from 'react-redux';

import { ProductCardL } from '../components/ProductCard';
import { ProductListView } from '../components/ProductView';
import { topProducts } from '../actions/productActions';

const LandingPage = (props) => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(topProducts())
    }, [dispatch])
    return(<div>
        <ImageCarousal />
        <div style={{margin : "0px 5%"}}>
            <ProductListView title="Top Products">
                {products.map(product => <ProductCardL key={product._id} product={product}/>)}
            </ProductListView>
        </div>
    </div>);
}


export default LandingPage;


// export const ListCarousal = (props) => {
//     const [slideCount, setCount ] = useState(3);
//     const [current, changeState ] = useState(0);
//     const slides = props.products.map(product => );
//     const max = slides.length;
//     // console.log(max , slideCount, max - slideCount);
//     useEffect(() => {
//         setCount(parseInt(window.innerWidth / 200) - 1);
//         const handleResize = () => {
//             setCount(parseInt(window.innerWidth / 200) - 1);
//             changeState(0);
//         }
//         window.addEventListener('resize', handleResize);
//     }, [setCount]);
//     return(
//     <div className="list-carousal">
//     <h2>{props.title}</h2>
//     <button className="button-back" onClick={() => changeState(current === 0 ? current : current-1)} style={{display : current === 0 ? 'none' : 'block'}}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
//     <button className="button-next" onClick={() => changeState(current === max-slideCount ?  current :current+1)} style={{display : current === max - slideCount ? 'none' : 'block'}}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>

//     <div style={{display : "flex"}}>
//         {slides.slice(current, current + slideCount)}
//     </div>
        
//     </div>);
// }


export const ImageCarousal = () => {
    const [currentSlide, changeSlide ] = useState(0);
    const slides = [
        <img src={placeholder} alt='product' key='1' width="100%"/>,
        <img src={placeholder} alt='product' key='2' width="100%"/>,
        <img src={placeholder} alt='product' key='3' width="100%" height="300px"/>,
    ];
    return(<div className="image-carousal">

        <div className="back-bar" onClick={() => changeSlide(currentSlide - 1)}>

        </div>
        <div className="next-bar" onClick={() => changeSlide(currentSlide + 1)}>
        </div>
        
        
        <div className="carousal-image">
            {slides[currentSlide]}
        </div>
    </div>);
}