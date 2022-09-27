import React from 'react'
import "./Footer.scss"
import facebookLogo from "../../assets/images/facebook-logo.png";
import twitterLogo from "../../assets/images/twitter-logo.png";
import googleLogo from "../../assets/images/google-logo.png";

function Footer() {
  return (
  <div>
<div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6 className="footer__about">About</h6>
            <p className="text-justify">FitLife is a web-based app where users can start their fitness journey. 
             Users can search for recipes and also share their own with the community!</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">&copy; 2022 All Rights Reserved by Fitlife LLC.
            </p>
          </div>
          <h4 className="footer__social-header">Join the Community!</h4>
          <div class="footer__social">
            <a href="https://www.twitter.com/">
            <img class="footer__social--logo" src={twitterLogo} alt="Twitter"/></a>
            <a href="https://www.facebook.com/">
            <img class="footer__social--logo" src={facebookLogo} alt="Facebook"/> </a>
            <a href="https://www.google.com/">
            <img class="footer__social--logo" src={googleLogo} alt="Google"/> </a>
        </div>
        </div>
      </div>
</div>
      <div><p className="footer__lower">FitLife | Capstone Project by Robert Loo</p></div>
  </div>
  )
}

export default Footer