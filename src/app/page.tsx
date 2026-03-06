import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import About from '../components/About'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Stats />
      <Contact />
    </main>
  )
}