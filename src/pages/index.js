import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import Faq from "../components/homePage/faq"
import Hero from "../components/homePage/hero"
import HomeAbout from "../components/homePage/homeAbout"
import Reviews from "../components/homePage/reviews"
import HomeProducts from "../components/homePage/homeProducts"
import HomeSteps from "../components/homePage/homeSteps"
import Layout from "../components/layout"
import Seo from "../components/seo"
import logoImage from "../assets/images/new-site-logo.png"
import socialImage from "../assets/images/faholo-team-social.jpg"

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
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          description
        }
      }
    }
  `)

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Faholo Chemicals Ltd",
    url: site.siteMetadata.siteUrl,
    description: site.siteMetadata.description,
    email: "faholochemicals@gmail.com",
    telephone: "+254 790 753 945",
    image: `${site.siteMetadata.siteUrl}${socialImage}`,
    logo: `${site.siteMetadata.siteUrl}${logoImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Bellway Industrial Park, GoDown No. 4, Off Airport North Road, Embakasi",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.3138262986736984,
      longitude: 36.91143297521527,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/pg/Faholo-Chemicals-Ltd-1713341125452958/posts/",
      "https://www.tiktok.com/@faholochemicals",
      "https://www.jumia.co.ke/catalog/?q=Faholo",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254790753945",
        contactType: "customer service",
        email: "faholochemicals@gmail.com",
      },
      {
        "@type": "ContactPoint",
        telephone: "+254704071649",
        contactType: "sales",
      },
    ],
  }

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
  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      title="Faholo Chemicals - Chemical Manufacturer & Distributer"
      description="Leading manufacturer and distributor of external pharmaceuticals, specializing in antiseptics, disinfectants, sanitizers, detergents, and cosmetics in Nairobi, Kenya."      
      keywords="Leading detergent manufacturer in Kenya, Leading disinfectant manufacturer in Kenya, Best hygiene and cleaning solutions in Kenya, Leading antiseptic manufacturer in Kenya"
      jsonLd={localBusinessJsonLd}
      />
      <Hero />
       <Faq />
      <HomeProducts />   
     
      <Reviews />
      <HomeAbout /> 
      <HomeSteps />  
      <Footer />
    </Layout>
  )
  }

export default IndexPage
