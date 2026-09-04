import { Injectable, signal } from '@angular/core';

export type Lang = 'bs' | 'en';

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.home': { bs: 'Početna', en: 'Home' },
  'nav.solutions': { bs: 'Rješenja', en: 'Solutions' },
  'nav.clients': { bs: 'Klijenti', en: 'Clients' },
  'nav.contact': { bs: 'Kontakt', en: 'Contact' },

  // Hero
  'hero.title': { bs: 'Prilagodljiva Desktop i Web rješenja za Vašu Ordinaciju', en: 'Customizable Desktop & Web solutions for Your Clinic' },
  'hero.subtitle': { bs: 'Svaka ordinacija je jedinstvena. Mi prvo slušamo vaše potrebe, a zatim kreiramo prilagođenu desktop aplikaciju i web platformu koje savršeno odgovaraju vašem načinu rada — od zakazivanja termina do upravljanja pacijentima.', en: 'Every clinic is unique. We listen to your needs first, then build a tailored desktop application and web platform that perfectly fits your workflow — from appointment scheduling to patient management.' },
  'hero.cta': { bs: 'Kontaktirajte Nas', en: 'Get In Touch' },
  'hero.demo': { bs: 'Pogledajte Demo', en: 'View Demo' },

  // Features
  'features.title': { bs: 'Sve Što Vam Treba', en: 'Everything You Need' },
  'features.subtitle': { bs: 'Svaki modul se prilagođava vašim potrebama — recite nam šta vam treba, a mi ćemo to izgraditi.', en: 'Every module adapts to your needs — tell us what you require and we will build it.' },

  'features.patients.title': { bs: 'Upravljanje Pacijentima', en: 'Patient Management' },
  'features.patients.desc': { bs: 'Kompletna evidencija pacijenata sa pretragom, filterima, alergijama, historijom tretmana i detaljnim kartonima.', en: 'Complete patient records with search, filters, allergies, treatment history and detailed patient cards.' },

  'features.odontogram.title': { bs: 'Interaktivni Odontogram', en: 'Interactive Odontogram' },
  'features.odontogram.desc': { bs: 'Vizualni prikaz stanja zuba sa podrškom za površine, mostove, protetiku, ekstrakcije i impaktirane zube.', en: 'Visual tooth chart supporting surfaces, bridges, prosthetics, extractions and impacted teeth.' },

  'features.calendar.title': { bs: 'Kalendar Termina', en: 'Appointment Calendar' },
  'features.calendar.desc': { bs: 'Sedmični kalendar sa drag-and-drop terminima, multi-slot zakazivanjem i automatskim email potvrdama.', en: 'Weekly calendar with drag-and-drop appointments, multi-slot booking and automatic email confirmations.' },

  'features.booking.title': { bs: 'Online Zakazivanje', en: 'Online Booking' },
  'features.booking.desc': { bs: 'Web wizard omogućava pacijentima da sami zakazuju termine po kategorijama usluga, sa izborom doktora i vremena.', en: 'Web wizard lets patients self-book appointments by service category, choosing their doctor and preferred time.' },

  'features.sync.title': { bs: 'Cloud Sinhronizacija', en: 'Cloud Sync' },
  'features.sync.desc': { bs: 'Firebase sinhronizacija u realnom vremenu između desktop i web aplikacije sa offline podrškom i automatskim retry-jem.', en: 'Real-time Firebase sync between desktop and web apps with offline support and automatic retry.' },

  'features.email.title': { bs: 'Email Obavještenja', en: 'Email Notifications' },
  'features.email.desc': { bs: 'Automatske potvrde termina, čestitke za rođendane, prazničke poruke i prilagodljivi email šabloni.', en: 'Automatic appointment confirmations, birthday greetings, holiday messages and customizable email templates.' },

  'features.treatments.title': { bs: 'Evidencija Tretmana', en: 'Treatment Records' },
  'features.treatments.desc': { bs: 'Multi-servisni tretmani sa bilješkama, inicijalnom procjenom, historijom po zubu i statusom završenosti.', en: 'Multi-service treatments with notes, initial assessments, per-tooth history and completion status tracking.' },

  'features.security.title': { bs: 'Sigurnost i Logovanje', en: 'Security & Logging' },
  'features.security.desc': { bs: 'Serilog logovanje, rate limiting, zaštita source mapa, CORS politike i sigurnosni headeri za web aplikaciju.', en: 'Serilog logging, rate limiting, source map protection, CORS policies and security headers for the web app.' },

  // Desktop showcase
  'desktop.title': { bs: 'Desktop Aplikacija', en: 'Desktop Application' },
  'desktop.subtitle': { bs: 'Prilagodljiva desktop aplikacija kreirana prema vašim zahtjevima — od interfejsa do funkcionalnosti, sve se prilagođava vašem radnom procesu.', en: 'A customizable desktop application built around your requirements — from the interface to functionality, everything adapts to your workflow.' },
  'desktop.feature1.title': { bs: 'Kartoni Pacijenata', en: 'Patient Cards' },
  'desktop.feature1.desc': { bs: 'Detaljan pregled svakog pacijenta sa tabovima za termine, tretmane, odontogram, napomene i korespondenciju.', en: 'Detailed view of each patient with tabs for appointments, treatments, odontogram, notes and correspondence.' },
  'desktop.feature2.title': { bs: 'Upravljanje Doktorima', en: 'Doctor Management' },
  'desktop.feature2.desc': { bs: 'Raspored rada doktora, boje kalendara, aktivni/neaktivni status i automatsko dodjeljivanje tretmana.', en: 'Doctor work schedules, calendar colors, active/inactive status and automatic treatment assignment.' },
  'desktop.feature3.title': { bs: 'Administracija Usluga', en: 'Service Administration' },
  'desktop.feature3.desc': { bs: 'Kategorije usluga sa bojama, cijenama, trajanjem i podrškom za specijalne odontogram oblike.', en: 'Service categories with colors, pricing, duration and support for special odontogram shapes.' },
  'desktop.feature4.title': { bs: 'Offline Mod', en: 'Offline Mode' },
  'desktop.feature4.desc': { bs: 'Aplikacija radi i bez interneta — podaci se sinhronizuju automatski kada se veza uspostavi.', en: 'Application works without internet — data syncs automatically when connection is re-established.' },

  // Web showcase
  'web.title': { bs: 'Web Aplikacija', en: 'Web Application' },
  'web.subtitle': { bs: 'Web aplikacija dizajnirana po vašoj mjeri — Vi definišete funkcionalnosti, a mi ih implementiramo sa modernim tehnologijama.', en: 'A web application designed to your specification — you define the features and we implement them with modern technologies.' },
  'web.feature1.title': { bs: 'Wizard za Zakazivanje', en: 'Booking Wizard' },
  'web.feature1.desc': { bs: 'Intuitivni korak-po-korak proces: odaberite kategoriju, uslugu, doktora, datum i vrijeme — sve u par klikova.', en: 'Intuitive step-by-step process: choose category, service, doctor, date and time — all in a few clicks.' },
  'web.feature2.title': { bs: 'Stranica Usluga', en: 'Services Page' },
  'web.feature2.desc': { bs: 'Pregled svih usluga po kategorijama sa detaljnim opisima, cijenama i mogućnošću direktnog zakazivanja.', en: 'Browse all services by category with detailed descriptions, pricing and direct booking option.' },
  'web.feature3.title': { bs: 'O Nama & Tim', en: 'About & Team' },
  'web.feature3.desc': { bs: 'Flip kartice za svaki član tima sa biografijama, specijalizacijama i profesionalnim fotografijama.', en: 'Flip cards for each team member with bios, specializations and professional photos.' },
  'web.feature4.title': { bs: 'Kontakt Forma', en: 'Contact Form' },
  'web.feature4.desc': { bs: 'Direktna komunikacija sa ordinacijom putem kontakt forme sa email notifikacijama i validacijom.', en: 'Direct clinic communication through contact form with email notifications and validation.' },

  // Stats
  'stats.title': { bs: 'Dentify u brojkama', en: 'Dentify in Numbers' },
  'stats.years': { bs: 'Godina Razvoja', en: 'Years of Development' },
  'stats.patients': { bs: 'Pacijenata u Sistemu', en: 'Patients in System' },
  'stats.appointments': { bs: 'Zakazanih Termina', en: 'Appointments Booked' },
  'stats.services': { bs: 'Stomatoloških Usluga', en: 'Dental Services' },
  'stats.uptime': { bs: 'Uptime Dostupnost', en: 'Uptime Availability' },
  'stats.sync': { bs: 'Cloud Sinhronizacija', en: 'Cloud Sync' },

  // Contact
  'contact.title': { bs: 'Zainteresirani?', en: 'Interested?' },
  'contact.subtitle': { bs: 'Opišite nam svoju viziju — zakazat ćemo besplatnu konsultaciju i pripremiti prijedlog prilagođen vašim potrebama.', en: 'Describe your vision — we will schedule a free consultation and prepare a proposal tailored to your needs.' },
  'contact.name': { bs: 'Ime i Prezime', en: 'Full Name' },
  'contact.email': { bs: 'Email Adresa', en: 'Email Address' },
  'contact.clinic': { bs: 'Naziv Ordinacije', en: 'Clinic Name' },
  'contact.message': { bs: 'Poruka', en: 'Message' },
  'contact.send': { bs: 'Pošaljite Upit', en: 'Send Inquiry' },
  'contact.or': { bs: 'ili nas kontaktirajte direktno', en: 'or contact us directly' },

  // Clients
  'clients.title': { bs: 'Naši Klijenti', en: 'Our Clients' },
  'clients.subtitle': { bs: 'Ordinacije koje koriste Dentify sistem za upravljanje svojom ordinacijom.', en: 'Clinics that use the Dentify system to manage their operations.' },
  'clients.cta': { bs: 'Želite li da vaša ordinacija bude sljedeća?', en: 'Want your clinic to be next?' },
  'clients.ctaBtn': { bs: 'Kontaktirajte Nas', en: 'Get In Touch' },

  // Footer
  'footer.desc': { bs: 'Prilagodljiva softverska rješenja za stomatološke ordinacije — slušamo vaše potrebe i kreiramo desktop i web aplikacije po mjeri.', en: 'Customizable software solutions for dental clinics — we listen to your needs and build tailored desktop and web applications.' },
  'footer.links': { bs: 'Brzi Linkovi', en: 'Quick Links' },
  'footer.tech': { bs: 'Tehnologije', en: 'Technologies' },
  'footer.contact': { bs: 'Kontakt', en: 'Contact' },
  'footer.rights': { bs: 'Sva prava zadržana.', en: 'All rights reserved.' },
};

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private _lang = signal<Lang>('bs');

  lang = this._lang.asReadonly();

  t(key: string): string {
    return translations[key]?.[this._lang()] ?? key;
  }

  toggleLang(): void {
    this._lang.update(l => l === 'bs' ? 'en' : 'bs');
  }

  setLang(lang: Lang): void {
    this._lang.set(lang);
  }
}
