import React, { useState } from 'react';

//styles
import {HeaderWrap, HeaderItems, Logo, HamburgerMenu} from "../styles/headerStyles"
//import { Container } from "../styles/globalStyles"

//icon
import LogoIcon from "../assets/images/faholo-icon.png"
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };

const Header = ({ toggleMenu, setToggleMenu }) => {
    const [hovered, setHovered] = useState(false)
    return (
            <HeaderWrap>
                <HeaderItems>
                    <Logo>
                       <Link to="/" >
                       <img src={LogoIcon} alt="faholo icon"/>
                        <p>Faholo<br/>Chemicals&nbsp;Ltd.</p>
                       </Link>
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
