import React, { useEffect, useState } from "react"
import Footer from "../components/footer"
import Faq from "../components/homePage/faq"
import Hero from "../components/homePage/hero"
import HomeAbout from "../components/homePage/homeAbout"
import HomeProducts from "../components/homePage/homeProducts"
import HomeSteps from "../components/homePage/homeSteps"
import Layout from "../components/layout"
import Seo from "../components/seo"

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const IndexPage = props => {
  let defaultHeight
  let defaultWidth

  if (typeof window !== `undefined`) {
    defaultHeight = window.innerHeight
    defaultWidth = window.innerWidth
  }

  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })
  useEffect(() => {
    let vh = dimensions.windowHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })

  return (
  <Layout>
      <Seo 
      title="Home"
      description="Leading manufacturer and distributor of external pharmaceuticals, specializing in antiseptics, disinfectants, sanitizers, detergents, and cosmetics. Quality, customer care, and honesty are our core values."      
      keywords="Leading detergent manufacturer in Kenya, Leading disinfectant manufacturer in Kenya, Best hygiene and cleaning solutions in Kenya, Leading antiseptic manufacturer in Kenya" 
      />
      <Hero />
      <HomeProducts />   
      <HomeSteps /> 
      <HomeAbout />  
      <Faq />
      <Footer />
    </Layout>
  )
  }

export default IndexPage
