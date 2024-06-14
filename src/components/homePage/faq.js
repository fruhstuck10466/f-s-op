import React, { useState, useEffect } from 'react';

//framer useAnimation
import { useAnimation, motion } from 'framer-motion';

//intersection observer
import {useInView} from "react-intersection-observer"

import {FaqWrap, FaqWrapInner, FaqTitle, FaqInfo, FaqHeader, FaqQuestion, FaqIcon, FaqAnswer} from "../../styles/faqStyles"
import { Container } from '../../styles/globalStyles';

const faqList = [
    {
        id: 0,
        title: "What is the recommended usage of a Specific Medication?",
        item: "Our products page provides detailed guidance on the proper use of each medication. However, we strongly advise consulting with a healthcare professional prior to using any medication for optimal safety and effectiveness."
    },
    {
        id: 1,
        title: "Can I inquire about Product Availability and Price List?",
        item: "To learn about product availability and our current price list, please contact us with your order details. We'll be glad to assist you promptly."
    },
    {
        id: 2,
        title: "Do you offer deliveries outside Nairobi?",
        item: "We facilitate deliveries outside Nairobi through courier services. Please note that these services are at the customer's expense."
    },
]
const transitionOne = { duration: 0.2, ease: [0.6, 0.05, 0, 0.9] };

const transition = { duration: 1.5, ease: [0.165, 0.84, 0.44, 1] };


const headParentAnime = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1}
    }
  };

//child single animation
const headSingleAnime = {
    hidden : {
        opacity: 0, rotateX: 75, rotateY: 10, rotateZ: -9
    },
    visible : {
        opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 
       
    },           
}

const Faq = () => {
    const [expanded, setExpanded] = useState(0);
    const animation = useAnimation();
      const [faqRef, inView] = useInView({
          
          rootMargin: "-20%"
      })

      useEffect(() => {
          if(inView) {
              animation.start("visible")
          }
      }, [animation, inView]);
    return (
        <FaqWrap id="faq-div">
            <Container>
            <FaqWrapInner>
                <FaqTitle>
                <motion.h1
                    ref={faqRef}
                    animate={animation}
                    variants={headParentAnime}
                    initial="hidden"
                    visible={{
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.8 }
                    }}
                    >
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >Frequently</motion.div>
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >asked</motion.div>
                     <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >questions ⓘ</motion.div>
                    </motion.h1>
                </FaqTitle>
                <FaqInfo>
                {faqList.map((details, index) => (
                    <FaqAccordion
                      key={index}
                      details={details}
                      expanded={expanded}
                      setExpanded={setExpanded}
                    />
                  ))}
                </FaqInfo>
            </FaqWrapInner>
            </Container>
        </FaqWrap>
    );
}

//accordion

const FaqAccordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  return (
      <>
      <FaqHeader onClick={() => setExpanded(isOpen ? false : details.id)}>
        <FaqQuestion><h3>{details.title}</h3></FaqQuestion>
        <FaqIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3.5 }}
            transition={transitionOne}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3.5 }}
            transition={transitionOne}
          ></motion.span>
        </FaqIcon>
      </FaqHeader>
      <FaqAnswer
      key="content"
      animate={{ height: isOpen ? "100%" : "0" }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0, 0.9] }}
      >
        <h3>&#8226; {details.item}</h3>
      </FaqAnswer>
      </>
    );
};

export default Faq;
