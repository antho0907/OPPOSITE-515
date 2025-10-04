export default function ProductCard({p}){
  return (
    <div className="card p-4">
      <div className="w-full h-40 rounded-md bg-gradient-to-br from-[#071022] to-[#041018] mb-3 flex items-center justify-center"> 
        {p.image ? <img src={p.image} alt="" style={{maxHeight:'100%', maxWidth:'100%'}} /> : 'Image'}
      </div>
      <h4 className="font-semibold">{p.title}</h4>
      <div className="small-muted mt-1">{p.game} • {p.condition}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">€{p.price.toFixed(2)}</div>
        <a className="btn" href="#">Ajouter</a>
      </div>
    </div>
  )
}
