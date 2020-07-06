import React, { useState, useEffect } from 'react';
import placeholder from '../assets/images/placeholder.png';

import { ProductCard } from '../components/ProductCard';

const LandingPage = () => {
    return(<div>
        <ImageCarousal />
        <ListCarousal title="Title"/>
        <ListCarousal title="Second"/>
        <ListCarousal title="Third"/>
    </div>);
}


export default LandingPage;


export const ListCarousal = (props) => {
    const [slideCount, setCount ] = useState(3);
    const [current, changeState ] = useState(0);
    const slides = [
        <ProductCard key="1"/>,
        <ProductCard key="2"/>,
        <ProductCard key="3"/>,
        <ProductCard key="4"/>,
        <ProductCard key="5"/>,
        <ProductCard key="6"/>,
        <ProductCard key="7"/>,
        <ProductCard key="8"/>,
        <ProductCard key="9"/>,
        <ProductCard key="10"/>,
        <ProductCard key="11"/>,
        <ProductCard key="12"/>
    ];
    const max = slides.length;
    console.log(max , slideCount, max - slideCount);
    useEffect(() => {
        setCount(parseInt(window.innerWidth / 200) - 1);
        const handleResize = () => {
            setCount(parseInt(window.innerWidth / 200) - 1);
            changeState(0);
        }
        window.addEventListener('resize', handleResize);
    }, [setCount]);
    return(
    <div className="list-carousal">
    <h2>{props.title}</h2>
    <button className="button-back" onClick={() => changeState(current === 0 ? current : current-1)} style={{display : current === 0 ? 'none' : 'block'}}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
    <button className="button-next" onClick={() => changeState(current === max-slideCount ?  current :current+1)} style={{display : current === max - slideCount ? 'none' : 'block'}}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>

    <div style={{display : "flex"}}>
        {slides.slice(current, current + slideCount)}
    </div>
        
    </div>);
}


export const ImageCarousal = () => {
    const [currentSlide, changeSlide ] = useState(0);
    const slides = [
        <img src={placeholder} alt='product' key='1' width="100%"/>,
        <img src={placeholder} alt='product' key='2' width="100%"/>,
        <img src={placeholder} alt='product' key='3' width="100%" height="300px"/>,
    ];
    return(<div className="image-carousal">
        <button className="button-back" onClick={() => changeSlide(currentSlide - 1)}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button className="button-next" onClick={() => changeSlide(currentSlide + 1)}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        <div className="carousal-image">
            {slides[0]}
        </div>
    </div>);
}