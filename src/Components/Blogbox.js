import React from "react";
import '../index.css';
import { addblogs, addProducts, setShowAllBlogs, 
    setShowHomePage, setShowProducts,setShowBlog, displayBlog } from '../actions';

//  const BlogBox = (props) =>{
       
//    const {Title, Content} = {props.Title, props.Content};

//     return (
        
//         <div className="blogCart" >
//                 <div> Hello {props.Title}</div>
//                 <div>hello {props.Content}</div>   
//             </div>
//     );
// }

class BlogBox extends React.Component{

    handlesSetShowBlog = () =>{
        console.log('handlesSetShowBlog', this.props);
        this.props.dispatch(setShowBlog(3));
        const {blog} = this.props;
        this.props.dispatch(displayBlog(blog));
    }
    render(){
        const {blog} = this.props;
        return(
            <div className="blogCart">
                <div className="blogCart-up">
                    <div className="blog-title"> {blog.Title}</div>
                    
                    <p className="blog-content"> {blog.Content} </p>
                </div>
                <button className="read-more" 
                onClick={this.handlesSetShowBlog}
                >Read More</button>
                {/* <div> <p> {blog.Content} </p></div> */}
            </div>
        );
    }
}

export default BlogBox;