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

  'features.patients.title': { bs: 'Upravljanje pacijentima', en: 'Patient Management' },
  'features.patients.desc': { bs: 'Kompletna evidencija pacijenata sa pretragom, filterima, alergijama, historijom tretmana i detaljnim kartonima.', en: 'Complete patient records with search, filters, allergies, treatment history and detailed patient cards.' },

  'features.odontogram.title': { bs: 'Interaktivni odontogram', en: 'Interactive Odontogram' },
  'features.odontogram.desc': { bs: 'Vizualni prikaz stanja zuba sa podrškom za površine, mostove, protetiku, ekstrakcije i impaktirane zube.', en: 'Visual tooth chart supporting surfaces, bridges, prosthetics, extractions and impacted teeth.' },

  'features.calendar.title': { bs: 'Kalendar termina', en: 'Appointment Calendar' },
  'features.calendar.desc': { bs: 'Sedmični kalendar sa drag-and-drop terminima, multi-slot zakazivanjem i automatskim email potvrdama.', en: 'Weekly calendar with drag-and-drop appointments, multi-slot booking and automatic email confirmations.' },

  'features.booking.title': { bs: 'Online zakazivanje', en: 'Online Booking' },
  'features.booking.desc': { bs: 'Web wizard omogućava pacijentima da sami zakazuju termine po kategorijama usluga, sa izborom doktora i vremena.', en: 'Web wizard lets patients self-book appointments by service category, choosing their doctor and preferred time.' },

  'features.sync.title': { bs: 'Cloud sinhronizacija', en: 'Cloud Sync' },
  'features.sync.desc': { bs: 'Sinhronizacija u realnom vremenu između desktop i web aplikacije sa offline podrškom i automatskim retry-jem.', en: 'Real-time sync between desktop and web apps with offline support and automatic retry.' },

  'features.email.title': { bs: 'Email obavještenja', en: 'Email Notifications' },
  'features.email.desc': { bs: 'Automatske potvrde termina, čestitke za rođendane, prazničke poruke i prilagodljivi email šabloni.', en: 'Automatic appointment confirmations, birthday greetings, holiday messages and customizable email templates.' },

  'features.treatments.title': { bs: 'Evidencija tretmana', en: 'Treatment Records' },
  'features.treatments.desc': { bs: 'Multi-servisni tretmani sa bilješkama, inicijalnom procjenom, historijom po zubu i statusom završenosti.', en: 'Multi-service treatments with notes, initial assessments, per-tooth history and completion status tracking.' },

  'features.security.title': { bs: 'Sigurnost i logovanje', en: 'Security & Logging' },
  'features.security.desc': { bs: 'Enkripcija podataka, rate limiting, CORS politike i sigurnosni headeri za maksimalnu zaštitu korisničkih informacija.', en: 'Data encryption, rate limiting, CORS policies and security headers for maximum protection of user information.' },

  // Desktop showcase
  'desktop.title': { bs: 'Desktop aplikacija', en: 'Desktop Application' },
  'desktop.subtitle': { bs: 'Prilagodljiva desktop aplikacija kreirana prema vašim zahtjevima — od interfejsa do funkcionalnosti, sve se prilagođava vašem radnom procesu.', en: 'A customizable desktop application built around your requirements — from the interface to functionality, everything adapts to your workflow.' },
  'desktop.feature1.title': { bs: 'Kartoni pacijenata', en: 'Patient Cards' },
  'desktop.feature1.desc': { bs: 'Detaljan pregled svakog pacijenta sa tabovima za termine, tretmane, odontogram, napomene i korespondenciju.', en: 'Detailed view of each patient with tabs for appointments, treatments, odontogram, notes and correspondence.' },
  'desktop.feature2.title': { bs: 'Upravljanje doktorima', en: 'Doctor Management' },
  'desktop.feature2.desc': { bs: 'Raspored rada doktora, boje kalendara, aktivni/neaktivni status i automatsko dodjeljivanje tretmana.', en: 'Doctor work schedules, calendar colors, active/inactive status and automatic treatment assignment.' },
  'desktop.feature3.title': { bs: 'Administracija usluga', en: 'Service Administration' },
  'desktop.feature3.desc': { bs: 'Kategorije usluga sa bojama, cijenama, trajanjem i podrškom za specijalne odontogram oblike.', en: 'Service categories with colors, pricing, duration and support for special odontogram shapes.' },
  'desktop.feature4.title': { bs: 'Offline mod', en: 'Offline Mode' },
  'desktop.feature4.desc': { bs: 'Aplikacija radi i bez interneta — podaci se sinhronizuju automatski kada se veza uspostavi.', en: 'Application works without internet — data syncs automatically when connection is re-established.' },

  // Web showcase
  'web.title': { bs: 'Web aplikacija', en: 'Web Application' },
  'web.subtitle': { bs: 'Web aplikacija dizajnirana po vašoj mjeri — Vi definišete funkcionalnosti, a mi ih implementiramo sa modernim tehnologijama.', en: 'A web application designed to your specification — you define the features and we implement them with modern technologies.' },
  'web.feature1.title': { bs: 'Wizard za zakazivanje', en: 'Booking Wizard' },
  'web.feature1.desc': { bs: 'Intuitivni korak-po-korak proces: odaberite kategoriju, uslugu, doktora, datum i vrijeme — sve u par klikova.', en: 'Intuitive step-by-step process: choose category, service, doctor, date and time — all in a few clicks.' },
  'web.feature2.title': { bs: 'Stranica usluga', en: 'Services Page' },
  'web.feature2.desc': { bs: 'Pregled svih usluga po kategorijama sa detaljnim opisima, cijenama i mogućnošću direktnog zakazivanja.', en: 'Browse all services by category with detailed descriptions, pricing and direct booking option.' },
  'web.feature3.title': { bs: 'Responzivni dizajn', en: 'Responsive Design' },
  'web.feature3.desc': { bs: 'Optimiziran prikaz za sve uređaje — desktop, tablet i mobilni telefon sa konzistentnim korisničkim iskustvom.', en: 'Optimized layout for all devices — desktop, tablet and mobile with a consistent user experience.' },
  'web.feature4.title': { bs: 'Kontakt forma', en: 'Contact Form' },
  'web.feature4.desc': { bs: 'Direktna komunikacija sa ordinacijom putem kontakt forme sa email notifikacijama i validacijom.', en: 'Direct clinic communication through contact form with email notifications and validation.' },

  // Stats
  'stats.title': { bs: 'u brojkama', en: 'in Numbers' },
  'stats.patients': { bs: 'Pacijenata u sistemu', en: 'Patients in System' },
  'stats.appointments': { bs: 'Zakazanih termina', en: 'Appointments Booked' },
  'stats.services': { bs: 'Stomatoloških usluga', en: 'Dental Services' },
  'stats.uptime': { bs: 'Uptime dostupnost', en: 'Uptime Availability' },
  'stats.sync': { bs: 'Cloud sinhronizacija', en: 'Cloud Sync' },

  // Contact
  'contact.title': { bs: 'Zainteresirani?', en: 'Interested?' },
  'contact.subtitle': { bs: 'Opišite nam svoju viziju — zakazat ćemo besplatnu konsultaciju i pripremiti prijedlog prilagođen vašim potrebama.', en: 'Describe your vision — we will schedule a free consultation and prepare a proposal tailored to your needs.' },
  'contact.firstName': { bs: 'Ime', en: 'First Name' },
  'contact.lastName': { bs: 'Prezime', en: 'Last Name' },
  'contact.phone': { bs: 'Broj telefona', en: 'Phone Number' },
  'contact.email': { bs: 'Email adresa', en: 'Email Address' },
  'contact.message': { bs: 'Poruka (opciono)', en: 'Message (optional)' },
  'contact.send': { bs: 'Pošaljite upit', en: 'Send Inquiry' },
  'contact.required': { bs: 'Ovo polje je obavezno', en: 'This field is required' },
  'contact.phoneError': { bs: 'Unesite ispravan broj telefona', en: 'Enter a valid phone number' },
  'contact.emailError': { bs: 'Unesite ispravnu email adresu', en: 'Enter a valid email address' },
  'contact.gdpr1': { bs: 'Slažem se sa', en: 'I agree to the' },
  'contact.gdpr2': { bs: 'politikom privatnosti', en: 'privacy policy' },
  'contact.gdpr3': { bs: 'i zaštitom podataka', en: 'and data protection' },
  'contact.gdprError': { bs: 'Morate prihvatiti politiku privatnosti da biste nastavili', en: 'You must accept the privacy policy to continue' },

  // Privacy modal
  'privacy.title': { bs: 'Zaštita podataka', en: 'Data Protection' },
  'privacy.p1': { bs: 'Osobni podaci navedeni na prezentaciji koristit će se strogo u skladu s odredbama zakona o zaštiti podataka EU-a. Osobni podaci se prikupljaju dobrovoljno te se koriste za konzultacije, oglašavanje i marketing samo uz izričit pristanak. Napominjemo da ova web stranica ne pohranjuje vaše podatke u digitalnom obliku na web poslužiteljima.', en: 'Personal data provided will be used strictly in accordance with EU data protection regulations. Personal data is collected voluntarily and used for consultations, advertising and marketing only with explicit consent. Please note that this website does not store your data in digital form on web servers.' },
  'privacy.gdprTitle': { bs: 'GDPR – Uredba EU 2016/679', en: 'GDPR – EU Regulation 2016/679' },
  'privacy.p2': { bs: 'Dana 25. maja 2016. u skladu s Uredbom (EUROPSKOG PARLAMENTA I VIJEĆA) br. 2016/679 o zaštiti pojedinaca u pogledu obrade osobnih podataka i o slobodnom kretanju takvih podataka te o stavljanju izvan snage Direktive 95/46/EZ (Opća uredba o zaštiti podataka), Privatna firma za izradu softverskih rješenja Dentify dužna je obavijestiti sve korisnike web stranice o prikupljanju, pohrani i obradi osobnih podataka.', en: 'On May 25, 2016, in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation), Private software solutions company Dentify is obliged to inform all website users about the collection, storage and processing of personal data.' },
  'privacy.p3': { bs: 'Korisnici koji nas kontaktiraju putem kontakt forme na web stranici daju nam pravo na pohranu osobnih podataka (ime, prezime, broj telefona i e-mail adresa) isključivo u svrhu odgovaranja na upite i pružanja traženih informacija. Ovi podaci se ne prenose trećim stranama niti se koriste u komercijalne svrhe bez izričitog pristanka korisnika. Korisnici imaju pravo uvida, ispravka i brisanja svojih osobnih podataka u skladu s važećim propisima.', en: 'Users who contact us through the contact form on the website grant us the right to store personal data (first name, last name, phone number and email address) exclusively for the purpose of responding to inquiries and providing requested information. This data is not shared with third parties nor used for commercial purposes without the explicit consent of the user. Users have the right to access, correct and delete their personal data in accordance with applicable regulations.' },
  'privacy.accept': { bs: 'Prihvati', en: 'Accept' },
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
