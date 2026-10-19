import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/about' },
  { label: 'Layanan', to: '/services' },
  { label: 'Portofolio', to: '/portfolio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navClass = ({ isActive }) => `transition-colors hover:text-[#d9ff00] ${isActive ? 'text-[#d9ff00]' : 'text-white/65'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11120f]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12" aria-label="Navigasi utama">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#d9ff00] text-sm font-black text-[#11120f]">N.</span>
          <span className="text-lg font-black tracking-[0.16em]">NEXORA<span className="text-[#d9ff00]">.</span></span>
        </Link>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass}>{link.label}</NavLink>)}
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d9ff00] px-5 py-3 font-bold text-[#11120f] transition hover:bg-white">
            Hubungi Kami <ArrowUpRight size={16} />
          </Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-lg border border-white/15 p-2 md:hidden" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 px-5 pb-5 pt-3 md:hidden">
        <div className="flex flex-col gap-1">
          {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-3 py-3 text-sm ${isActive ? 'bg-white/10 text-[#d9ff00]' : 'text-white/75'}`}>{link.label}</NavLink>)}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#d9ff00] px-5 py-3 text-sm font-bold text-[#11120f]">Hubungi Kami <ArrowUpRight size={16} /></Link>
        </div>
      </div>}
    </header>
  )
}