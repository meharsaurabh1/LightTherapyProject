import React from "react";
import '../index.css';
import { setShowFullExperience, displayExperience } from '../actions';

class CommunityBox extends React.Component{
    
    handleShowFullExperience = () =>{
        console.log('handleShowFullExperience', this.props);
        this.props.dispatch(setShowFullExperience(8));
        const {review} = this.props;
        this.props.dispatch(displayExperience(review));
    }
   
    render(){
        const {review} = this.props;
        return(
            <div className="Community-box">
                    <div className="left-photo"><img src={review.Link} /> </div>
                    <div className="right-content">
                        <div className="Person-name"> {review.Title}</div>
                        <div className="review-description"> {review.Content} </div>
                        <div className="readmore" onClick={this.handleShowFullExperience}><div><button>READ MORE</button></div></div>
                    </div>
            </div>
        );
    }

}

export default CommunityBox;