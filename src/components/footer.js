import React from 'react';
import { Link } from "gatsby";
import Chem from "../assets/images/faholo-team-social.jpg"

//styles
import {
  FooterWrapper,
  FooterDetailsWrapper,
  Disclaimer,
  FooterImage,
  FooterContent,
  FooterCompany,
  FooterDetails,
  FooterDetailsOne,
  FooterCredits,
} from "../styles/footerStyles";

const Footer = () => {

    return (
      <FooterWrapper>
        <FooterImage style={{backgroundImage: `url(${Chem})`}}>     
      {/* <p>We Believe in Quality, <br/> Customer Service & Honesty</p> */}
        </FooterImage>
      <FooterContent>
        <FooterDetails>
          <FooterDetailsWrapper>
            <FooterDetailsOne>
              <p>Company</p>
              <p><Link to="/products">Products</Link></p>
              <p><Link to="/about">About Us</Link></p>
            </FooterDetailsOne>
            <FooterDetailsOne>
              <p>Socials</p>
              <p><a
                aria-label="Facebook"
                href="https://www.facebook.com/pg/Faholo-Chemicals-Ltd-1713341125452958/posts/"
                alt="Facebook Link"
              >
                Facebook
              </a></p>
              <p>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/faholo-chemicals"
                alt="LinkedIn Link"
              >
                LinkedIn
              </a>
              </p>
            </FooterDetailsOne>
            <FooterDetailsOne id="footer-div">
              <p>Support</p>
              <p><Link to="/contact">Contact Us</Link></p>
              <p>
              <a
                aria-label="Jumia"
                href="https://www.jumia.co.ke/catalog/?q=Faholo"
                alt="Jumia Link"
              >
                Jumia Kenya
              </a>
              </p>
            </FooterDetailsOne>
            </FooterDetailsWrapper>
            <Disclaimer>
              <p>Disclaimer</p>
              <p>Faholo Chemicals Ltd is the #1 Best-Selling* and #1 Doctor Recommended manufacturer in Kenya.
              Please note that the information on this site is not intended to replace a physician’s diagnosis and should not be construed as individual medical advice. Always check with your physician. * These statements have not been evaluated by the Pharmacy and Poisons board. Some products are not intended to diagnose, treat, cure or prevent any disease.</p>
            </Disclaimer>
        </FooterDetails>
        
        <FooterCompany>
          <p>© Faholo {new Date().getFullYear()}</p>
        </FooterCompany>
        <FooterCredits>
          {/* <p>
            Site By{" "}
            <a href="https://thetwelve.co.ke" aria-label="Portfolio Link">
              THE 12
            </a>
          </p> */}
          <p>All Rights Reserved.</p>
        </FooterCredits>
      </FooterContent>
        </FooterWrapper>
    );
}

export default Footer;
