import { LEGAL } from "@/lib/legal";
import type { PrivacyChoicesDocument, PrivacyDocument } from "@/lib/privacy/types";

const company = LEGAL.companyName;
const email = LEGAL.dataProtectionEmail;

export const privacyEn: PrivacyDocument = {
  label: "Legal",
  title: "Privacy Policy",
  updatedPrefix: "Last updated",
  tocTitle: "On this page",
  backHome: "Back to homepage",
  contactCta: "Contact us",
  privacyChoicesLink: "Privacy choices & account requests",
  requestAccessLabel: "Submit a privacy request",
  intro: [
    `This Privacy Policy explains how ${company} (“ProGo”, “we”, “us”) processes personal data when you use the ProGo website (progo.one), the ProGo logistics platform, the ProGo Driver mobile application, and related logistics, messaging, document and support services.`,
    "It is written for business users — transport companies, carriers, dispatchers, drivers, customers and other authorised participants — and for visitors of our public website.",
    "We do not sell personal data.",
  ],
  sections: [
    {
      id: "who-we-are",
      title: "1. Who we are",
      paragraphs: [
        `${company} provides a shared logistics operating system that helps transport companies, carriers, dispatchers, drivers, customers and other authorised business users coordinate vehicles, loads, statuses, documents and communication in one live workspace.`,
        LEGAL.address
          ? `Controller contact details: ${company}, ${LEGAL.address}. Email: ${LEGAL.email}.`
          : `For privacy and legal requests, contact us at ${LEGAL.email}. Registered company name, postal address and company identifiers will be published here once confirmed; until then, please use the email contact above.`,
        `Data protection contact: ${email}.`,
      ],
    },
    {
      id: "scope",
      title: "2. Scope of this Privacy Policy",
      paragraphs: [
        "This policy applies to personal data processed in connection with:",
      ],
      bullets: [
        "the ProGo marketing website and contact forms",
        "ProGo platform accounts and authentication",
        "logistics planning, fleet and job management",
        "maps, live operational visibility and location-enabled features",
        "messaging, document exchange, alerts and notifications",
        "customer support and related communication",
        "the ProGo Driver mobile application",
      ],
    },
    {
      id: "data-we-process",
      title: "3. Personal data we may process",
      paragraphs: [
        "Depending on how you use ProGo, we may process the following categories of data. Not every category applies to every user.",
      ],
      bullets: [
        "Account information: name, email address, telephone number, company, role and login identifiers",
        "Company and business profile information",
        "Vehicle information: registration plate, vehicle type, dimensions, capacity and operational status",
        "Driver and dispatcher assignments",
        "Precise or approximate location data where enabled for logistics operations",
        "GPS coordinates, timestamps, and movement-related operational data where enabled",
        "Logistics job information: loading and unloading locations, dates, times, references and statuses",
        "Messages, chat content, uploaded documents, photos and files",
        "Device and technical information: IP address, browser type, device type, operating system, app version, crash data and diagnostics",
        "Support requests and website contact-form information (name, email, company, role, message, locale)",
        "Notification tokens used to deliver push or in-app alerts",
        "Authentication and security logs, including rate-limiting metadata based on IP address",
      ],
    },
    {
      id: "location-data",
      title: "4. Location data",
      paragraphs: [
        "Location access is requested so ProGo can support live logistics operations — for example vehicle visibility, route progress, estimated arrival information, coordination between dispatchers and drivers, and operational security.",
        "Whether location is collected in the foreground only, or also while the app is in the background, depends on the permissions granted on the device and the features enabled for your organisation. We do not claim background location processing unless your device settings and the ProGo Driver app configuration allow it.",
        "You can disable location permission at any time in your device settings. Disabling location may limit essential logistics features such as live map visibility and accurate operational status.",
        "Location data is shared only with authorised participants in the relevant logistics operation and with service providers that help us deliver map, hosting and messaging functions, as described below.",
      ],
    },
    {
      id: "how-we-use",
      title: "5. How we use personal data",
      paragraphs: ["We use personal data to:"],
      bullets: [
        "provide and operate the ProGo website, platform and Driver app",
        "authenticate users and manage accounts",
        "display vehicles, jobs and operational statuses",
        "support transport planning and coordination",
        "enable live location and operational visibility where permitted",
        "enable communication between authorised users",
        "support document exchange",
        "send notifications and alerts",
        "provide customer support",
        "protect system security and prevent abuse or fraud",
        "monitor reliability and diagnose technical issues",
        "comply with legal obligations",
        "improve the service based on aggregated or operational feedback",
      ],
    },
    {
      id: "legal-bases",
      title: "6. Legal bases under the GDPR",
      paragraphs: [
        "Where the GDPR applies, we rely on one or more of the following legal bases, depending on the processing activity:",
      ],
      bullets: [
        "Performance of a contract — to provide the platform and Driver app features you or your organisation ordered",
        "Steps prior to entering a contract — for example responding to demo or contact requests",
        "Compliance with legal obligations — where we must retain or disclose information under applicable law",
        "Legitimate interests — such as securing our services, preventing abuse, measuring essential website reliability, and improving the product in ways that do not override your rights",
        "Consent — where required, for example for optional analytics cookies on the website or certain device permissions",
      ],
    },
    {
      id: "business-customers",
      title: "7. Business customers and user roles",
      paragraphs: [
        "ProGo is primarily a B2B logistics service. In many cases a transport company, carrier or customer organisation decides which employees, drivers or partners may use ProGo and which operational data is entered into the system.",
        "In those situations, the organisation may determine the purposes and means of processing for workplace or logistics data. ProGo may act as a processor or service provider for that organisation, while remaining a controller for website operations, account administration, security, support, and our own product analytics where applicable.",
        "If you use ProGo through your employer or a partner company, please also review that organisation’s internal policies. We do not make unsupported contractual claims beyond this general description.",
      ],
    },
    {
      id: "sharing",
      title: "8. How data is shared",
      paragraphs: [
        "We share personal data only as needed to operate the service and as permitted by law. Recipients may include:",
      ],
      bullets: [
        "your company and authorised company members",
        "dispatchers, drivers, carriers, customers or other authorised participants in a logistics operation",
        "cloud hosting providers — currently Vercel for the public website and related serverless APIs",
        "email delivery providers — currently Resend for contact-form messages",
        "database / Redis providers used for view counters and abuse prevention (Vercel KV / Upstash when configured)",
        "map and location service providers used by the ProGo platform or Driver app when those features are enabled",
        "notification providers used to deliver alerts",
        "analytics and performance providers — Vercel Analytics and Vercel Speed Insights, loaded only after website analytics consent",
        "professional advisers and competent authorities where legally required",
      ],
    },
    {
      id: "transfers",
      title: "9. International data transfers",
      paragraphs: [
        "Some service providers may process data outside the European Economic Area (EEA), including in the United States.",
        "Where required by law, we rely on appropriate safeguards such as adequacy decisions or Standard Contractual Clauses. We do not claim that all data is stored only in Germany or only in the European Union.",
      ],
    },
    {
      id: "retention",
      title: "10. Data retention",
      paragraphs: [
        "We retain personal data only for as long as necessary for the purposes described in this policy, including:",
      ],
      bullets: [
        "active accounts and service delivery",
        "logistics operations and operational history",
        "contractual requirements with business customers",
        "legal and accounting obligations",
        "dispute resolution",
        "security and abuse prevention",
      ],
    },
    {
      id: "security",
      title: "11. Security",
      paragraphs: [
        "We apply reasonable technical and organisational measures appropriate to the nature of the data and the risks involved. These may include authentication, access controls, role-based permissions, encrypted connections (HTTPS), restricted administrative access, monitoring and backups where applicable.",
        "No method of transmission or storage is completely secure. We cannot promise absolute security.",
      ],
    },
    {
      id: "rights",
      title: "12. Your rights",
      paragraphs: [
        "Subject to applicable law (including the GDPR), you may have the right to:",
      ],
      bullets: [
        "access your personal data",
        "correct inaccurate data",
        "request deletion",
        "restrict processing",
        "object to certain processing",
        "receive a portable copy of data you provided",
        "withdraw consent where processing is based on consent",
        "lodge a complaint with a competent data protection authority",
      ],
    },
    {
      id: "account-deletion",
      title: "13. Account deletion and privacy choices",
      paragraphs: [
        "You may request account deletion, access to personal data, correction, deletion of uploaded content, or withdrawal of optional consent by emailing us.",
        `Send your request to ${email} with the subject “Privacy Request”, or use the dedicated privacy request link on this page. We may need to verify your identity and, where you use ProGo through a company account, coordinate with your organisation.`,
        "If your organisation administers your ProGo account, some deletion or correction requests may need to be handled by that organisation first.",
        "A concise Privacy Choices page is also available for App Store and user privacy requests.",
      ],
    },
    {
      id: "cookies",
      title: "14. Cookies and website technologies",
      paragraphs: [
        "On the ProGo website we use:",
      ],
      bullets: [
        "essential technologies needed to run the site and remember cookie-preference choices (stored in localStorage as progo-cookie-consent)",
        "session storage for the on-site view counter so the same browser is not counted repeatedly on the same day",
        "Vercel Analytics and Vercel Speed Insights only after you accept analytics in the cookie banner",
        "server-side IP address handling for contact-form rate limiting when Redis/KV is configured",
      ],
    },
    {
      id: "children",
      title: "15. Children",
      paragraphs: [
        "ProGo is a professional logistics service intended for business use. It is not directed at children. We do not knowingly collect personal data from children for consumer or entertainment purposes.",
      ],
    },
    {
      id: "changes",
      title: "16. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The latest version and the “Last updated” date will always be shown on this page. Material changes may also be communicated through the website, platform or email where appropriate.",
      ],
    },
    {
      id: "contact",
      title: "17. Contact",
      paragraphs: [
        `Organisation / brand: ${company}`,
        LEGAL.address ? `Postal address: ${LEGAL.address}` : "Postal address: to be published once confirmed.",
        `General contact: ${LEGAL.email}`,
        `Privacy / data protection: ${email}`,
        "Website: https://www.progo.one",
      ],
    },
  ],
};

export const privacyChoicesEn: PrivacyChoicesDocument = {
  label: "Legal",
  title: "Privacy Choices",
  updatedPrefix: "Last updated",
  tocTitle: "On this page",
  backHome: "Back to homepage",
  privacyPolicyLink: "Full Privacy Policy",
  requestAccessLabel: "Email a privacy request",
  intro: [
    "This page explains how you can exercise privacy rights related to ProGo, including access, correction, export and deletion requests.",
    "It is intended as a clear User Privacy Choices page for website visitors, platform users and ProGo Driver app users.",
  ],
  sections: [
    {
      id: "how-to-request",
      title: "How to submit a request",
      paragraphs: [
        `Email ${email} with the subject “Privacy Request”. Please include your name, the email address associated with your ProGo use, your company (if applicable), and what you are asking for.`,
      ],
      bullets: [
        "Access — a copy of personal data we hold about you",
        "Correction — fix inaccurate account or profile information",
        "Export / portability — a portable copy of data you provided, where applicable",
        "Deletion — close an account or remove specific content where we are able to do so",
        "Withdraw optional consent — for example website analytics consent",
      ],
    },
    {
      id: "company-accounts",
      title: "Company-managed accounts",
      paragraphs: [
        "If you use ProGo through an employer or partner organisation, some requests may need to be handled together with that organisation, especially for operational logistics data entered on behalf of the company.",
      ],
    },
    {
      id: "website-choices",
      title: "Website analytics choices",
      paragraphs: [
        "On progo.one you can accept analytics or continue with essential cookies only via the cookie banner. Your choice is stored locally in your browser. Clearing site data will show the banner again.",
      ],
    },
    {
      id: "location-choices",
      title: "Location permissions",
      paragraphs: [
        "Location access for the ProGo Driver app is controlled in your device settings. Disabling location may limit live logistics features.",
      ],
    },
    {
      id: "response",
      title: "Response time",
      paragraphs: [
        "We aim to respond to verified privacy requests without undue delay and within the time limits required by applicable law.",
      ],
    },
  ],
};
