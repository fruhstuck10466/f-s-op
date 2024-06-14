import React, {useEffect}  from 'react';
import { Link } from "gatsby";

//framer
import { useAnimation, motion } from 'framer-motion';

//intersection observer
import {useInView} from "react-intersection-observer"

//styles
import {Container} from "../../styles/globalStyles"
import {StepCta,StepAcc, StepsWrap, StepsWrapInner, Step, StepHeading, StepDescription, StepNumber, StepDescriptionInner,} from "../../styles/homeStepsStyles"

//svg
import InquireIcon from "../../assets/svg/conversation.svg";
import ContractIcon from "../../assets/svg/contract.svg";
import ShippedIcon from "../../assets/svg/shipped.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg"

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

const HomeSteps = () => {

    const animation = useAnimation();
      const [orderRef, inView] = useInView({
          triggerOnce: true,
          rootMargin: "-20%"
      })

      useEffect(() => {
          if(inView) {
              animation.start("visible")
          }
      }, [animation, inView]);

    return (
        <StepsWrap>
            <Container>
            <motion.h1
                    ref={orderRef}
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
                    > Inquire, quote,</motion.div>
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >pay, deliver! 🚛</motion.div>
                    {/* <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >Support ?</motion.div> */}
                    </motion.h1>
           
            <StepsWrapInner>
                <Step>
                    <StepHeading>
                        <h2>Inquiry:</h2>
                        <img src={InquireIcon} alt="conversation icon" />
                        </StepHeading>
                    <StepDescription>
                        <StepNumber><h4>1/3</h4></StepNumber>
                        <StepDescriptionInner>
                            <h4>To place an order, including the product name, pack size, and quantity, contact our dedicated sales team for a quote using the information provided below.</h4>
                        </StepDescriptionInner>
                    </StepDescription>
                    <StepCta>
                        <h4>View Contacts</h4> <Link to="/contact"><span><img src={ArrowRight} alt=""/></span></Link>
                    </StepCta>
                </Step>
                <Step>
                    <StepHeading>
                        <h2>Payment:</h2>
                        <img src={ContractIcon} alt="conversation icon" />
                        </StepHeading>
                    <StepDescription>
                        <StepNumber><h4>2/3</h4></StepNumber>
                        <StepDescriptionInner>
                            <h4>For payment via M-Pesa or Bank Account, please follow the instructions below.</h4>                     
                        </StepDescriptionInner>        
                    </StepDescription>
                    <StepAcc >
                        <h4><span>Via (absa) Bank Account :</span> <br/>
                            &rarr; Pay Bill Business No. - 30 30 30<br/>
                            &rarr; Account No. - 203 232 220 7 <br/>
                            <span>Via M-pesa Paybill :</span> <br/>
                            &rarr; Business No. - 410 728 7, <br/>
                            &rarr; A/C - YOUR NAME OR BUSINESS NAME 
                        </h4>
                    </StepAcc>
                </Step>
                <Step>
                    <StepHeading>
                        <h2>Delivery:</h2>
                        <img src={ShippedIcon} alt="delivery icon" />
                        </StepHeading>
                    <StepDescription>
                        <StepNumber><h4>3/3</h4></StepNumber>
                        <StepDescriptionInner>
                            <h4 data-nosnippet>Choose to have your goods delivered or pick them up from our location.</h4> <br/>
                            <h4 data-nosnippet>Location : <br/>
                                Bellway Industrial Park, <br/>
                                GoDown No.4 <br/>
                                Embakasi, Nairobi Kenya.
                            </h4>
                        </StepDescriptionInner>
                    </StepDescription>
                    <StepCta>
                        <h4>Get Directions</h4> <a href="https://www.google.com/maps/dir//faholo/@-1.3138759,36.8439214,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x182f1109e4088c39:0x81f820e2de258964!2m2!1d36.913962!2d-1.3138769"
                    aria-label="directions"><span><img src={ArrowRight} alt=""/></span></a>
                    </StepCta>
                </Step>
            </StepsWrapInner>
            </Container>
        </StepsWrap>
    );
}

export default HomeSteps;
