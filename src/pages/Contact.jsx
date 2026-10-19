import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    setErrors(current => ({ ...current, [name]: '' }))
    setSuccess(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Nama wajib diisi.'
    if (!form.email.trim()) nextErrors.email = 'Email wajib diisi.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Format email belum valid.'
    if (!form.message.trim()) nextErrors.message = 'Pesan wajib diisi.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true)
      setForm(initialForm)
    }
  }

  const inputClass = 'mt-2 w-full rounded-2xl border border-white/15 bg-[#11120f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#d9ff00]'

  return (
    <>
      <section className="page-grid border-b border-white/5"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d9ff00]">Kontak</p><h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Punya ide? <span className="text-[#d9ff00]">Mari ngobrol.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">Ceritakan tantangan atau rencana yang sedang kamu siapkan. Kami akan senang membantu menemukan langkah awalnya.</p></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
        <div><SectionHeading eyebrow="Informasi" title="Temukan kami." description="Punya pertanyaan umum atau ingin menjajaki kolaborasi? Hubungi kami melalui informasi berikut."/><div className="mt-8 space-y-4">
          <div className="flex gap-4 rounded-2xl border border-white/10 p-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d9ff00] text-[#11120f]"><Mail size={19}/></span><div><p className="text-sm text-white/45">Email</p><a href="mailto:hello@nexora.id" className="mt-1 block font-semibold hover:text-[#d9ff00]">hello@nexora.id</a></div></div>
          <div className="flex gap-4 rounded-2xl border border-white/10 p-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d9ff00] text-[#11120f]"><Phone size={19}/></span><div><p className="text-sm text-white/45">Telepon</p><a href="tel:+62225550123" className="mt-1 block font-semibold hover:text-[#d9ff00]">+62 22 5550 123</a></div></div>
          <div className="flex gap-4 rounded-2xl border border-white/10 p-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d9ff00] text-[#11120f]"><MapPin size={19}/></span><div><p className="text-sm text-white/45">Alamat</p><p className="mt-1 font-semibold">Bandung, Jawa Barat, Indonesia</p><p className="mt-1 text-xs text-white/40">Alamat contoh untuk perusahaan fiktif.</p></div></div>
        </div><div className="mt-7"><p className="text-sm font-semibold">Ikuti perjalanan kami</p><div className="mt-3 flex gap-3"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/65 hover:border-[#d9ff00] hover:text-[#d9ff00]"><Instagram size={16}/> Instagram</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/65 hover:border-[#d9ff00] hover:text-[#d9ff00]"><Linkedin size={16}/> LinkedIn</a></div></div></div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-8">
          <h2 className="text-2xl font-black">Kirim pesan</h2><p className="mt-2 text-sm text-white/50">Isi formulir di bawah ini. Semua kolom wajib diisi.</p>
          {success && <div role="status" className="mt-5 flex gap-3 rounded-2xl border border-[#d9ff00]/30 bg-[#d9ff00]/10 p-4 text-sm text-[#d9ff00]"><CheckCircle2 size={19} className="shrink-0"/><p>Terima kasih! Validasi berhasil. Form demo ini belum mengirim data ke server.</p></div>}
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <div><label htmlFor="name" className="text-sm font-semibold">Nama lengkap</label><input id="name" name="name" value={form.name} onChange={updateField} className={inputClass} placeholder="Nama kamu" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined}/>{errors.name && <p id="name-error" className="mt-2 text-xs text-rose-400">{errors.name}</p>}</div>
            <div><label htmlFor="email" className="text-sm font-semibold">Alamat email</label><input id="email" name="email" type="email" value={form.email} onChange={updateField} className={inputClass} placeholder="nama@email.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined}/>{errors.email && <p id="email-error" className="mt-2 text-xs text-rose-400">{errors.email}</p>}</div>
            <div><label htmlFor="message" className="text-sm font-semibold">Pesan</label><textarea id="message" name="message" rows="5" value={form.message} onChange={updateField} className={`${inputClass} resize-y`} placeholder="Ceritakan sedikit tentang kebutuhanmu..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined}/>{errors.message && <p id="message-error" className="mt-2 text-xs text-rose-400">{errors.message}</p>}</div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d9ff00] px-6 py-4 text-sm font-bold text-[#11120f] transition hover:bg-white">Kirim pesan <ArrowUpRight size={17}/></button>
            <p className="text-xs leading-5 text-white/35">Catatan: formulir ini mendemonstrasikan validasi sisi klien. Untuk pengiriman sungguhan, hubungkan ke backend atau layanan formulir.</p>
          </form>
        </div>
      </section>
    </>
  )
}