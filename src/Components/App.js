
import React, {useEffect} from 'react';
import NavBar from './NavBar';
import '../index.css';
import Footer from './Footer';
import { blogData } from './DataBlogs';
import { productData } from './DataProducts';
import {communityData } from './CommunityData';
import {centresData } from './CentresData';
import BlogBox from './Blogbox';
import ProductBox from './ProductBox';
import CommunityBox from './CommunityBox';
import CentresBox from './CentresBox';
import FormBox from './FormBox';
import {useDispatch } from 'react-redux';
import { addblogs, addProducts, setShowAllBlogs, 
  setShowHomePage, setShowProducts,setShowBlog, setTakeExperience,setCommunityPage } from '../actions';

  import { getReviews } from '../actions';
 
const setShowHomePageVal =1;
const setShowAllBlogsVal =2;
const setShowBlogVal =3;
const setShowCentresVal =7;
const setShowProductsVal = 4;
const setShowCommunityPage = 5;
const setShowFullExperience = 8;
// const setTakeExperience = 6;
//const dispatch = useDispatch();
// useEffect(()=>{
//   dispatch(getReviews());
// }, [dispatch]);
class App extends React.Component{

  

  componentDidMount(){
    const {store} = this.props;

    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addblogs(blogData));
    console.log('rrr');
    store.dispatch(addProducts(productData));
     store.dispatch(setShowHomePage(setShowHomePageVal));
    console.log('state', this.props.store.getState());
  }
  
  handleWriteExperience = () =>{
    console.log('handleWriteExperience', this.props);
        this.props.store.dispatch(setTakeExperience(6));

  }

  handleCommunityPage = ()=>{
    console.log('handleCommunityPage', this.props);
    this.props.store.dispatch(setCommunityPage(5));
}
  render(){

    const {blogs, showScreen, fullBlog, products, fullExperience } = this.props.store.getState();
    return(
      <div> 
        <NavBar dispatch={this.props.store.dispatch}> </NavBar>
       
       
       {showScreen === 1 ? <div><div id="first-half"> 
          <h1 id="first-half-content"> Non-Penetrative HealthCare Now Available</h1>
          <div className="gtc-btn-div">
          <button className ="gtc-btn" onClick={this.handleCommunityPage}> Go to Community</button>
          </div>   
        </div>
        
        <div id="second-half"> 
        
          { 
          
            blogs.map(blog=>(
              blog.id <5 &&
              <BlogBox dispatch={this.props.store.dispatch} key={blog.id} blog = {blog}/>
            ))
            
            
          }
        </div> 
        </div>
        : ''}

          {showScreen === 2 ? <div>
                  <h1 className="small-strip"> Light Blogs</h1>
 
                <div id="second-half" > 
                  {                  
                    blogs.map(blog=>(            
                      <BlogBox dispatch={this.props.store.dispatch} key={blog.id} blog = {blog}/>                
                    ))
                    
                  }
                </div> 
                </div>
                : ''}
            
            {showScreen === 3 ? <div>

                {/* <div id="second-half"> 
                  { 

                      <BlogBox blog = {fullBlog}/>
                   
                    
                  }
                </div>  */}
                
                <h1 className="fullBlog-heading">{fullBlog.Title}</h1> 
                <p id = "full-blog-dispaly"> {fullBlog.Content}</p>
                </div>
                : ''}

                {showScreen === 4 ? <div>
                  <h1 className="small-strip"> Products Available</h1>
                  {
                  products.map(product =>(
                    <ProductBox key = {product.id} product = {product}/>
                  ))
                  }
                </div>
                : ''}

                {/* {showScreen === 4 ? <div>

                  {
                  products.map(product =>(
                    <ProductBox key = {product.id} product = {product}/>
                  ))
                  }
                </div>
                : ''} */}

                {showScreen === 5 ? <div>
                 
                  <div>
                  <h1 className="small-strip"> Welcome to the Community Page</h1>
                  <div   onClick={this.handleWriteExperience}
                  > 
                  {/* <div className='addExp2' >Write your Experience</div>  */}
                  <div className="gtc-btn-div">
          <button className ="gtc-btn" > Write your Experience</button>
          </div>
                  </div>
                  </div>
                  <div > 
                  {   

                    communityData.map(review=>(            
                      <CommunityBox dispatch={this.props.store.dispatch} key={review.id} review = {review}/>                
                    ))
                    
                  }
                </div> 
                
                </div>
                : '' }

              {showScreen === 6 ? <div>
                
                  <h1 className="small-strip"> Submit your Experience</h1>
                  
                  <FormBox/>

                
                </div>
                : '' }

                {showScreen === 7 ? <div>
                
                <h1 className="small-strip"> CENTRES IN LOCALITY</h1>
                
                {centresData.map(centre =>(
                  <CentresBox dispatch= {this.props.store.dispatch} key={centre.id} centre ={centre}/> 
                ) )
                
                
                }

              
              </div>
              : '' }

              
              {showScreen === 8 ? <div>
                
                <div className="flex-display">
                <span className="left-photo"><img src={fullExperience.Link} /> </span>
                <div className="person-photo-align"> <h1>{fullExperience.Title} </h1></div> 
                </div>
                <div className="expContent-margin"> {fullExperience.Content}</div> 
                
              
              </div>
              : '' }
  
        <Footer> </Footer>
      </div>
    );
  }

}

export default App;
