import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <footer className="bg-primary text-white py-8 text-center">
        <p>© 2024 Genmeds. Making healthcare accessible and affordable.</p>
      </footer>
    </div>
  )
}
