import Link from 'next/link'
export default function Header(){
  return (
    <header className="border-b border-white/5 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(90deg,#2b2b2b,#111)'}}>
            <strong>O5</strong>
          </div>
          <div>
            <h1 className="text-lg font-bold">OPPOSITE 515 TCG</h1>
            <div className="small-muted">Cartes • Singles • Éditions limitées</div>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <Link href="/"><a className="header-link">Accueil</a></Link>
          <Link href="/catalogue"><a className="header-link">Catalogue</a></Link>
          <Link href="/contact"><a className="header-link">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
