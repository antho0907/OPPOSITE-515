import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Contact(){
  return (
    <div>
      <Header />
      <main className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="small-muted">Placeholder: contact [at] opposite515.example</p>
        <form className="mt-6 grid gap-3 max-w-md">
          <input placeholder="Ton nom" className="p-3 card" />
          <input placeholder="Ton email" className="p-3 card" />
          <textarea placeholder="Message" className="p-3 card h-32" />
          <button className="btn">Envoyer</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
