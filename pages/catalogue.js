import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Catalogue(){
  return (
    <div>
      <Header />
      <main className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Catalogue</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(p=> <ProductCard key={p.id} p={p} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}
