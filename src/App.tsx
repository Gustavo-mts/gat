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
      <header className="absolute inset-x-0 top-8 z-50">
        <Header />
      </header>

      <main>
        {/* Coleções (Banner Principal) - Ocupa o topo da página, abaixo do Header fixo */}
        <section className="relative pt-[12px]">
          <Collections />
        </section>

        {/* Benefícios */}
        <Benefits />

        {/* Conteúdo Minimalista */}
        <section className='mt-16'>
          <MinimalistContent />
        </section>

        {/* Mais Vendidos */}
        <MostWanted />

        {/* Categorias */}
        <Categories />

        {/* Casas de Gato / Produto em Destaque */}
        <CatsHouse />

        {/* Sobre */}
        <About />

        {/* Comunidade de Gatos (Carrossel) */}
        <div>
          <CatsCommunit />
        </div>

        {/* Newsletter */}
        <NewsLetter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App