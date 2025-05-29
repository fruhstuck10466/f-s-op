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
import ArrowRight from "../../assets/svg/arrow-right.svg";

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
                    > Inquiry to</motion.div>
                    <motion.div
                    variants={headSingleAnime}
                    transition={transition}
                    >delivery!</motion.div>
                    </motion.h1>
           
            <StepsWrapInner>
                <Step>
                    <StepHeading>
                        <h3>Inquiry:</h3>
                        <img src={InquireIcon} alt="conversation icon" />
                        </StepHeading>
                    <StepDescription>
                        <StepNumber><h3>1/3</h3></StepNumber>
                        <StepDescriptionInner>
                            <h3>To place an order, please contact our sales team for a quotation using the details provided on our Contact page. (NB: MoQ = 4Pcs)</h3>
                        </StepDescriptionInner>
                    </StepDescription>
                    <StepCta>
                        <h3>View Contacts</h3> <Link to="/contact"><span><img src={ArrowRight} alt=""/></span></Link>
                    </StepCta>
                </Step>
                <Step>
                    <StepHeading>
                        <h3>Payment:</h3>
                        <img src={ContractIcon} alt="conversation icon" />
                        </StepHeading>
                    <StepDescription>
                        <StepNumber><h3>2/3</h3></StepNumber>
                        <StepDescriptionInner>
                            <h3>For payments via M-Pesa or bank transfer, please refer to the instructions provided below.</h3>                     
                        </StepDescriptionInner>        
                    </StepDescription>
                    <StepAcc >
                        <h3>
                            Via M-pesa Paybill : <br/>
                            &rarr; Business No. - 410 728 7, <br/>
                            &rarr; A/C - YOUR NAME OR BUSINESS NAME <br/> 
                            Via Absa Bank Account :<br/>
                            &rarr; Pay Bill Business No. - 30 30 30<br/>
                            &rarr; Account No. - 203 232 220 7 <br/>        
                        </h3>
                    </StepAcc>
                </Step>
                <Step>
                    <StepHeading>
                        <h3>Delivery:</h3>
                        <img src={ShippedIcon} alt="delivery icon" />
                        </StepHeading>
                    <StepDescription>
                        <StepNumber><h3>3/3</h3></StepNumber>
                        <StepDescriptionInner>
                            <h3 data-nosnippet>You may choose to have your goods delivered or collect them directly from our premises.</h3> <br/>
                        </StepDescriptionInner>
                    </StepDescription>
                    <StepCta>
                        <h3>Get Directions</h3> <a href="https://www.google.com/maps/dir//faholo/@-1.3138759,36.8439214,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x182f1109e4088c39:0x81f820e2de258964!2m2!1d36.913962!2d-1.3138769"
                    aria-label="directions"><span><img src={ArrowRight} alt=""/></span></a>
                    </StepCta>
                </Step>
            </StepsWrapInner>
            </Container>
        </StepsWrap>
    );
}

export default HomeSteps;
