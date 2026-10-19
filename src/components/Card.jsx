import { ArrowUpRight } from 'lucide-react'

export function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d9ff00]/60 hover:bg-white/[0.06] sm:p-7">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d9ff00] text-[#11120f]"><Icon size={23} /></span>
        <span className="text-sm font-semibold text-white/30">{service.number}</span>
      </div>
      <h3 className="mt-8 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/55">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{service.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{tag}</span>)}</div>
    </article>
  )
}

export function PortfolioCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
      <div className="relative aspect-[5/4] overflow-hidden bg-white/5">
        <img src={project.image} alt={`Dokumentasi proyek ${project.title}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-[#11120f]/80 px-3 py-1.5 text-xs backdrop-blur">{project.category}</span>
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[#d9ff00] text-[#11120f]"><ArrowUpRight size={19} /></span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3"><h3 className="text-xl font-bold">{project.title}</h3><span className="text-xs text-white/40">{project.year}</span></div>
        <p className="mt-2 text-sm leading-6 text-white/55">{project.description}</p>
      </div>
    </article>
  )
}

export function TeamCard({ person }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
      <div className={`grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br ${person.color} text-5xl font-black text-[#11120f]`}>{person.initials}</div>
      <h3 className="mt-5 text-lg font-bold">{person.name}</h3>
      <p className="mt-1 text-sm font-medium text-[#d9ff00]">{person.role}</p>
      <p className="mt-3 text-sm leading-6 text-white/55">{person.bio}</p>
    </article>
  )
}