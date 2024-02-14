import React from 'react';
import { Link } from "gatsby";
import Chem from "../assets/images/bacc.jpg"

//styles
import {
  FooterWrapper,
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
            
        <p>We Believe in Quality, Integrity & Customer Service</p>
      </FooterImage>
      <FooterContent>
        <FooterDetails>
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
              aria-label="Instagram"
              href="https://www.instagram.com/faholochemicals"
              alt="Instagram Link"
            >
              Instagram
            </a>
            </p>
          </FooterDetailsOne>

          <FooterDetailsOne>
            <p>Support</p>
            <p><Link to="/contact">Contacts</Link></p>
            <p><Link to="/#faq-div">FAQs</Link></p>
          </FooterDetailsOne>
        </FooterDetails>
        <FooterCompany>
          <p>© Faholo {new Date().getFullYear()}</p>
        </FooterCompany>
        <FooterCredits>
          {/* <p>
            Site By{" "}
            <a href="https://jobmusembi.com" aria-label="Portfolio Link">
              Job Musembi
            </a>
          </p> */}
          <p>All Rights Reserved.</p>
        </FooterCredits>
      </FooterContent>
        </FooterWrapper>
    );
}

export default Footer;
