import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Success(){
  return (
    <div>
      <Header />
      <main className="container py-12">
        <h2 className="text-3xl font-bold">Paiement réussi</h2>
        <p className="small-muted mt-4">Merci ! Votre commande est confirmée (mode démonstration).</p>
      </main>
      <Footer />
    </div>
  )
}
