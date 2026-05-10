import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Hammer,
  Home,
  Languages,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
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

const copy = {
  fr: {
    langLabel: 'FR',
    altLang: 'EN',
    nav: ['Services', 'Projets', 'Soumission', 'Contact'],
    cta: 'Demander une soumission',
    call: 'Appeler',
    badge: 'Entrepreneur général en Outaouais',
    heroTitle: 'Bâtir des vies, un projet à la fois.',
    heroText: 'Rénovation, construction neuve, charpente, démolition, portes et fenêtres. Une équipe locale pour clarifier votre projet, estimer les besoins et coordonner les bons métiers.',
    startRequest: 'Commencer une demande',
    seeProjects: 'Voir les projets',
    fastRequest: 'Demande rapide',
    fastRequestText: 'Les bonnes informations dès le départ pour préparer une estimation plus utile.',
    fillForm: 'Remplir le formulaire',
    stats: [
      ['7 jours', 'Disponibilité client'],
      ['RBQ', 'Licence active'],
      ['C4', 'Équipe locale'],
    ],
    trust: ['RBQ 5861-1526-01', 'NEQ 1180538275', 'Outaouais et environs', 'Ouvert 7 jours'],
    servicesBadge: 'Services',
    servicesTitle: 'Un seul point de contact pour vos travaux.',
    servicesIntro: 'Une présentation claire des travaux aide le futur agent à trier les demandes par métier, urgence et portée avant de préparer les prochaines actions.',
    services: [
      ['Rénovation résidentielle', 'Remise à neuf, agrandissement, finition intérieure et coordination des étapes critiques.'],
      ['Construction neuve', 'Prise en charge structurée pour projets résidentiels et petits bâtiments en Outaouais.'],
      ['Charpente', 'Ossature, structure, renforcement et menuiserie générale avec exécution propre.'],
      ['Démolition', 'Préparation de chantier, démolition sécuritaire et nettoyage pour repartir sur du solide.'],
      ['Portes et fenêtres', 'Remplacement, ajustement, installation et finition pour une enveloppe bien scellée.'],
      ['Gestion de projet', 'Planification des métiers, suivi des priorités, communication et contrôle du chantier.'],
    ],
    projectsBadge: 'Projets',
    projectsTitle: 'Des chantiers concrets, pas juste des promesses.',
    projectsIntro: 'La galerie met les vraies réalisations en avant: structure, enveloppe, agrandissement et finition. Les photos pourront aussi devenir une donnée importante dans le triage agent.',
    projects: [
      ['Structure résidentielle', 'Construction neuve'],
      ['Terrasse et extérieur', 'Finition et aménagement'],
      ['Charpente apparente', 'Ossature et structure'],
      ['Agrandissement', 'Rénovation majeure'],
    ],
    formBadge: 'Soumission',
    formTitle: 'Un formulaire prêt pour le futur agent de devis.',
    formIntro: 'Chaque champ est nommé pour pouvoir être envoyé plus tard à une API, un CRM ou un agent qui classera la demande, préparera une réponse et créera les tâches de suivi.',
    steps: [
      ['Collecte structurée', 'Coordonnées, ville, type de travaux, budget, urgence et description.'],
      ['Triage automatisable', 'Les choix du client deviennent des champs fiables pour prioriser la demande.'],
      ['Suivi plus rapide', 'Photos et détails de chantier réduisent les allers-retours avant estimation.'],
    ],
    formHeading: 'Décrivez votre projet',
    formSubheading: 'Réponse par téléphone ou courriel selon votre préférence.',
    labels: {
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Téléphone',
      email: 'Courriel',
      preferredContact: 'Contact préféré',
      projectType: 'Type de projet',
      city: 'Ville',
      address: 'Adresse du projet',
      urgency: 'Échéancier',
      budgetRange: 'Budget approximatif',
      description: 'Description des travaux',
      photos: 'Photos du chantier',
    },
    contactOptions: ['Téléphone', 'Courriel', 'Texto'],
    projectTypes: ['Rénovation', 'Construction neuve', 'Charpente', 'Démolition', 'Portes et fenêtres', 'Fondation', 'Électricité', 'Autre'],
    urgencyOptions: ['Urgent', 'Dans le prochain mois', 'Dans 1 à 3 mois', 'Planification future'],
    budgetRanges: ['À déterminer', 'Moins de 10 000 $', '10 000 $ à 25 000 $', '25 000 $ à 75 000 $', '75 000 $ et plus'],
    cityPlaceholder: 'Val-des-Monts, Gatineau...',
    descriptionPlaceholder: 'Décrivez les travaux, l’état actuel, les contraintes, les dimensions approximatives et les détails importants.',
    photosHelp: 'Les photos aideront l’agent à comprendre le contexte avant de proposer les prochaines étapes.',
    submitted: 'Demande préparée côté interface. La prochaine étape sera de brancher l’envoi vers l’API ou l’agent.',
    submit: 'Envoyer la demande',
    footerText: 'Entrepreneur général spécialisé dans une gamme étendue de travaux dans la région de l’Outaouais.',
    addressHeading: 'Adresse et heures',
    hours: 'Lun - ven 8h à 20h',
    weekend: 'Sam - dim 8h à 17h',
  },
  en: {
    langLabel: 'EN',
    altLang: 'FR',
    nav: ['Services', 'Projects', 'Quote', 'Contact'],
    cta: 'Request a quote',
    call: 'Call',
    badge: 'General contractor in Outaouais',
    heroTitle: 'Building lives, one project at a time.',
    heroText: 'Renovations, new construction, framing, demolition, doors and windows. A local team to clarify your project, estimate the needs, and coordinate the right trades.',
    startRequest: 'Start a request',
    seeProjects: 'View projects',
    fastRequest: 'Quick request',
    fastRequestText: 'The right details from the start help prepare a more useful estimate.',
    fillForm: 'Fill out the form',
    stats: [
      ['7 days', 'Client availability'],
      ['RBQ', 'Active licence'],
      ['C4', 'Local team'],
    ],
    trust: ['RBQ 5861-1526-01', 'NEQ 1180538275', 'Outaouais and nearby areas', 'Open 7 days'],
    servicesBadge: 'Services',
    servicesTitle: 'One point of contact for your construction work.',
    servicesIntro: 'A clear project intake helps the future agent sort requests by trade, urgency, and scope before preparing next steps.',
    services: [
      ['Residential renovation', 'Interior updates, additions, finish work, and coordination of key project stages.'],
      ['New construction', 'Structured support for residential projects and small buildings in Outaouais.'],
      ['Framing', 'Structure, framing, reinforcement, and general carpentry with clean execution.'],
      ['Demolition', 'Safe demolition, site preparation, and cleanup so the project can restart on solid ground.'],
      ['Doors and windows', 'Replacement, adjustment, installation, and finishing for a well-sealed envelope.'],
      ['Project management', 'Trade planning, priority tracking, communication, and jobsite coordination.'],
    ],
    projectsBadge: 'Projects',
    projectsTitle: 'Real jobsites, not just promises.',
    projectsIntro: 'The gallery puts real work forward: structure, envelope, additions, and finish work. Photos will also become useful context for agent triage.',
    projects: [
      ['Residential structure', 'New construction'],
      ['Deck and exterior', 'Finish and exterior work'],
      ['Visible framing', 'Framing and structure'],
      ['Addition', 'Major renovation'],
    ],
    formBadge: 'Quote',
    formTitle: 'A form ready for the future quoting agent.',
    formIntro: 'Every field is named so it can later be sent to an API, CRM, or agent that classifies the request, prepares a response, and creates follow-up tasks.',
    steps: [
      ['Structured intake', 'Contact info, city, work type, budget, urgency, and description.'],
      ['Automatable triage', 'Client choices become reliable fields for prioritizing the request.'],
      ['Faster follow-up', 'Photos and jobsite details reduce back-and-forth before estimating.'],
    ],
    formHeading: 'Tell us about your project',
    formSubheading: 'Reply by phone or email based on your preference.',
    labels: {
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone',
      email: 'Email',
      preferredContact: 'Preferred contact',
      projectType: 'Project type',
      city: 'City',
      address: 'Project address',
      urgency: 'Timeline',
      budgetRange: 'Approximate budget',
      description: 'Work description',
      photos: 'Jobsite photos',
    },
    contactOptions: ['Phone', 'Email', 'Text message'],
    projectTypes: ['Renovation', 'New construction', 'Framing', 'Demolition', 'Doors and windows', 'Foundation', 'Electrical', 'Other'],
    urgencyOptions: ['Urgent', 'Within the next month', 'Within 1 to 3 months', 'Future planning'],
    budgetRanges: ['To be determined', 'Under $10,000', '$10,000 to $25,000', '$25,000 to $75,000', '$75,000 and up'],
    cityPlaceholder: 'Val-des-Monts, Gatineau...',
    descriptionPlaceholder: 'Describe the work, current state, constraints, approximate dimensions, and important details.',
    photosHelp: 'Photos will help the agent understand the context before suggesting next steps.',
    submitted: 'Request prepared in the interface. The next step is connecting submission to the API or agent.',
    submit: 'Send request',
    footerText: 'General contractor specializing in a broad range of construction work in the Outaouais region.',
    addressHeading: 'Address and hours',
    hours: 'Mon - Fri 8am to 8pm',
    weekend: 'Sat - Sun 8am to 5pm',
  },
};

const serviceIcons = [Home, Building2, Hammer, Truck, Wrench, ClipboardCheck];
const projectImages = ['assets/project-shell.jpg', 'assets/project-deck.jpg', 'assets/project-frame.jpg', 'assets/project-reno.jpg'];
const trustIcons = [ShieldCheck, BadgeCheck, MapPin, Clock];

function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function buildAgentPayload(form, language) {
  const data = new FormData(form);

  return {
    customer: {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      email: data.get('email'),
      preferredContact: data.get('preferredContact'),
      language,
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
      language,
      priority: data.get('urgency')?.toLowerCase().includes('urgent') ? 'high' : 'normal',
    },
  };
}

function C4ConstructionSite() {
  const [language, setLanguage] = useState('fr');
  const [submitted, setSubmitted] = useState(false);
  const t = copy[language];

  function toggleLanguage() {
    setLanguage((current) => (current === 'fr' ? 'en' : 'fr'));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const payload = buildAgentPayload(event.currentTarget, language);
    console.info('Construction C4 agent intake payload', payload);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#accueil" className="flex min-w-0 items-center gap-3" aria-label="Construction C4">
            <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <p className="text-lg font-black uppercase leading-tight tracking-wide">Construction C4</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-700">Outaouais</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-700 lg:flex">
            <a href="#services" className="hover:text-red-700">{t.nav[0]}</a>
            <a href="#projets" className="hover:text-red-700">{t.nav[1]}</a>
            <a href="#soumission" className="hover:text-red-700">{t.nav[2]}</a>
            <a href="#contact" className="hover:text-red-700">{t.nav[3]}</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="sm" onClick={toggleLanguage} className="px-3">
              <Languages className="h-4 w-4" /> {t.altLang}
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="tel:8197120284"><Phone className="h-4 w-4" /> 819 712-0284</a>
            </Button>
            <Button asChild size="sm" className="hidden min-[480px]:inline-flex">
              <a href="#soumission">{t.cta}</a>
            </Button>
          </div>
        </div>
      </header>

      <main id="accueil">
        <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-stone-950 text-white">
          <img src={asset('assets/hero-framing.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/25" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

          <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_430px]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
              <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="mb-8 h-24 w-24 object-contain drop-shadow-2xl" />
              <Badge className="mb-5 bg-red-700 text-white">{t.badge}</Badge>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">{t.heroText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#soumission">{t.startRequest} <ArrowRight className="h-5 w-5" /></a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#projets">{t.seeProjects}</a>
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {t.stats.map(([number, label]) => (
                  <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-2xl font-black text-white">{number}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-stone-300">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}>
              <Card className="border-white/15 bg-white/95 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Ruler className="h-6 w-6 text-red-700" /> {t.fastRequest}
                  </CardTitle>
                  <CardDescription>{t.fastRequestText}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {t.trust.map((label, index) => {
                    const Icon = trustIcons[index];
                    return (
                      <div key={label} className="flex items-center gap-3 rounded-md border border-stone-200 bg-stone-50 px-3 py-3 text-sm font-semibold text-stone-800">
                        <Icon className="h-5 w-5 text-red-700" />
                        {label}
                      </div>
                    );
                  })}
                  <div className="rounded-lg bg-stone-950 p-4 text-white">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <Sparkles className="h-4 w-4 text-red-400" />
                      Agent-ready intake
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {language === 'fr'
                        ? 'Les réponses sont déjà structurées pour un futur flux API, CRM ou agent.'
                        : 'Answers are already structured for a future API, CRM, or agent flow.'}
                    </p>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href="#soumission">{t.fillForm} <ArrowRight className="h-5 w-5" /></a>
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
                <Badge variant="outline" className="border-red-200 text-red-700">{t.servicesBadge}</Badge>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.servicesTitle}</h2>
              </div>
              <p className="max-w-xl leading-7 text-stone-600">{t.servicesIntro}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map(([title, text], index) => {
                const Icon = serviceIcons[index];
                return (
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
                );
              })}
            </div>
          </div>
        </section>

        <section id="projets" className="bg-stone-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Badge className="bg-red-700 text-white">{t.projectsBadge}</Badge>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.projectsTitle}</h2>
              </div>
              <p className="leading-7 text-stone-300">{t.projectsIntro}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.projects.map(([label, detail], index) => (
                <article key={label} className="group overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <img src={asset(projectImages[index])} alt={label} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-4">
                    <p className="font-bold">{label}</p>
                    <p className="mt-1 text-sm text-stone-300">{detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="soumission" className="bg-stone-100 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Badge variant="outline" className="border-red-200 text-red-700">{t.formBadge}</Badge>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.formTitle}</h2>
              <p className="mt-5 leading-8 text-stone-600">{t.formIntro}</p>
              <div className="mt-8 grid gap-4">
                {t.steps.map(([title, text], index) => (
                  <div key={title} className="flex gap-4 rounded-lg border border-stone-200 bg-white p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-700 font-black text-white">{index + 1}</div>
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
                <CardTitle>{t.formHeading}</CardTitle>
                <CardDescription>{t.formSubheading}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <input type="hidden" name="source" value="construction-c4-website" />
                  <input type="hidden" name="intakeVersion" value="agent-intake-v1" />
                  <input type="hidden" name="language" value={language} />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t.labels.firstName}</Label>
                      <Input id="firstName" name="firstName" autoComplete="given-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t.labels.lastName}</Label>
                      <Input id="lastName" name="lastName" autoComplete="family-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.labels.phone}</Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.labels.email}</Label>
                      <Input id="email" name="email" type="email" autoComplete="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">{t.labels.preferredContact}</Label>
                      <Select id="preferredContact" name="preferredContact" defaultValue={t.contactOptions[0]}>
                        {t.contactOptions.map((option) => <option key={option}>{option}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">{t.labels.projectType}</Label>
                      <Select id="projectType" name="projectType" defaultValue={t.projectTypes[0]}>
                        {t.projectTypes.map((type) => <option key={type}>{type}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{t.labels.city}</Label>
                      <Input id="city" name="city" placeholder={t.cityPlaceholder} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">{t.labels.address}</Label>
                      <Input id="address" name="address" autoComplete="street-address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">{t.labels.urgency}</Label>
                      <Select id="urgency" name="urgency" defaultValue={t.urgencyOptions[1]}>
                        {t.urgencyOptions.map((option) => <option key={option}>{option}</option>)}
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">{t.labels.budgetRange}</Label>
                      <Select id="budgetRange" name="budgetRange" defaultValue={t.budgetRanges[0]}>
                        {t.budgetRanges.map((range) => <option key={range}>{range}</option>)}
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">{t.labels.description}</Label>
                    <Textarea id="description" name="description" placeholder={t.descriptionPlaceholder} required />
                  </div>

                  <div className="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-4">
                    <Label htmlFor="photos" className="flex items-center gap-2">
                      <Upload className="h-4 w-4 text-red-700" /> {t.labels.photos}
                    </Label>
                    <Input id="photos" name="photos" type="file" accept="image/*" multiple className="mt-3 bg-white" />
                    <p className="mt-2 text-sm text-stone-500">{t.photosHelp}</p>
                  </div>

                  {submitted && (
                    <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                      <CheckCircle2 className="mt-0.5 h-5 w-5" />
                      <p>{t.submitted}</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full">
                    {t.submit} <ArrowRight className="h-5 w-5" />
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
            <p className="mt-2 max-w-xl leading-7">{t.footerText}</p>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">Contact</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" /> 819 712-0284</p>
            <p className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" /> 819 665-7399</p>
            <p className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4 text-red-500" /> constructionc4@hotmail.com</p>
          </div>
          <div>
            <p className="mb-3 font-bold text-white">{t.addressHeading}</p>
            <p className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 text-red-500" /> 18 Chemin de l’Aperçu, Val-des-Monts, QC J8N 0C5</p>
            <p className="mt-3 flex items-start gap-2"><CalendarClock className="mt-1 h-4 w-4 text-red-500" /> {t.hours}<br />{t.weekend}</p>
            <p className="mt-3 text-sm">NEQ 1180538275<br />RBQ 5861-1526-01</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<C4ConstructionSite />);
