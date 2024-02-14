import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from "gatsby";

//styles
import {MenuWrap, MenuHead, CloseMenu, MenuBody, MenuFoot} from "../styles/menuStyles"

const navRoutes = [
  {
    id: 0,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "Products",
    path: "/products",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contact",
  },
];

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
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}>
                      <Link to={`${route.path}`} activeClassName="active">
                        <motion.div      
                          className="link"
                          variants={headSingleAnime}
                    transition={transition}
                        >
                          <sup>0{route.id}/ &nbsp; </sup> <h1>{route.title}</h1>
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
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
