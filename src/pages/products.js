import React, { useState } from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { AnimatePresence, motion } from "framer-motion";

//styles
import {
  ProductContainer,
  ProductsWrapper,
  ProductsWrapperInner,
  ProductsInstructions,
  ProductsDropdown,
  CategoriesHeader,
  CategoryIcon,
  CategoriesList,
  CategoryTitle,
} from "../styles/productStyles";

const categoriesAndList = [
  {
    id: 0,
    title: "Antiseptics",
    items: [
      "Povidone Iodine 10% w/v.",
      "Faholo Antiseptic (Chlorhexidine 0.3% w/v and Cetrimide 3% w/v).",
      "Chlorhexidine 5% w/v.",
      "Hydrogen Peroxide 6% w/v 20 Vol.",
      "Gentian Violet 1% w/v Solution.",
      "Surgical Spirit.",
      "Methylated Spirit.",
    ],
  },
  {
    id: 1,
    title: "Disinfectants",
    items: [
      "Tincture of Iodine 2.5% w/v.",
      "Lugols of Iodine 5% w/v.",
      "Cord Care (Chlorhexidine 7.5% w/v).",
      "Glutalbenzal & Activator 2.0% w/v.",
      "Eusol Solution.",
      "Lysol Solution.",
      "Sodium Hypochlorite.",
    ],
  },
  {
    id: 2,
    title: "Sanitizers",
    items: [
      "Povidone Iodine 7.5% w/v (Surgical Scrub).",
      "Chlorhexidine 4% w/v (Faholo Scrub).",
      "ChlorAlcohol 0.5% w/v & 70% v/v.",
      "Antibacterial Hand Sanitizer.",
    ],
  },
  {
    id: 3,
    title: "Cosmetics",
    items: [
      "Calamine Lotion.",
      "Pure Glycerine.",
      "Benzyl Benzoate 25% w/v.",
      "Castor Oil.",
      "Liquid Paraffin.",
      "Medical Massage Oil.",
      "Nail Polish Remover.",
      "Acetone.",
      "Emulsifying Ointment.",
      "Aqeous Cream.",
    ],
  },
  {
    id: 4,
    title: "Detergents",
    items: [
      "Hand Washing Gel.",
      "Multipurpose Liquid Detergent.",
      "Laundry Chlorine Bleach.",
      "Degreaser Heavy Duty.",
      "Laundry Oxygen Bleach.",
      "Laundry Booster.",
    ],
  },
  {
    id: 5,
    title: "Others",
    items: [
      "Farm Liniment.",
      "Formalin 40%.",
      "Boric Acid.",
      "Acetic Acid 4-6% w/v.",
      "White Spirit.",
      "De-Ionized Water.",
      "Ultra-Sound Gel.",
      "Food Warming Gel.",
      "Stain Remover (Ceramics).",
    ],
  },
  {
    id: 6,
    title: "Laboratory Reagents",
    items: [
      "Denatured Ethanol (99.9%).",
      "Denatured Ethanol (96%).",
      "Absolute Methyl Alcohol(Methanol) 99.9%.",
      "Glycerol.",
      "Hydrogen Peroxide 30% w/v (100Vol.).",
    ],
  },
];

const transitionOne = { duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] };

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

const Products = () => {
  const [expanded, setExpanded] = useState(0);
  return (
    <>
      <AnimatePresence>
        <Layout>
          <SEO
            title="Products"
            keywords={[
              `Faholo Chemicals Products`,
              `Chemical Distributers in Kenya`,
            ]}
          />
          <ProductContainer
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <ProductsWrapper>
              
              <ProductsWrapperInner>
                <ProductsInstructions>
              
              <motion.h1
                    variants={headParentAnime}
                    initial="hidden"
                    animate="show"                
                    >
                        <motion.div                   
                        variants={headSingleAnime}
                        transition={transition}
                        >Our Catalogue </motion.div> 

                     <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >of Products in</motion.div> 

                       <motion.div
                        variants={headSingleAnime}
                        transition={transition}
                        >Categories</motion.div>
                    </motion.h1>
            
                  <h4>
                    The range of pack sizes offered are as follows: <br /> 50ml,
                    100ml, 250ml, 300ml, 500ml, 1Lt, 2.5ml, 3Lt, 5Lt & 20Lt
                  </h4>
                </ProductsInstructions>
                <ProductsDropdown>
                  {categoriesAndList.map((details, index) => (
                    <CategoriesAccordion
                      key={index}
                      details={details}
                      expanded={expanded}
                      setExpanded={setExpanded}
                    />
                  ))}
                </ProductsDropdown>
              </ProductsWrapperInner>
            </ProductsWrapper>
            <Footer />
          </ProductContainer>
        </Layout>
      </AnimatePresence>
    </>
  );
};

const CategoriesAccordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  return (
    <>
      <CategoriesHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
      >
        <CategoryTitle><h3>{details.title}</h3></CategoryTitle>
        <CategoryIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3.5 }}
            transition={transitionOne}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3.5 }}
            transition={transitionOne}
          ></motion.span>
        </CategoryIcon>
      </CategoriesHeader>
      <CategoriesList
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.items.map((items, index) => (
          <span key={index}><h3>&#8226; {items}</h3></span>
        ))}
      </CategoriesList>
    </>
  );
};

export default Products;
