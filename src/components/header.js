import React, { useState } from 'react';

//styles
import {HeaderWrap, HeaderItems, Logo, LogoImg, LogoText, LogoLink, HamburgerMenu} from "../styles/headerStyles"

//icon
import LogoIcon from "../assets/images/new-site-logo.png"
import WameIcon from "../assets/svg/WhatsAppButtonGreenSmall.svg"
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };

const Header = ({ toggleMenu, setToggleMenu }) => {
    const [hovered, setHovered] = useState(false)
    return (
            <HeaderWrap>
                <HeaderItems>
                    <Logo>
                        <LogoImg>
                            <Link to="/" >
                            <img src={LogoIcon} alt="faholo icon"/>
                            {/* <p>Faholo<br/>Chemicals&nbsp;Ltd.</p> */}
                            </Link>
                        </LogoImg>
                        <LogoText>
                            <Link to="/">Home</Link>                            
                            <Link to="/products">Our Products</Link>
                            <Link to="/about">About us</Link>
                            <Link to="/contact">Contact us</Link>
                            <Link to="/stockists">Stockists</Link>   
                            
                            {/* <Link to="/"><span className="disabled">Insights</span><span className="label">Soon</span></Link>
                            <Link to="/"><span className="disabled">Careers</span><span className="label">Soon</span></Link>                                                        */}
                       </LogoText>  
                       <LogoLink>
                            <a aria-label="Chat on WhatsApp" href="https://wa.me/254704071649?text=Hi%20I%20found%20your%20website%20and%20Im%20interested%20in%20your%20products.%20Could%20you%20please%20assist%20me%20with%20more%20information%20Thank%20you"> 
                            <img alt="Chat on WhatsApp" src={WameIcon} />
                            </a>
                        </LogoLink>                    
                    </Logo>
                    <HamburgerMenu onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)} onClick={() => setToggleMenu(!toggleMenu)}>
                        <motion.span
                        animate={{ x: hovered ? -5 : 0}}
                        transition={{...transition}}
                        ></motion.span>
                        <motion.span
                        animate={{ x: hovered ? 5 : 0}}
                        transition={{...transition}}
                        ></motion.span>
                        <motion.span
                       animate={{ x: hovered ? -5 : 0}}
                       transition={{...transition}}
                        ></motion.span>
                    </HamburgerMenu>
                </HeaderItems>       
        </HeaderWrap>
    
    );
}

export default Header;
