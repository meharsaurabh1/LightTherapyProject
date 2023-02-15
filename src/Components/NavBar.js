import React, {Component} from "react";
import '../index.css';
import { addblogs, addProducts, setShowAllBlogs, 
    setShowHomePage, setShowProducts,setShowBlog,setCommunityPage, setShowCentres } from '../actions';

// const NavBar = (props) =>{

//     return (
//         <div className="nav" >
//                 <div className="companyName"> PhotoMed  </div>
//                 <div className="links" > Light Blogs</div>   
//                 <div className="links"> Centres </div>   
//                 <div className="links"> Community </div>   
//                 <div className="links"> Products </div>   
//                 <div className="links"> SignIn </div>   
//             </div>
//     );
// }

class NavBar extends Component{
    
    handleShowLightBlogs = ()=>{
        console.log('handleShowLightBlogs', this.props);
        this.props.dispatch(setShowAllBlogs(2));
    };

    handleShowProducts = () =>{
        console.log('handleShowProducts', this.props);
        this.props.dispatch(setShowProducts(4));
    }
    handleShowHomePage = () =>{
        console.log('handleShowHomePage', this.props);
        this.props.dispatch(setShowHomePage(1));
    }

    handleCommunityPage = ()=>{
        console.log('handleCommunityPage', this.props);
        this.props.dispatch(setCommunityPage(5));
    }
    handleCentrePage = () =>{
        console.log('handleCentrePage', this.props);
        this.props.dispatch(setShowCentres(7));
    }

    render(){
        return(
            <div className="nav" >
               <div className="companyName"
               onClick={this.handleShowHomePage}
               > PhotoMed  </div>
                <div className="links" 
                onClick={this.handleShowLightBlogs}
                > Light Blogs</div>   
                <div className="links"
                    onClick={this.handleCentrePage}
                > Centres </div>   
                 <div className="links"
                    onClick={this.handleCommunityPage}
                 > Community </div>   
                 <div className="links"
                 onClick={this.handleShowProducts}
                 > Products </div>   
               <div className="links"> SignIn </div>   
             </div>

        );
    }
}


export default NavBar;