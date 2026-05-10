import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Hammer,
  Home,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Camera,
  Building2,
  ClipboardCheck,
  Truck,
  Wrench,
} from 'lucide-react';
import './index.css';

const services = [
  { icon: Home, title: 'Rénovation résidentielle', text: 'Modernisation intérieure, agrandissements, finition et remise à neuf.' },
  { icon: Building2, title: 'Construction neuve', text: 'Coordination complète pour projets résidentiels et petits bâtiments.' },
  { icon: Hammer, title: 'Charpente', text: 'Structure, ossature, renforcement et travaux de menuiserie générale.' },
  { icon: Truck, title: 'Démolition', text: 'Démolition sécuritaire, préparation de chantier et nettoyage.' },
  { icon: Wrench, title: 'Portes et fenêtres', text: 'Installation, remplacement et ajustement avec finition propre.' },
  { icon: ClipboardCheck, title: 'Gestion de projet', text: 'Planification, coordination des métiers et suivi de chantier.' },
];

const projectTypes = ['Rénovation', 'Construction neuve', 'Charpente', 'Démolition', 'Portes / fenêtres', 'Fondation', 'Électricité', 'Autre'];

function C4ConstructionSite() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 font-black text-stone-950 shadow-lg shadow-amber-500/20">C4</div>
            <div>
              <p className="text-lg font-bold tracking-tight">Construction C4</p>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">Outaouais</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-stone-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projets" className="hover:text-white">Projets</a>
            <a href="#soumission" className="hover:text-white">Soumission</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#soumission" className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-bold text-stone-950 transition hover:bg-amber-400">Demander une soumission</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
                <ShieldCheck className="h-4 w-4" /> RBQ 5861-1526-01 • NEQ 1180538275
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Bâtir des vies, <span className="text-amber-400">un projet à la fois.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Entrepreneur général dans la région de l’Outaouais. Rénovation, construction neuve, charpente, démolition, portes et fenêtres, avec une approche claire, humaine et bien coordonnée.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#soumission" className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-bold text-stone-950 transition hover:bg-amber-400">
                  Obtenir une soumission gratuite <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a href="tel:8197120284" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold text-white hover:bg-white/10">
                  <Phone className="h-5 w-5" /> Appeler maintenant
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-stone-900 p-6">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">Demande rapide</p>
                  <h2 className="text-2xl font-bold">Décrivez votre projet en 2 minutes.</h2>
                  <p className="mt-2 text-stone-300">Ajoutez des photos, votre ville et le type de travaux. Nous vous orientons vers la bonne ressource.</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <span key={type} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-stone-200">{type}</span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-amber-500 p-4 text-stone-950">
                    <div className="flex items-center gap-3">
                      <Camera className="h-6 w-6" />
                      <p className="font-bold">Photos recommandées pour accélérer la soumission.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-stone-100 py-20 text-stone-950">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <p className="font-bold uppercase tracking-[0.25em] text-amber-600">Services</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Un seul point de contact pour vos travaux.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-amber-400"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soumission" className="bg-stone-950 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-amber-400">Soumission</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Parlez-nous de votre projet.</h2>
              <p className="mt-5 leading-8 text-stone-300">Ce formulaire est pensé pour être connecté à Outlook et à un futur agent de triage qui pourra classer la demande par métier et l’acheminer au bon entrepreneur.</p>
              <div className="mt-8 space-y-4 text-stone-300">
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-400" /> Région de l’Outaouais et environs</p>
                <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-amber-400" /> Lun - ven 8h à 20h • Sam - dim 8h à 17h</p>
              </div>
            </div>
            <form className="rounded-[2rem] bg-white p-6 text-stone-950 shadow-2xl">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="Prénom" />
                <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="Nom" />
                <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="Téléphone" />
                <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="Courriel" />
                <select className="rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500">
                  <option>Type de projet</option>
                  {projectTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
                <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="Ville" />
                <textarea className="min-h-36 rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-amber-500 md:col-span-2" placeholder="Décrivez les travaux, l’urgence, le budget approximatif et les détails importants." />
              </div>
              <button type="button" className="mt-5 w-full rounded-full bg-amber-500 px-7 py-4 font-black text-stone-950 transition hover:bg-amber-400">Envoyer la demande</button>
              <p className="mt-3 text-center text-sm text-stone-500">Prototype UI - à connecter à votre formulaire réel.</p>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-stone-900 py-10 text-stone-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-black text-stone-950">C4</div>
              <p className="text-xl font-black text-white">Construction C4</p>
            </div>
            <p className="mt-4 max-w-xl">Entrepreneur général spécialisé dans une gamme étendue de travaux dans la région de l’Outaouais.</p>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Contact</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-400" /> 819 712-0284</p>
            <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-amber-400" /> 819 665-7399</p>
            <p className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4 text-amber-400" /> constructionc4@hotmail.com</p>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Adresse</p>
            <p>58 Ch. Lavoie</p>
            <p>Val-des-Monts, QC J8N 7N2</p>
            <p className="mt-4 text-sm">RBQ 5861-1526-01<br />NEQ 1180538275</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<C4ConstructionSite />);
