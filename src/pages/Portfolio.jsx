import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { PortfolioCard } from '../components/Card'
import { portfolio } from '../data/portfolio'

export default function Portfolio() {
  return (
    <>
      <section className="page-grid border-b border-white/5"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d9ff00]">Portofolio</p><h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Karya yang punya <span className="text-[#d9ff00]">cerita.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">Setiap proyek punya tantangan yang berbeda. Inilah beberapa contoh karya dari kolaborasi kreatif NEXORA.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><SectionHeading eyebrow="Pilihan proyek" title="Dari ide menjadi pengalaman." description="Contoh proyek berikut merupakan konsep portofolio untuk kebutuhan company profile NEXORA."/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{portfolio.map(project=><PortfolioCard key={project.number} project={project}/>)}</div><div className="mt-10 rounded-3xl border border-white/10 p-6 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-sm font-bold text-[#d9ff00]">Kolaborasi selanjutnya?</p><h2 className="mt-2 text-2xl font-black">Bisa jadi proyekmu ada di sini.</h2><p className="mt-2 text-sm text-white/55">Mari mulai dengan percakapan sederhana.</p></div><Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#d9ff00] px-5 py-3 text-sm font-bold text-[#11120f]">Hubungi kami <ArrowUpRight size={16}/></Link></div></div></section>
    </>
  )
}