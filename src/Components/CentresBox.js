import React, { Component } from "react";
import '../index.css';

class CentresBox extends Component {


    render() {
        const { centre } = this.props;
        return ( <
            div className = "product-box" >
            <
            div className = "left-photo" > < img src = { centre.ImgLink }
            alt = "" / > </div> <
            div className = "right-content" >
            <
            div className = "product-name" > { centre.CentreName } </div> <
            div className = "centre-description" > { centre.Location } </div> <
            div className = "centre-description" > { centre.Services } </div> {/*  <div className="centre-description"> {centre.Cost} </div> */ } <
            div className = "book-now" > < a href = { centre.Link } > < button > KNOW MORE </button></a > </div> </div> </div>


        );
    }
}


export default CentresBox;