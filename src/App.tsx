import { Navbar } from './components/Navbar'
import { ToastProvider } from './components/ui/Toast'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { Benefits } from './sections/Benefits'
import { Stats } from './sections/Stats'
import { Testimonials } from './sections/Testimonials'
import { Pricing } from './sections/Pricing'
import { Faq } from './sections/Faq'
import { Cta } from './sections/Cta'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </ToastProvider>
  )
}