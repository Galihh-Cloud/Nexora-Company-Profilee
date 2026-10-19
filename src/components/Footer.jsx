import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0d0b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:px-12">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-lg font-black tracking-[0.16em]">NEXORA<span className="text-[#d9ff00]">.</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">Partner digital untuk ide yang ingin tumbuh menjadi sesuatu yang berdampak.</p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram NEXORA" className="rounded-full border border-white/15 p-3 transition hover:border-[#d9ff00] hover:text-[#d9ff00]"><Instagram size={17} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn NEXORA" className="rounded-full border border-white/15 p-3 transition hover:border-[#d9ff00] hover:text-[#d9ff00]"><Linkedin size={17} /></a>
            <a href="mailto:hello@nexora.id" aria-label="Email NEXORA" className="rounded-full border border-white/15 p-3 transition hover:border-[#d9ff00] hover:text-[#d9ff00]"><Mail size={17} /></a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
            <Link className="hover:text-[#d9ff00]" to="/about">Tentang Kami</Link>
            <Link className="hover:text-[#d9ff00]" to="/services">Layanan</Link>
            <Link className="hover:text-[#d9ff00]" to="/portfolio">Portofolio</Link>
            <Link className="hover:text-[#d9ff00]" to="/contact">Kontak</Link>
          </div>
          <p className="text-sm text-white/40">© {new Date().getFullYear()} NEXORA Digital Studio. Website company profile.</p>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-3 text-center text-xs text-white/35">Made with purpose, built for what’s next. <ArrowUpRight className="ml-1 inline" size={12} /></div>
    </footer>
  )
}