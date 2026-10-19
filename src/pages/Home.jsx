import { ArrowDownRight, ArrowRight, ArrowUpRight, CheckCircle2, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { portfolio } from '../data/portfolio'
import { ServiceCard, PortfolioCard } from '../components/Card'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  return (
    <>
      <section className="page-grid relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#d9ff00]/10 blur-[100px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.1fr_.9fr] lg:px-12 lg:pb-32 lg:pt-28">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/70 sm:text-sm"><span className="h-2 w-2 rounded-full bg-[#d9ff00]" /> DIGITAL STUDIO • BANDUNG, INDONESIA</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">Ide hebat, <span className="text-[#d9ff00]">dampak</span> nyata.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">Kami menggabungkan teknologi, desain, dan strategi untuk membantu bisnis melangkah lebih jauh di dunia digital.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9ff00] px-6 py-4 text-sm font-bold text-[#11120f] transition hover:bg-white">Mulai Proyek <ArrowUpRight size={18} /></Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold transition hover:border-[#d9ff00] hover:text-[#d9ff00]">Lihat Portofolio <ArrowRight size={17} /></Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-7">
              {[['25+', 'Proyek selesai'], ['18', 'Partner bertumbuh'], ['4.9/5', 'Kepuasan klien']].map(([number, label]) => <div key={label}><p className="text-2xl font-black sm:text-3xl">{number}</p><p className="mt-1 text-xs text-white/45 sm:text-sm">{label}</p></div>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-[#d9ff00]/15 rotate-3" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#20221b] p-5 sm:p-7">
              <div className="flex items-center justify-between"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#d9ff00]" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /></div><span className="text-[10px] uppercase tracking-[0.2em] text-white/40">NEXORA / 001</span></div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="col-span-2 flex min-h-48 flex-col justify-between rounded-2xl bg-[#d9ff00] p-5 text-[#11120f] sm:min-h-56 sm:p-7"><span className="text-xs font-bold uppercase tracking-widest">Think forward.</span><span className="text-4xl font-black leading-none tracking-tight sm:text-5xl">BUILD<br />WHAT'S<br />NEXT<span className="text-white">.</span></span><div className="flex justify-end"><MoveUpRight size={28} /></div></div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-xs text-white/45">Our approach</p><p className="mt-3 text-lg font-bold">Design first.</p><p className="text-lg font-bold text-[#d9ff00]">Impact always.</p></div>
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"><span className="text-xs text-white/45">Built for people</span><span className="flex items-center gap-2 text-sm font-semibold"><CheckCircle2 size={16} className="text-[#d9ff00]" /> Purposeful digital</span></div>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-white/40"><span>Strategy · Design · Technology</span><ArrowDownRight size={16} /></div>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#171813] px-4 py-3 shadow-xl sm:-left-8 sm:px-5"><p className="text-xs text-white/45">Built with intention</p><p className="mt-1 text-sm font-bold">Small details. Big difference.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end"><SectionHeading eyebrow="Siapa kami" title="Kami bikin teknologi terasa lebih manusiawi." /><div><p className="max-w-2xl leading-7 text-white/55">NEXORA adalah studio digital independen yang membantu bisnis menerjemahkan ide menjadi pengalaman digital yang berguna, mudah digunakan, dan siap berkembang.</p><Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d9ff00] hover:text-white">Kenali kami lebih dekat <ArrowUpRight size={16} /></Link></div></div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Yang kami kerjakan" title="Layanan untuk bergerak maju." description="Dari ide awal hingga peluncuran, kami membantu setiap bagian penting dari perjalanan digital." /><Link to="/services" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#d9ff00]">Semua layanan <ArrowUpRight size={16} /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(service => <ServiceCard key={service.number} service={service} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Pilihan karya" title="Dibuat dengan tujuan." description="Beberapa contoh proyek yang lahir dari kolaborasi dan rasa ingin tahu." /><Link to="/portfolio" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#d9ff00]">Jelajahi portofolio <ArrowUpRight size={16} /></Link></div>
        <div className="grid gap-5 md:grid-cols-3">{portfolio.map(project => <PortfolioCard key={project.number} project={project} />)}</div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#d9ff00] p-7 text-[#11120f] sm:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[0.22em]">Punya ide?</p><h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">Mari bikin sesuatu yang berarti.</h2></div><Link to="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#11120f] px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#11120f]">Diskusikan proyek <ArrowUpRight size={18} /></Link></div>
        </div>
      </section>
    </>
  )
}