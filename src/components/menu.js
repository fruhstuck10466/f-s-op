import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from "gatsby";

//styles
import {MenuWrap, MenuHead, CloseMenu, MenuBody, MenuFoot} from "../styles/menuStyles"


const transition = { duration: 1, ease: [0.165, 0.84, 0.44, 1] };

const headParentAnime = {
  hidden: {opacity: 0},
  visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2}
  }
};

//child single animation
const headSingleAnime = {
  hidden : {
      y: 72,
  },
  visible : {
      y: 0,
     
  },  
  bye : {
    y: -72,
  }         
}


const Menu = ({ toggleMenu, setToggleMenu }) => {
    return (
        <>
        <AnimatePresence >
        {toggleMenu && (
        <MenuWrap
        initial={{ opacity: 0, y: "-100%" }}
        exit={{ opacity: 0 }}
        animate={{ opacity: toggleMenu ? 1 : 0, y: 0  }}
        transition={{ duration: 0.6,ease: [0.04, 0.04, 0.12, 0.96]}}
        >
            <MenuHead>
                <CloseMenu onClick={() => setToggleMenu(!toggleMenu)}>
                        <motion.span
                        animate={{ rotate: -45, y: 6 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        ></motion.span>
                        <motion.span
                        animate={{ x: "150%" }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        ></motion.span>
                        <motion.span
                        animate={{ rotate: 45, y: -3 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0.165, 0.84, 0.44, 1],
                        }}
                        ></motion.span>
                </CloseMenu>
            </MenuHead>
            <MenuBody>
            <motion.ul
            variants={headParentAnime}
            initial="hidden"
            animate="visible"
            exit="bye"
            >
                    <motion.li>
                      <Link to="/">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                          <sup>01/&nbsp;</sup> <h3>Home</h3>
                        </motion.div>
                      </Link>
                    </motion.li>
										<motion.li>
                      <Link to="/products">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                          <sup>02/&nbsp;</sup> <h1>Our Products</h1>
                        </motion.div>
                      </Link>
                    </motion.li>
										<motion.li>
                      <Link to="/about">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                          <sup>03/&nbsp;</sup> <h1>About us</h1>
                        </motion.div>
                      </Link>
                    </motion.li>
										<motion.li>
                      <Link to="/contact">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                          <sup>04/&nbsp;</sup> <h1>Contact us</h1>
                        </motion.div>
                      </Link>
                    </motion.li>
										<motion.li>
                      <Link to="/stockists">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                          <sup>05/&nbsp;</sup> <h3>Stockists</h3>
                        </motion.div>
                      </Link>
                    </motion.li>
										<motion.li>
                      <Link to="/">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                        <p>Find Us : <br/> Bellway Industrial Park, <br/> GoDown No.4,<br/>  Off Airport North Road, <br/> Embakasi, Nairobi Kenya.</p> 
                        </motion.div>
                      </Link>
                    </motion.li>
                </motion.ul>
            </MenuBody>
            <MenuFoot></MenuFoot>
        </MenuWrap>
        )}
        </AnimatePresence>
        </>
    );
}

export default Menu;
