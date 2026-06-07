import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import BeforeAfter from './components/BeforeAfter'
import Services from './components/Services'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResponsiveStyles from './components/ResponsiveStyles'

function App() {
  return (
    <>
      <ResponsiveStyles />
      <Nav />
      <Hero />
      <TrustBar />
      <BeforeAfter />
      <Services />
      <About />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
