import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ServiceCard } from '../components/Card'
import { services } from '../data/services'

const process = [
  ['01', 'Discover', 'Memahami tujuan, tantangan, audiens, dan kebutuhan proyek.'],
  ['02', 'Define', 'Menyusun prioritas, ruang lingkup, dan arah solusi bersama.'],
  ['03', 'Create', 'Mendesain dan mengembangkan solusi melalui proses iteratif.'],
  ['04', 'Deliver', 'Meluncurkan, mengevaluasi, dan menyiapkan langkah berikutnya.'],
]

export default function Services() {
  return (
    <>
      <section className="page-grid border-b border-white/5"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d9ff00]">Layanan kami</p><h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Satu partner untuk <span className="text-[#d9ff00]">langkah digital</span> berikutnya.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">Kami menyatukan strategi, desain, dan pengembangan supaya ide tidak berhenti di rencana.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><SectionHeading eyebrow="Apa yang kami lakukan" title="Solusi yang disusun sesuai kebutuhan." description="Pilih layanan yang paling sesuai atau gabungkan beberapa layanan untuk hasil yang lebih menyeluruh."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(service => <ServiceCard key={service.number} service={service}/>)}</div></section>
      <section className="border-y border-white/5 bg-white/[0.02]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><SectionHeading eyebrow="Proses kerja" title="Jelas dari awal sampai akhir." description="Kolaborasi yang terarah membantu semua pihak memahami apa yang sedang dikerjakan dan alasannya."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{process.map(([number,title,description]) => <article key={number} className="rounded-3xl border border-white/10 p-6"><span className="text-sm font-bold text-[#d9ff00]">{number} / 04</span><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{description}</p></article>)}</div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div className="grid gap-10 md:grid-cols-[.9fr_1.1fr]"><SectionHeading eyebrow="Kenapa NEXORA?" title="Kerja yang baik terasa di hasilnya." description="Bukan sekadar membuat sesuatu terlihat bagus. Kami ingin solusi yang mudah dipakai, masuk akal, dan memberi nilai."/><div className="space-y-4">{['Kolaborasi transparan sejak awal','Desain yang berpusat pada pengguna','Teknologi modern dan mudah dikembangkan','Fokus pada tujuan dan dampak bisnis'].map(item=><div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 p-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#d9ff00] text-[#11120f]"><Check size={17}/></span><span className="text-sm font-medium sm:text-base">{item}</span></div>)}</div></div></section>
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:flex-row sm:items-center sm:p-10"><div><h2 className="text-2xl font-black sm:text-3xl">Belum yakin mulai dari mana?</h2><p className="mt-3 text-sm leading-6 text-white/55">Ceritakan kebutuhanmu, kita cari pendekatan yang tepat bersama.</p></div><Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#d9ff00] px-5 py-3 text-sm font-bold text-[#11120f]">Konsultasi proyek <ArrowUpRight size={16}/></Link></div></section>
    </>
  )
}