import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Hammer,
  Home,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select } from './components/ui/select';
import { Textarea } from './components/ui/textarea';
import './index.css';

const business = {
  phone: '819-661-4022',
  phoneHref: 'tel:8196614022',
  email: 'construction4c@gmail.com',
  emailHref: 'mailto:construction4c@gmail.com',
  rbq: 'RBQ 5861-1526-01',
  region: 'Outaouais',
};

const copy = {
  fr: {
    altLang: 'EN',
    badge: 'Entrepreneur général en Outaouais',
    title: 'Bâtissons votre projet ensemble.',
    text: 'Rénovation, construction neuve, charpente et démolition. Construction C4 accompagne les projets résidentiels et commerciaux avec une exécution propre, locale et structurée.',
    request: 'Demander une soumission',
    call: 'Appeler maintenant',
    services: ['Rénovation', 'Construction neuve', 'Charpente', 'Démolition', 'Portes et fenêtres', 'Gestion de projet'],
    proof: [
      ['Licence active', business.rbq],
      ['Service local', 'Val-des-Monts, Gatineau et environs'],
      ['Suivi direct', 'Réponse par téléphone ou courriel'],
    ],
    formTitle: 'Demande de soumission',
    formText: 'Décrivez votre projet et recevez une estimation gratuite.',
    labels: {
      fullName: 'Nom complet',
      phone: 'Téléphone',
      email: 'Courriel',
      projectType: 'Type de projet',
      city: 'Ville',
      description: 'Description du projet',
      photos: 'Photos (optionnel)',
    },
    select: 'Sélectionner...',
    projectTypes: ['Rénovation', 'Construction neuve', 'Charpente', 'Démolition', 'Portes et fenêtres', 'Fondation', 'Électricité', 'Autre'],
    cityPlaceholder: 'Val-des-Monts, Gatineau...',
    descriptionPlaceholder: 'Décrivez les travaux, les dimensions approximatives, le calendrier et les détails importants.',
    photoCta: 'Cliquez pour ajouter des photos',
    submit: 'Envoyer ma demande',
    submitted: 'Votre demande est prête. Construction C4 pourra utiliser ces informations pour préparer le suivi.',
    footerText: 'Construction C4 réalise des travaux résidentiels et commerciaux en Outaouais.',
  },
  en: {
    altLang: 'FR',
    badge: 'General contractor in Outaouais',
    title: 'Build your project with a local team.',
    text: 'Renovation, new construction, framing, and demolition. Construction C4 supports residential and commercial work with clean execution and organized follow-up.',
    request: 'Request a quote',
    call: 'Call now',
    services: ['Renovation', 'New construction', 'Framing', 'Demolition', 'Doors and windows', 'Project management'],
    proof: [
      ['Active licence', business.rbq],
      ['Local service', 'Val-des-Monts, Gatineau, and nearby areas'],
      ['Direct follow-up', 'Reply by phone or email'],
    ],
    formTitle: 'Quote request',
    formText: 'Tell us about your project and receive a free estimate.',
    labels: {
      fullName: 'Full name',
      phone: 'Phone',
      email: 'Email',
      projectType: 'Project type',
      city: 'City',
      description: 'Project description',
      photos: 'Photos (optional)',
    },
    select: 'Select...',
    projectTypes: ['Renovation', 'New construction', 'Framing', 'Demolition', 'Doors and windows', 'Foundation', 'Electrical', 'Other'],
    cityPlaceholder: 'Val-des-Monts, Gatineau...',
    descriptionPlaceholder: 'Describe the work, approximate dimensions, timeline, and important details.',
    photoCta: 'Click to add photos',
    submit: 'Send my request',
    submitted: 'Your request is ready. Construction C4 can use these details to prepare follow-up.',
    footerText: 'Construction C4 handles residential and commercial construction work in Outaouais.',
  },
};

const serviceIcons = [Home, Hammer, ClipboardCheck, ShieldCheck, BadgeCheck, Clock];

function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || '',
    lastName: parts.slice(1).join(' '),
  };
}

function buildAgentPayload(form, language) {
  const data = new FormData(form);
  const { firstName, lastName } = splitName(String(data.get('fullName') || ''));
  const projectType = data.get('projectType');

  return {
    customer: {
      firstName,
      lastName,
      fullName: data.get('fullName'),
      phone: data.get('phone'),
      email: data.get('email'),
      preferredContact: 'phone',
      language,
    },
    project: {
      type: projectType === 'default' ? '' : projectType,
      city: data.get('city'),
      address: '',
      urgency: '',
      budgetRange: '',
      description: data.get('description'),
      hasPhotos: Boolean(data.get('photos')?.name),
    },
    routing: {
      source: 'construction-c4-website',
      intakeVersion: data.get('intakeVersion'),
      language,
      priority: 'normal',
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
    console.info('Construction C4 intake payload', payload);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#accueil" className="flex min-w-0 items-center gap-3" aria-label="Construction C4">
            <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="h-12 w-12 object-contain" />
            <span className="text-base font-black uppercase leading-tight sm:text-lg">Construction C4</span>
          </a>

          <div className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={toggleLanguage} aria-label="Changer de langue">
              <Languages className="h-4 w-4" />
              {t.altLang}
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a href={business.phoneHref}>
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="accueil">
        <section className="relative overflow-hidden bg-stone-950 text-white">
          <img src={asset('assets/hero-framing.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-stone-950/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/25 via-stone-950/20 to-stone-950/90" />

          <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-center gap-8 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-2xl py-8">
              <Badge className="mb-5 bg-red-700 text-white">{t.badge}</Badge>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {t.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-stone-100 sm:text-lg">
                {t.text}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#soumission">
                    {t.request}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={business.phoneHref}>
                    <Phone className="h-5 w-5" />
                    {t.call}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-stone-100">
                <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2">
                  <ShieldCheck className="h-4 w-4 text-red-300" />
                  {business.rbq}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2">
                  <MapPin className="h-4 w-4 text-red-300" />
                  {business.region}
                </span>
              </div>
            </div>

            <Card id="soumission" className="border-0 shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black">{t.formTitle}</CardTitle>
                <CardDescription className="text-base">{t.formText}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="source" value="construction-c4-website" />
                  <input type="hidden" name="intakeVersion" value="clean-intake-v2" />
                  <input type="hidden" name="language" value={language} />

                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.labels.fullName}</Label>
                    <Input id="fullName" name="fullName" autoComplete="name" required />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.labels.phone}</Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.labels.email}</Label>
                      <Input id="email" name="email" type="email" autoComplete="email" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">{t.labels.projectType}</Label>
                      <div className="relative">
                        <Select id="projectType" name="projectType" defaultValue="default" className="appearance-none pr-9" required>
                          <option value="default" disabled>{t.select}</option>
                          {t.projectTypes.map((type) => <option key={type}>{type}</option>)}
                        </Select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{t.labels.city}</Label>
                      <Input id="city" name="city" placeholder={t.cityPlaceholder} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">{t.labels.description}</Label>
                    <Textarea id="description" name="description" placeholder={t.descriptionPlaceholder} required />
                  </div>

                  <div className="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-4">
                    <Label htmlFor="photos" className="flex items-center gap-2 text-sm font-semibold">
                      <Upload className="h-4 w-4 text-red-700" />
                      {t.labels.photos}
                    </Label>
                    <Input id="photos" name="photos" type="file" accept="image/*" multiple className="mt-3 bg-white" />
                    <p className="mt-2 flex items-center gap-2 text-sm text-stone-500">
                      <Camera className="h-4 w-4" />
                      {t.photoCta}
                    </p>
                  </div>

                  {submitted && (
                    <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-900">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <p>{t.submitted}</p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full">
                    {t.submit}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-8 md:grid-cols-3">
            {t.proof.map(([title, text]) => (
              <div key={title} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-700" />
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-stone-50 py-12">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article key={service} className="flex min-h-20 items-center gap-3 rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-stone-950 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-bold">{service}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 py-10 text-stone-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <img src={asset('assets/c4-logo.png')} alt="Construction C4" className="h-14 w-14 object-contain" />
            <p className="mt-4 font-bold text-white">Construction C4</p>
            <p className="mt-2 max-w-xl leading-7">{t.footerText}</p>
          </div>
          <div className="grid gap-3 text-sm">
            <a href={business.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-red-500" />
              {business.phone}
            </a>
            <a href={business.emailHref} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-red-500" />
              {business.email}
            </a>
            <p className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              {business.rbq}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<C4ConstructionSite />);
