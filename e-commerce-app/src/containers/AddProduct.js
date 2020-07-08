import React, { useState} from 'react';

const AddProduct = (props) => {
    const [ formView , changeView ] = useState(true);
    const [ formState, updateForm ] = useState({
        name : "",
        description : "",
        brand : "",
        category : "",
        stock : 1,
        price : 10,
        fileImage : null,
    });
    const viewHandler = () => changeView(!formView);
    const submitHandler = (event) => {
        event.preventDefault();
        changeView();
    }
    const inputHanlder = (event) => {
        const field = event.currentTarget.name;
        switch(field){
            case 'product-name':
                updateForm({...formState, name : event.currentTarget.value});
                break;
            case 'description':
                updateForm({...formState, description : event.currentTarget.value});
                break;
            case 'brand':
                updateForm({...formState, brand : event.currentTarget.value});
                break;
            case 'price':
                updateForm({...formState, price : parseInt(event.currentTarget.value)});
                break;
            case 'stock':
                updateForm({...formState, stock : parseInt(event.currentTarget.value)});
                break;
            case 'category':
                updateForm({...formState, category : event.currentTarget.value});
                break;
            case 'product-image':
                updateForm({...formState, fileImage : URL.createObjectURL(event.currentTarget.files[0])});
                break;
            default:
                break;
        }
    }
    
    return(
        formView ? <ProductForm formState={formState} inputHanlder={inputHanlder} fileImage={formState.fileImage} submitHandler={submitHandler}/> : <PreviewPage formState={formState} viewHandler={viewHandler} submitHandler={submitHandler}/>
    );
}

export default AddProduct;

const ProductForm = (props) => {
    return(<div className="add-product-page">
            <form className="form-container" onSubmit={props.submitHandler}>
            <h2>Add Product</h2>
            <div className="input-group">
                <label htmlFor="product-name">Product Name</label>
                <input value={props.formState.name} type="text" id="product-name" name="product-name" onChange={props.inputHanlder} required/>
            </div>
            <div className="input-group">
                <label htmlFor="description">Description</label>
                <textarea value={props.formState.description} type="text" id="description" name="description" maxLength="1000" onChange={props.inputHanlder} required/>
            </div>
            <div className="input-group">
                <label htmlFor="brand">Brand</label>
                <input value={props.formState.brand} type="text" id="brand" name="brand" onChange={props.inputHanlder} required/>
            </div>
            <div className="input-group">
                <label htmlFor="description">Category</label>
                <input value={props.formState.category} type="text" id="category" name="category" onChange={props.inputHanlder} required/>
            </div>
            <div className="input-group">
                <label htmlFor="price">Price</label>
                <input value={props.formState.price} min='10' type="number" id="price" name="price" onChange={props.inputHanlder} required/>
            </div>
            <div className="input-group">
                <label htmlFor="price">Stock</label>
                <input value={props.formState.stock} min='1' type="number" id="stock" name="stock" onChange={props.inputHanlder} required/>
            </div>
            <div className="input-group">
                <label htmlFor="image">Product Image</label>
                <input type="file" id="product-image" name="product-image" onChange={props.inputHanlder} required/>
                {props.fileImage !== null ? <img className="image-preview" src={props.fileImage} alt="product"/> : null}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>);
}
const PreviewPage = (props) => {
    return(<div className="add-product-page">
        <div className="form-container">
            <img src={props.formState.fileImage} className="image-preview" alt="product"/>
            <p>Product Name : {props.formState.name}</p>
            <p>Product Description : {props.formState.description}</p>
            <p>Brand : {props.formState.brand}</p>
            <p>Category : {props.formState.name}</p>
            <div className="preview-buttons" style={{width : '100%', display: 'flex', justifyContent : 'space-evenly'}}>
                <button onClick={props.viewHandler}>Change</button>
                <button>Submit</button>
            </div>
        </div>
    </div>);
}