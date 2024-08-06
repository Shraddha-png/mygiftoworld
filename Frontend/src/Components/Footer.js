import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        {/* <div className="container-fluid bg-dark mt-5">
              <div className="row">
                <div className="col text-white mt-5">
                    <h5>Connect With Us</h5>
                    <p className="mt-4">Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Whatsapp</p>
                </div>
                <div className="col text-white mt-5 ">
                  <a href="" className="footerpage"><h5 className="text-white">Categories</h5></a>
                  <a href="" className="footerpage"><p className="mt-4 text-white">Home</p></a>
                  <a href="" className="footerpage"><p className="text-white">About</p></a>
                  <a href="" className="footerpage"><p className="text-white">Products</p></a>
                  <a href="" className="footerpage"><p className="text-white">Mug</p></a>
                  <a href="" className="footerpage"><p className="text-white">Pens</p></a>
                  <a href="" className="footerpage"><p className="text-white">T Shirts</p></a>
                  <a href="" className="footerpage"><p className="text-white">Custom Name Plates</p></a>
                </div>
                <div className="col text-white mt-5">
                  <h5>Useful Links</h5>
                  <p className="mt-4">Refund Policy</p>
                  <p>Order Details</p>
                  <p>Track Package</p>
                  <p>Shopping History</p>
                  <p>Update Profile</p>
                  <p>Delete Profile</p>
                  <p>Subscriptions</p>
                </div>
              </div>
          </div>
          <div className="container-fluid">
            <div className=""></div>
          </div> */}

        
          <div className="container-fluid py-0 footer bg-light mt-3">
          <hr  className="line"/>
            <div className="container mt-5">
              <h2>Newsletter Subscribe</h2>
              <p>Be first to know about New Products Release, Innovative Products, Exclusive deals & more.</p>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <h2>We're Always Here To Help</h2>
                <div className="col">
                <p><i className="bi bi-question-circle"></i>  Terms & Conditions</p>
                </div>
                <div className="col">
                <p><i className="bi bi-piggy-bank-fill"></i>  Return & Refund</p>
                </div>
                <div className="col">
                <Link to='/feedback' className="feedback"><p><i className="bi bi-person-lines-fill "></i> Contact</p></Link>
                </div>
                </div>
                <hr />
            </div>
            <div className="container">
              <div className="row">
             <h3>Follow Us</h3>
             <div className="col">
              <img src="/images/icon/Facebook_icon.png" className="icon px-2"/>
             
            
              <img src="/images/icon/mEmWlw-logo-instagram-hd-image.png" className="icon px-2"/>
            
            
              <img src="/images/icon/whatsapp_icon.jpg" className="icon px-2"/>
              
             </div>
             </div>
            </div>
            <div className="p-0.5 text-white navfirst border-bottom text-end px-5">
            <h5 className="mx-2">Terms & Conditions</h5>
        </div>
          </div>
          
        </>
    )
}
export default Footer;