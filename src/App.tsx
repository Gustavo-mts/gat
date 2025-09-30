import Collections from './components/collections'
import CatsCommunit from './components/catsCommunit'
import MinimalistContent from './components/minimalismContent'
import Benefits from './components/Benefits'
import MostWanted from './components/moreWanted'
import Categories from './components/categories'
import CatsHouse from './components/catsHouse'
import About from './components/about'
import NewsLetter from './components/newsLetter'
import Footer from './components/footer'
import { Header } from './components/header'


function App() {


  return (
    <>

      <section className="relative">
        <header className="absolute inset-x-0 top-8 z-50">
          <Header />
        </header>

        {/* se precisar dar espaço para o header, use padding-top */}
        <div className="pt-[12px] mb-16">
          <Collections />
        </div>
      </section>


      <Benefits /> 

      <section className='mt-16'>
        <MinimalistContent />
      </section>

      <MostWanted />

      <Categories />

      <CatsHouse />
      
      <About />

      <div>
        <CatsCommunit />
      </div>

      <NewsLetter />

      <Footer />
    </>
  )
}

export default App
