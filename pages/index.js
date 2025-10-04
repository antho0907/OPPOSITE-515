import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Home(){
  return (
    <div>
      <Header />
      <main className="container py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold">OPPOSITE 515 — Collection premium</h2>
            <p className="small-muted mt-4">Boutique multi-TCG, Pokémon privilégié. Édition limitée & singles soigneusement sélectionnés.</p>
            <div className="mt-6"><a href="/catalogue" className="btn">Voir le catalogue</a></div>
          </div>
          <div className="card p-6">
            <h3 className="font-bold">Spotlight — Duo Posi & Nega</h3>
            <div className="mt-4 flex gap-4 items-center">
              <img src="/posi.svg" alt="posi" style={{width:120}} />
              <img src="/nega.svg" alt="nega" style={{width:120}} />
            </div>
            <p className="small-muted mt-4">Mascottes originales stylisées pour OPPOSITE 515 — concept opposés.</p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Produits en vedette</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0,3).map(p=> <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
