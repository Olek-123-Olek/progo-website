import { LEGAL } from "@/lib/legal";
import { privacyChoicesEn, privacyEn } from "@/lib/privacy/content-en";
import { privacyChoicesPl, privacyPl } from "@/lib/privacy/content-pl";
import type { PrivacyChoicesDocument, PrivacyDocument, PrivacySection } from "@/lib/privacy/types";
import type { Locale } from "@/i18n/routing";

type Pack = {
  label: string;
  title: string;
  updatedPrefix: string;
  tocTitle: string;
  backHome: string;
  contactCta: string;
  privacyChoicesLink: string;
  requestAccessLabel: string;
  intro: string[];
  sectionTitles: string[];
  bulletsBySection: Partial<Record<string, string[]>>;
  paragraphsBySection: Partial<Record<string, string[]>>;
  choices: {
    title: string;
    intro: string[];
    privacyPolicyLink: string;
    requestAccessLabel: string;
    sectionTitles: string[];
    paragraphsBySection: Partial<Record<string, string[]>>;
    bulletsBySection: Partial<Record<string, string[]>>;
  };
};

function applyPack(base: PrivacyDocument, pack: Pack): PrivacyDocument {
  const sections: PrivacySection[] = base.sections.map((section, index) => ({
    ...section,
    title: pack.sectionTitles[index] ?? section.title,
    paragraphs: pack.paragraphsBySection[section.id] ?? section.paragraphs,
    bullets: pack.bulletsBySection[section.id] ?? section.bullets,
  }));

  return {
    label: pack.label,
    title: pack.title,
    updatedPrefix: pack.updatedPrefix,
    tocTitle: pack.tocTitle,
    backHome: pack.backHome,
    contactCta: pack.contactCta,
    privacyChoicesLink: pack.privacyChoicesLink,
    requestAccessLabel: pack.requestAccessLabel,
    intro: pack.intro,
    sections,
  };
}

function applyChoicesPack(base: PrivacyChoicesDocument, pack: Pack["choices"] & Pick<Pack, "label" | "updatedPrefix" | "tocTitle" | "backHome">): PrivacyChoicesDocument {
  return {
    label: pack.label,
    title: pack.title,
    updatedPrefix: pack.updatedPrefix,
    tocTitle: pack.tocTitle,
    backHome: pack.backHome,
    privacyPolicyLink: pack.privacyPolicyLink,
    requestAccessLabel: pack.requestAccessLabel,
    intro: pack.intro,
    sections: base.sections.map((section, index) => ({
      ...section,
      title: pack.sectionTitles[index] ?? section.title,
      paragraphs: pack.paragraphsBySection[section.id] ?? section.paragraphs,
      bullets: pack.bulletsBySection[section.id] ?? section.bullets,
    })),
  };
}

const company = LEGAL.companyName;
const email = LEGAL.dataProtectionEmail;

const ukPack: Pack = {
  label: "Юридичне",
  title: "Політика конфіденційності",
  updatedPrefix: "Останнє оновлення",
  tocTitle: "На цій сторінці",
  backHome: "На головну",
  contactCta: "Зв'язатися",
  privacyChoicesLink: "Вибір конфіденційності та запити щодо акаунта",
  requestAccessLabel: "Надіслати запит щодо приватності",
  intro: [
    `Ця Політика конфіденційності пояснює, як ${company} («ProGo», «ми») обробляє персональні дані під час використання вебсайту ProGo (progo.one), логістичної платформи ProGo, мобільного додатку ProGo Driver та пов'язаних логістичних, комунікаційних, документних і сервісних послуг.`,
    "Документ призначений для бізнес-користувачів — перевізників, диспетчерів, водіїв, клієнтів та інших уповноважених учасників — а також для відвідувачів публічного сайту.",
    "Ми не продаємо персональні дані.",
  ],
  sectionTitles: [
    "1. Хто ми",
    "2. Сфера застосування цієї політики",
    "3. Які персональні дані ми можемо обробляти",
    "4. Дані про місцезнаходження",
    "5. Як ми використовуємо персональні дані",
    "6. Правові підстави за GDPR",
    "7. Бізнес-клієнти та ролі користувачів",
    "8. Як дані передаються",
    "9. Міжнародні передачі даних",
    "10. Зберігання даних",
    "11. Безпека",
    "12. Ваші права",
    "13. Видалення акаунта та вибір конфіденційності",
    "14. Cookies і технології сайту",
    "15. Діти",
    "16. Зміни цієї політики",
    "17. Контакт",
  ],
  paragraphsBySection: {
    "who-we-are": [
      `${company} надає спільну операційну систему логістики для перевізників, диспетчерів, водіїв, клієнтів та інших уповноважених бізнес-користувачів.`,
      LEGAL.address
        ? `Контакти контролера: ${company}, ${LEGAL.address}. Email: ${LEGAL.email}.`
        : `Для запитів щодо приватності пишіть на ${LEGAL.email}. Юридична назва компанії, поштова адреса та ідентифікатори будуть опубліковані після підтвердження.`,
      `Контакт із захисту даних: ${email}.`,
    ],
    "location-data": [
      "Доступ до геолокації запитується для підтримки live-операцій логістики: видимість транспорту, прогрес маршруту, оцінка прибуття, координація між диспетчерами і водіями та операційна безпека.",
      "Чи збирається локація лише на передньому плані, чи також у фоні, залежить від дозволів пристрою та налаштувань організації. Ми не стверджуємо про фонову геолокацію, якщо цього не дозволяють налаштування пристрою та додаток ProGo Driver.",
      "Ви можете вимкнути дозвіл локації в налаштуваннях пристрою. Це може обмежити ключові логістичні функції.",
      "Дані локації передаються лише уповноваженим учасникам операції та постачальникам, які допомагають надавати карти, хостинг і повідомлення.",
    ],
    contact: [
      `Організація / бренд: ${company}`,
      LEGAL.address ? `Адреса: ${LEGAL.address}` : "Поштова адреса: буде опублікована після підтвердження.",
      `Загальний контакт: ${LEGAL.email}`,
      `Приватність / захист даних: ${email}`,
      "Сайт: https://www.progo.one",
    ],
  },
  bulletsBySection: {},
  choices: {
    title: "Вибір конфіденційності",
    intro: [
      "Ця сторінка пояснює, як скористатися правами щодо доступу, виправлення, експорту та видалення даних у ProGo.",
      "Це стисла сторінка User Privacy Choices для відвідувачів сайту, користувачів платформи та додатку ProGo Driver.",
    ],
    privacyPolicyLink: "Повна Політика конфіденційності",
    requestAccessLabel: "Написати email із запитом",
    sectionTitles: [
      "Як подати запит",
      "Корпоративні акаунти",
      "Вибір аналітики на сайті",
      "Дозволи геолокації",
      "Час відповіді",
    ],
    paragraphsBySection: {
      "how-to-request": [
        `Напишіть на ${email} з темою «Privacy Request». Вкажіть ім'я, email, компанію (якщо є) і суть запиту.`,
      ],
    },
    bulletsBySection: {},
  },
};

const dePack: Pack = {
  label: "Rechtliches",
  title: "Datenschutzerklärung",
  updatedPrefix: "Zuletzt aktualisiert",
  tocTitle: "Auf dieser Seite",
  backHome: "Zur Startseite",
  contactCta: "Kontakt",
  privacyChoicesLink: "Datenschutzoptionen & Kontenanfragen",
  requestAccessLabel: "Datenschutzanfrage senden",
  intro: [
    `Diese Datenschutzerklärung erläutert, wie ${company} („ProGo“, „wir“) personenbezogene Daten verarbeitet, wenn Sie die ProGo-Website (progo.one), die ProGo-Logistikplattform, die ProGo-Driver-App und zugehörige Logistik-, Kommunikations-, Dokumenten- und Support-Dienste nutzen.`,
    "Sie richtet sich an Geschäftsnutzer — Speditionen, Transporteure, Disponenten, Fahrer, Kunden und andere autorisierte Teilnehmer — sowie an Besucher unserer öffentlichen Website.",
    "Wir verkaufen keine personenbezogenen Daten.",
  ],
  sectionTitles: [
    "1. Wer wir sind",
    "2. Geltungsbereich dieser Datenschutzerklärung",
    "3. Personenbezogene Daten, die wir verarbeiten können",
    "4. Standortdaten",
    "5. Wie wir personenbezogene Daten verwenden",
    "6. Rechtsgrundlagen nach der DSGVO",
    "7. Geschäftskunden und Benutzerrollen",
    "8. Wie Daten weitergegeben werden",
    "9. Internationale Datenübermittlungen",
    "10. Speicherdauer",
    "11. Sicherheit",
    "12. Ihre Rechte",
    "13. Kontolöschung und Datenschutzoptionen",
    "14. Cookies und Website-Technologien",
    "15. Kinder",
    "16. Änderungen dieser Erklärung",
    "17. Kontakt",
  ],
  paragraphsBySection: {
    "who-we-are": [
      `${company} stellt ein gemeinsames Logistik-Betriebssystem für Speditionen, Transporteure, Disponenten, Fahrer, Kunden und andere autorisierte Geschäftsnutzer bereit.`,
      LEGAL.address
        ? `Kontaktdaten des Verantwortlichen: ${company}, ${LEGAL.address}. E-Mail: ${LEGAL.email}.`
        : `Für Datenschutz- und Rechtsanfragen kontaktieren Sie uns unter ${LEGAL.email}. Eingetragener Firmenname, Postanschrift und Unternehmenskennungen werden nach Bestätigung veröffentlicht.`,
      `Datenschutzkontakt: ${email}.`,
    ],
    "location-data": [
      "Standortzugriff wird angefordert, damit ProGo Live-Logistik unterstützen kann — Fahrzeugsichtbarkeit, Routenfortschritt, voraussichtliche Ankunft, Koordination und betriebliche Sicherheit.",
      "Ob Standort nur im Vordergrund oder auch im Hintergrund verarbeitet wird, hängt von Geräteberechtigungen und Organisationsfunktionen ab. Wir behaupten keine Hintergrund-Standortverarbeitung, sofern Gerät und ProGo Driver dies nicht zulassen.",
      "Sie können die Standortberechtigung in den Geräteeinstellungen deaktivieren. Dadurch können essenzielle Logistikfunktionen eingeschränkt werden.",
      "Standortdaten werden nur mit autorisierten Teilnehmern der jeweiligen Operation und mit Dienstleistern für Karten, Hosting und Messaging geteilt.",
    ],
    contact: [
      `Organisation / Marke: ${company}`,
      LEGAL.address ? `Postanschrift: ${LEGAL.address}` : "Postanschrift: wird nach Bestätigung veröffentlicht.",
      `Allgemeiner Kontakt: ${LEGAL.email}`,
      `Datenschutz: ${email}`,
      "Website: https://www.progo.one",
    ],
  },
  bulletsBySection: {},
  choices: {
    title: "Datenschutzoptionen",
    intro: [
      "Auf dieser Seite erfahren Sie, wie Sie Auskunfts-, Berichtigungs-, Export- und Löschanfragen bei ProGo stellen können.",
      "Sie dient als klare User-Privacy-Choices-Seite für Website-, Plattform- und ProGo-Driver-Nutzer.",
    ],
    privacyPolicyLink: "Vollständige Datenschutzerklärung",
    requestAccessLabel: "Datenschutzanfrage per E-Mail",
    sectionTitles: [
      "Anfrage stellen",
      "Unternehmenskonten",
      "Website-Analyseoptionen",
      "Standortberechtigungen",
      "Antwortzeit",
    ],
    paragraphsBySection: {
      "how-to-request": [
        `Schreiben Sie an ${email} mit dem Betreff „Privacy Request“. Bitte Name, zugehörige E-Mail, Firma (falls zutreffend) und Anliegen angeben.`,
      ],
    },
    bulletsBySection: {},
  },
};

const frPack: Pack = {
  label: "Mentions légales",
  title: "Politique de confidentialité",
  updatedPrefix: "Dernière mise à jour",
  tocTitle: "Sur cette page",
  backHome: "Retour à l'accueil",
  contactCta: "Nous contacter",
  privacyChoicesLink: "Choix de confidentialité et demandes de compte",
  requestAccessLabel: "Envoyer une demande de confidentialité",
  intro: [
    `La présente Politique de confidentialité explique comment ${company} (« ProGo », « nous ») traite les données personnelles lorsque vous utilisez le site ProGo (progo.one), la plateforme logistique ProGo, l'application mobile ProGo Driver et les services associés.`,
    "Elle s'adresse aux utilisateurs professionnels — transporteurs, dispatchers, chauffeurs, clients et autres participants autorisés — ainsi qu'aux visiteurs du site public.",
    "Nous ne vendons pas de données personnelles.",
  ],
  sectionTitles: [
    "1. Qui nous sommes",
    "2. Champ d'application",
    "3. Données personnelles que nous pouvons traiter",
    "4. Données de localisation",
    "5. Comment nous utilisons les données",
    "6. Bases légales selon le RGPD",
    "7. Clients professionnels et rôles",
    "8. Partage des données",
    "9. Transferts internationaux",
    "10. Conservation des données",
    "11. Sécurité",
    "12. Vos droits",
    "13. Suppression de compte et choix de confidentialité",
    "14. Cookies et technologies du site",
    "15. Enfants",
    "16. Modifications de cette politique",
    "17. Contact",
  ],
  paragraphsBySection: {
    "who-we-are": [
      `${company} fournit un système d'exploitation logistique partagé pour transporteurs, dispatchers, chauffeurs, clients et autres utilisateurs professionnels autorisés.`,
      LEGAL.address
        ? `Coordonnées du responsable : ${company}, ${LEGAL.address}. E-mail : ${LEGAL.email}.`
        : `Pour les demandes de confidentialité, contactez ${LEGAL.email}. La dénomination sociale, l'adresse postale et les identifiants seront publiés une fois confirmés.`,
      `Contact protection des données : ${email}.`,
    ],
    "location-data": [
      "L'accès à la localisation est demandé pour les opérations logistiques en direct : visibilité des véhicules, progression d'itinéraire, estimation d'arrivée, coordination et sécurité opérationnelle.",
      "Le traitement en avant-plan ou en arrière-plan dépend des autorisations de l'appareil et des fonctionnalités activées. Nous n'affirmons pas de traitement en arrière-plan si l'appareil et ProGo Driver ne le permettent pas.",
      "Vous pouvez désactiver la localisation dans les réglages de l'appareil. Cela peut limiter des fonctions logistiques essentielles.",
      "Les données de localisation ne sont partagées qu'avec les participants autorisés et les prestataires nécessaires (cartes, hébergement, messagerie).",
    ],
    contact: [
      `Organisation / marque : ${company}`,
      LEGAL.address ? `Adresse postale : ${LEGAL.address}` : "Adresse postale : à publier une fois confirmée.",
      `Contact général : ${LEGAL.email}`,
      `Confidentialité : ${email}`,
      "Site : https://www.progo.one",
    ],
  },
  bulletsBySection: {},
  choices: {
    title: "Choix de confidentialité",
    intro: [
      "Cette page explique comment exercer vos droits d'accès, de rectification, d'export et de suppression auprès de ProGo.",
      "Elle sert de page User Privacy Choices claire pour le site, la plateforme et l'application ProGo Driver.",
    ],
    privacyPolicyLink: "Politique de confidentialité complète",
    requestAccessLabel: "Envoyer une demande par e-mail",
    sectionTitles: [
      "Comment faire une demande",
      "Comptes gérés par l'entreprise",
      "Choix d'analytique du site",
      "Autorisations de localisation",
      "Délai de réponse",
    ],
    paragraphsBySection: {
      "how-to-request": [
        `Écrivez à ${email} avec l'objet « Privacy Request ». Indiquez votre nom, e-mail, entreprise (le cas échéant) et votre demande.`,
      ],
    },
    bulletsBySection: {},
  },
};

const itPack: Pack = {
  label: "Legale",
  title: "Informativa sulla privacy",
  updatedPrefix: "Ultimo aggiornamento",
  tocTitle: "In questa pagina",
  backHome: "Torna alla home",
  contactCta: "Contattaci",
  privacyChoicesLink: "Scelte sulla privacy e richieste account",
  requestAccessLabel: "Invia una richiesta privacy",
  intro: [
    `La presente Informativa sulla privacy spiega come ${company} («ProGo», «noi») tratta i dati personali quando utilizzi il sito ProGo (progo.one), la piattaforma logistica ProGo, l'app ProGo Driver e i servizi correlati.`,
    "È destinata a utenti business — vettori, dispatcher, autisti, clienti e altri partecipanti autorizzati — e ai visitatori del sito pubblico.",
    "Non vendiamo dati personali.",
  ],
  sectionTitles: [
    "1. Chi siamo",
    "2. Ambito di applicazione",
    "3. Dati personali che possiamo trattare",
    "4. Dati di localizzazione",
    "5. Come utilizziamo i dati personali",
    "6. Basi giuridiche ai sensi del GDPR",
    "7. Clienti business e ruoli utente",
    "8. Come vengono condivisi i dati",
    "9. Trasferimenti internazionali",
    "10. Conservazione dei dati",
    "11. Sicurezza",
    "12. I tuoi diritti",
    "13. Cancellazione account e scelte privacy",
    "14. Cookie e tecnologie del sito",
    "15. Minori",
    "16. Modifiche a questa informativa",
    "17. Contatto",
  ],
  paragraphsBySection: {
    "who-we-are": [
      `${company} fornisce un sistema operativo logistico condiviso per vettori, dispatcher, autisti, clienti e altri utenti business autorizzati.`,
      LEGAL.address
        ? `Dati del titolare: ${company}, ${LEGAL.address}. Email: ${LEGAL.email}.`
        : `Per richieste privacy contattaci a ${LEGAL.email}. Ragione sociale, indirizzo postale e identificativi saranno pubblicati una volta confermati.`,
      `Contatto protezione dati: ${email}.`,
    ],
    "location-data": [
      "L'accesso alla posizione è richiesto per supportare operazioni logistiche live: visibilità veicoli, avanzamento percorso, ETA, coordinamento e sicurezza operativa.",
      "Se la posizione è raccolta solo in primo piano o anche in background dipende dalle autorizzazioni del dispositivo e dalle funzioni abilitate. Non dichiariamo trattamento in background se dispositivo e ProGo Driver non lo consentono.",
      "Puoi disattivare il permesso di localizzazione nelle impostazioni del dispositivo. Ciò può limitare funzioni logistiche essenziali.",
      "I dati di localizzazione sono condivisi solo con partecipanti autorizzati e fornitori necessari per mappe, hosting e messaggistica.",
    ],
    contact: [
      `Organizzazione / brand: ${company}`,
      LEGAL.address ? `Indirizzo postale: ${LEGAL.address}` : "Indirizzo postale: da pubblicare una volta confermato.",
      `Contatto generale: ${LEGAL.email}`,
      `Privacy: ${email}`,
      "Sito: https://www.progo.one",
    ],
  },
  bulletsBySection: {},
  choices: {
    title: "Scelte sulla privacy",
    intro: [
      "Questa pagina spiega come esercitare i diritti di accesso, rettifica, esportazione e cancellazione presso ProGo.",
      "È pensata come pagina User Privacy Choices per sito, piattaforma e app ProGo Driver.",
    ],
    privacyPolicyLink: "Informativa sulla privacy completa",
    requestAccessLabel: "Invia richiesta via email",
    sectionTitles: [
      "Come inviare una richiesta",
      "Account aziendali",
      "Scelte analytics del sito",
      "Permessi di localizzazione",
      "Tempi di risposta",
    ],
    paragraphsBySection: {
      "how-to-request": [
        `Scrivi a ${email} con oggetto «Privacy Request». Includi nome, email, azienda (se applicabile) e la richiesta.`,
      ],
    },
    bulletsBySection: {},
  },
};

export function getPrivacyDocument(locale: Locale): PrivacyDocument {
  if (locale === "pl") return privacyPl;
  if (locale === "en") return privacyEn;
  if (locale === "uk") return applyPack(privacyEn, ukPack);
  if (locale === "de") return applyPack(privacyEn, dePack);
  if (locale === "fr") return applyPack(privacyEn, frPack);
  if (locale === "it") return applyPack(privacyEn, itPack);
  return privacyEn;
}

export function getPrivacyChoicesDocument(locale: Locale): PrivacyChoicesDocument {
  if (locale === "pl") return privacyChoicesPl;
  if (locale === "en") return privacyChoicesEn;
  const pack =
    locale === "uk" ? ukPack : locale === "de" ? dePack : locale === "fr" ? frPack : locale === "it" ? itPack : null;
  if (!pack) return privacyChoicesEn;
  return applyChoicesPack(privacyChoicesEn, {
    label: pack.label,
    updatedPrefix: pack.updatedPrefix,
    tocTitle: pack.tocTitle,
    backHome: pack.backHome,
    ...pack.choices,
  });
}

export function formatPrivacyUpdated(prefix: string, isoDate: string, locale: Locale): string {
  const date = new Date(`${isoDate}T12:00:00Z`);
  const formatted = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return `${prefix}: ${formatted}`;
}
