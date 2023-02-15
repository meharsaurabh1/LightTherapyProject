import React from "react";
import '../index.css';

const Footer = (props) =>{

    return (
        <div className="footer" >
                <div className="companyName"> About Us
                <div className="footer-description">
                     We are a team of IITians, trying to disrupt the medical industry      
                    </div>  
                </div>
                {/* <div className="companyName"> QuickLinks
                <div className="footer-description">
                     Light blogs      
                    </div>
                    <div className="footer-description" style={{marginTop:0}}>
                     Centres      
                    </div> 
                    <div className="footer-description" style={{marginTop:0}}>
                     Community      
                    </div>
                    <div className="footer-description" style={{marginTop:0}}>
                     Products      
                    </div>     
                </div> */}
                <div className="links"> Facebook </div>   
                <div className="links"> Instagram </div>   
                <div className="links"> Twitter </div>   

            {/* <div className="companyName" style={{marginRight:0, display: fle}}> FollowUs
                            <div className="footer-description">
                                Light blogs      
                                </div>
                                <div className="footer-description" style={{marginTop:0}}>
                                Centres      
                                </div> 
                                <div className="footer-description" style={{marginTop:0}}>
                                Community      
                                </div>
                                <div className="footer-description" style={{marginTop:0}}>
                                Products      
                                </div>     
                            </div> */}
                   
            </div>
    );
}


export default Footer;