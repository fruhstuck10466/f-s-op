import { AnimatePresence, motion} from "framer-motion";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

//styles
import {
  ContactWrapper,
  ContactContainer,
  ContactFlex,
  ContactFlexInner,
  ContactTitle,
} from "../styles/contactStyles";

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
      opacity: 0, rotateX: 75, rotateY: 10, rotateZ: -9,
    },
    show : {
      opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 ,
       
    },           
}

const Stockists = () => {
  return (
    <>
      <AnimatePresence>
        <Layout>
        <Seo title="Stockists" 
        description="Find our trusted stockists across various counties in Kenya and near you."
        keywords="Find Faholo Chemicals cleaning products and detergents near me in Kenya, Where can i buy Faholo Chemicals Products, List of stores selling Faholo Chemicals products in Kenya" 
        />
          <ContactContainer
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, 0, 0.9],
            }}
          >
            <ContactWrapper>
              <ContactTitle>
              <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >Stockists</motion.div> 
                    </motion.h1>
             
              </ContactTitle>

              <ContactFlex>
                <ContactFlexInner>
                  <h3>Nairobi</h3>
                  <h3>
                    Transwide Pharmaceuticals <br />
                    NILA Pharmaceuticals ... and more
                  </h3>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Mombasa</h3>
                  <h3>Pharmacity Pharmaceuticals</h3>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Bungoma</h3>
                  <h3>
                    Bungoma Chemist
                  </h3>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Machakos</h3>
                  <h3>
                    Thwake Pharmaceuticals
                  </h3>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Mandera</h3>
                  <h3>
                  Mandera Drugmart
                  </h3>
                </ContactFlexInner>
                <ContactFlexInner>
                  <h3>Your Location</h3>
                  <h3>
                  Contact us to know a stockist near you.
                  </h3>
                </ContactFlexInner>
              </ContactFlex>
            </ContactWrapper>
            <Footer />
          </ContactContainer>
        </Layout>
      </AnimatePresence>
    </>
  );
};

export default Stockists;
