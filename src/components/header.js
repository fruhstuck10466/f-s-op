import React, { useState } from 'react';

//styles
import { TopBanner, TopBannerInner, HeaderWrap, HeaderItems, Logo, LogoImg, LogoText, LogoLink, HamburgerMenu } from "../styles/headerStyles"

//icon
import LogoIcon from "../assets/images/new-site-logo.png"
import WameIcon from "../assets/svg/WhatsAppButtonGreenSmall.svg"
//import JumiaIcon from "../assets/images/jumia.png"
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };

const Header = ({ toggleMenu, setToggleMenu }) => {
    const [hovered, setHovered] = useState(false)
    return (

        <HeaderWrap>
            <TopBanner>
                <TopBannerInner>
                    <span>📞 +254 790 753 945</span>
                    <span>📧 faholochemicals@gmail.com</span>
                </TopBannerInner>
            </TopBanner>
            <HeaderItems>
                <Logo>
                    <LogoImg>
                        <Link to="/" >
                            <img src={LogoIcon} alt="faholo icon" />
                            {/* <p>Faholo<br/>Chemicals&nbsp;Ltd.</p> */}
                        </Link>
                    </LogoImg>
                    <LogoText>
                        <Link to="/">Home</Link>
                        <Link to="/products">Our Products</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact us</Link>
                        {/* <Link to="/stockists">Stockists</Link>   
                             */}
                        {/* <Link to="/"><span className="disabled">Insights</span><span className="label">Soon</span></Link>
                            <Link to="/"><span className="disabled">Careers</span><span className="label">Soon</span></Link>                                                        */}
                    </LogoText>
                    <LogoLink>
                        <a aria-label="Chat on WhatsApp" href="https://wa.me/254111203302?text=Hello%20Faholo%20Chemicals%Ltd.%20👋%0AI’m%20contacting%20you%20from%20your%20website%20and%20would%20like%20assistance%20with%20your%20products,%20pricing,%20or%20placing%20an%20order.">
                            <img alt="Chat on WhatsApp" src={WameIcon} />
                        </a>
                    </LogoLink>
                    {/* <JumiaLink>
                            <a aria-label="Order on Jumia" href="https://www.jumia.co.ke/catalog/?q=faholo"> 
                            <img alt="Order on Jumia" src={JumiaIcon} />
                            </a>
                        </JumiaLink>                        */}
                </Logo>
                <HamburgerMenu onHoverStart={() => setHovered(!hovered)}
                    onHoverEnd={() => setHovered(!hovered)} onClick={() => setToggleMenu(!toggleMenu)}>
                    <motion.span
                        animate={{ x: hovered ? -5 : 0 }}
                        transition={{ ...transition }}
                    ></motion.span>
                    <motion.span
                        animate={{ x: hovered ? 5 : 0 }}
                        transition={{ ...transition }}
                    ></motion.span>
                    <motion.span
                        animate={{ x: hovered ? -5 : 0 }}
                        transition={{ ...transition }}
                    ></motion.span>
                </HamburgerMenu>
            </HeaderItems>
        </HeaderWrap>

    );
}

export default Header;
