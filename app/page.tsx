import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="wrap" id="top">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <RevealObserver />
    </>
  )
}
