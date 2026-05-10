import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Hammer,
  Home,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
  Upload,
  Wrench,
} from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select } from './components/ui/select';
import { Textarea } from './components/ui/textarea';
import './index.css';

const services = [
  {
    icon: Home,
    title: 'Rénovation résidentielle',
    text: 'Remise à neuf, agrandissement, finition intérieure et coordination des étapes critiques.',
  },
  {
    icon: Building2,
    title: 'Construction neuve',
    text: 'Prise en charge structurée pour projets résidentiels et petits bâtiments en Outaouais.',
  },
  {
    icon: Hammer,
    title: 'Charpente',
    text: 'Ossature, structure, renforcement et menuiserie générale avec exécution propre.',
  },
  {
    icon: Truck,
    title: 'Démolition',
    text: 'Préparation de chantier, démolition sécuritaire et nettoyage pour repartir sur du solide.',
  },
  {
    icon: Wrench,
    title: 'Portes et fenêtres',
    text: 'Remplacement, ajustement, installation et finition pour une enveloppe bien scellée.',
  },
  {
    icon: ClipboardCheck,
    title: 'Gestion de projet',
    text: 'Planification des métiers, suivi des priorités, communication et contrôle du chantier.',
  },
];

const projectTypes = [
  'Rénovation',
  'Construction neuve',
  'Charpente',
  'Démolition',
  'Portes et fenêtres',
  'Fondation',
  'Électricité',
  'Autre',
];

const budgetRanges = [
  'À déterminer',
  'Moins de 10 000 $',
  '10 000 $ à 25 000 $',
  '25 000 $ à 75 000 $',
  '75 000 $ et plus',
];

const projects = [
  {
    src: 'assets/project-shell.jpg',
    label: 'Structure résidentielle',
    detail: 'Construction neuve',
  },
  {
    src: 'assets/project-deck.jpg',
    label: 'Terrasse et extérieur',
    detail: 'Finition et aménagement',
  },
  {
    src: 'assets/project-frame.jpg',
    label: 'Charpente apparente',
    detail: 'Ossature et structure',
  },
  {
    src: 'assets/project-reno.jpg',
    label: 'Agrandissement',
    detail: 'Rénovation majeure',
  },
];

const trustItems = [
  { icon: ShieldCheck, label: 'RBQ 5861-1526-01' },
  { icon: BadgeCheck, label: 'NEQ 1180538275' },
  { icon: MapPin, label: 'Outaouais et environs' },
  { icon: Clock, label: 'Ouvert 7 jours' },
];

function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function buildAgentPayload(form) {
  const data = new FormData(form);

  return {
    customer: {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      email: data.get('email'),
      preferredContact: data.get('preferredContact'),
    },
    project: {
      type: data.get('projectType'),
      city: data.get('city'),
      address: data.get('address'),
      urgency: data.get('urgency'),
      budgetRange: data.get('budgetRange'),
      description: data.get('description'),
      hasPhotos: Boolean(data.get('photos')?.name),
    },
    routing: {
      source: 'construction-c4-website',
      intakeVersion: data.get('intakeVersion'),
      priority: data.get('urgency') === 'Urgent' ? 'high' : 'normal',
    },
  };
}

function C4ConstructionSite() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const payload = buildAgentPayload(event.currentTarget);
    console.info('Construction C4 agent intake payload', payload);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Construction C4 accueil">
            <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <p className="text-lg font-black uppercase leading-tight tracking-wide">Construction C4</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-700">Outaouais</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-700 lg:flex">
            <a href="#services" className="hover:text-red-700">Services</a>
            <a href="#projets" className="hover:text-red-700">Projets</a>
            <a href="#soumission" className="hover:text-red-700">Soumission</a>
            <a href="#contact" className="hover:text-red-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="tel:8197120284"><Phone className="h-4 w-4" /> 819 712-0284</a>
            </Button>
            <Button asChild size="sm">
              <a href="#soumission">Demander une soumission</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="accueil">
        <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-stone-950 text-white">
          <img
            src={asset('assets/hero-framing.jpg')}
            alt="Chantier Construction C4 en structure de bois"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/78 to-stone-950/20" />
          <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_430px]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
              <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="mb-8 h-24 w-24 object-contain" />
              <Badge className="mb-5 bg-red-700 text-white">Entrepreneur général en Outaouais</Badge>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Bâtir des vies, un projet à la fois.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
                Rénovation, construction neuve, charpente, démolition, portes et fenêtres. Une équipe locale pour clarifier votre projet, estimer les besoins et coordonner les bons métiers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#soumission">Commencer une demande <ArrowRight className="h-5 w-5" /></a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#projets">Voir les projets</a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}>
              <Card className="border-white/15 bg-white/95 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Ruler className="h-6 w-6 text-red-700" /> Demande rapide
                  </CardTitle>
                  <CardDescription>Les bonnes informations dès le départ pour préparer une estimation plus utile.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trustItems.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 rounded-md border border-stone-200 bg-stone-50 px-3 py-3 text-sm font-semibold text-stone-800">
                      <Icon className="h-5 w-5 text-red-700" />
                      {label}
                    </div>
                  ))}
                  <Button asChild className="w-full" size="lg">
                    <a href="#soumission">Remplir le formulaire <ArrowRight className="h-5 w-5" /></a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <Badge variant="outline" className="border-red-200 text-red-700">Services</Badge>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Un seul point de contact pour vos travaux.</h2>
              </div>
              <p className="max-w-xl leading-7 text-stone-600">
                Une présentation claire des travaux aide le futur agent à trier les demandes par métier, urgence et portée avant de préparer les prochaines actions.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-md bg-stone-950 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-stone-600">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projets" className="bg-stone-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Badge className="bg-red-700 text-white">Projets</Badge>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Des chantiers concrets, pas juste des promesses.</h2>
              </div>
              <p className="leading-7 text-stone-300">
                La galerie met les vraies réalisations en avant: structure, enveloppe, agrandissement et finition. Les photos pourront aussi devenir une donnée importante dans le triage agent.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => (
                <article key={project.src} className="group overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <img src={asset(project.src)} alt={project.label} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-4">
                    <p className="font-bold">{project.label}</p>
                    <p className="mt-1 text-sm text-stone-300">{project.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="soumission" className="bg-stone-100 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Badge variant="outline" className="border-red-200 text-red-700">Soumission</Badge>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Un formulaire prêt pour le futur agent de devis.</h2>
              <p className="mt-5 leading-8 text-stone-600">
                Chaque champ est nommé pour pouvoir être envoyé plus tard à un API, un CRM ou un agent qui classera la demande, préparera une réponse et créera les tâches de suivi.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  ['1', 'Collecte structurée', 'Coordonnées, ville, type de travaux, budget, urgence et description.'],
                  ['2', 'Triage automatisable', 'Les choix du client deviennent des champs fiables pour prioriser la demande.'],
                  ['3', 'Suivi plus rapide', 'Photos et détails de chantier réduisent les allers-retours avant estimation.'],
                ].map(([step, title, text]) => (
                  <div key={step} className="flex gap-4 rounded-lg border border-stone-200 bg-white p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-700 font-black text-white">{step}</div>
                    <div>
                      <p className="font-bold">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-stone-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Décrivez votre projet</CardTitle>
                <CardDescription>Réponse par téléphone ou courriel selon votre préférence.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <input type="hidden" name="source" value="construction-c4-website" />
                  <input type="hidden" name="intakeVersion" value="agent-intake-v1" />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" name="firstName" autoComplete="given-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" name="lastName" autoComplete="family-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Courriel</Label>
                      <Input id="email" name="email" type="email" autoComplete="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Contact préféré</Label>
                      <Select id="preferredContact" name="preferredContact" defaultValue="Téléphone">
                        <option>Téléphone</option>
                        <option>Courriel</option>
                        <option>Texto</option>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Type de projet</Label>
                      <Select id="projectType" name="projectType" defaultValue="Rénovation">
                        {projectTypes.map((type) => <option key={type}>{type}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" name="city" placeholder="Val-des-Monts, Gatineau..." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse du projet</Label>
                      <Input id="address" name="address" autoComplete="street-address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Échéancier</Label>
                      <Select id="urgency" name="urgency" defaultValue="Dans le prochain mois">
                        <option>Urgent</option>
                        <option>Dans le prochain mois</option>
                        <option>Dans 1 à 3 mois</option>
                        <option>Planification future</option>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget approximatif</Label>
                      <Select id="budgetRange" name="budgetRange" defaultValue="À déterminer">
                        {budgetRanges.map((range) => <option key={range}>{range}</option>)}
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description des travaux</Label>
                    <Textarea id="description" name="description" placeholder="Décrivez les travaux, l’état actuel, les contraintes, les dimensions approximatives et les détails importants." required />
                  </div>

                  <div className="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-4">
                    <Label htmlFor="photos" className="flex items-center gap-2">
                      <Upload className="h-4 w-4 text-red-700" /> Photos du chantier
                    </Label>
                    <Input id="photos" name="photos" type="file" accept="image/*" multiple className="mt-3 bg-white" />
                    <p className="mt-2 text-sm text-stone-500">Les photos aideront l’agent à comprendre le contexte avant de proposer les prochaines étapes.</p>
                  </div>

                  {submitted && (
                    <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                      <CheckCircle2 className="mt-0.5 h-5 w-5" />
                      <p>Demande préparée côté interface. La prochaine étape sera de brancher l’envoi vers l’API ou l’agent.</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer la demande <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-stone-950 py-12 text-stone-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="h-16 w-16 object-contain" />
            <p className="mt-4 max-w-xl text-white">Construction C4</p>
            <p className="mt-2 max-w-xl leading-7">Entrepreneur général spécialisé dans une gamme étendue de travaux dans la région de l’Outaouais.</p>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Contact</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" /> 819 712-0284</p>
            <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" /> 819 665-7399</p>
            <p className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4 text-red-500" /> constructionc4@hotmail.com</p>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Adresse et heures</p>
            <p className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 text-red-500" /> 18 Chemin de l’Aperçu, Val-des-Monts, QC J8N 0C5</p>
            <p className="mt-3 flex items-start gap-2"><CalendarClock className="mt-1 h-4 w-4 text-red-500" /> Lun - ven 8h à 20h<br />Sam - dim 8h à 17h</p>
            <p className="mt-3 text-sm">NEQ 1180538275<br />RBQ 5861-1526-01</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<C4ConstructionSite />);
