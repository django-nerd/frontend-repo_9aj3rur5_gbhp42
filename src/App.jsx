import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Approach from './components/Approach'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Approach />
        <Contact />
        <footer className="border-t border-emerald-400/10 py-10 text-center text-emerald-200/70">
          © {new Date().getFullYear()} Aegis Security — Built for resilience
        </footer>
      </main>
    </div>
  )
}

export default App
