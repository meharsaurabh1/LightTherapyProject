import React, { Component } from "react";
import '../index.css';

class ProductBox extends Component {


    render() {
        const { product } = this.props;
        return ( <
            div className = "product-box" >
            <
            div className = "left-photo" > < img src = { product.ImgLink }
            alt = "" / > < /div> <
            div className = "right-content" >
            <
            div className = "product-name" > { product.Title } < /div> <
            div className = "product-description" > { product.Content } < /div> <
            div className = "buy-now" > < a href = { product.Link } > < button > BUY NOW < /button></a > < /div> <
            /div> <
            /div>


        );
    }
}


export default ProductBox;