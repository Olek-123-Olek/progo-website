import { LEGAL } from "@/lib/legal";
import type { PrivacyChoicesDocument, PrivacyDocument } from "@/lib/privacy/types";

const company = LEGAL.companyName;
const email = LEGAL.dataProtectionEmail;

export const privacyPl: PrivacyDocument = {
  label: "Prawne",
  title: "Polityka prywatności",
  updatedPrefix: "Ostatnia aktualizacja",
  tocTitle: "Na tej stronie",
  backHome: "Wróć do strony głównej",
  contactCta: "Kontakt",
  privacyChoicesLink: "Wybory prywatności i prośby o konto",
  requestAccessLabel: "Wyślij prośbę o prywatność",
  intro: [
    `Niniejsza Polityka prywatności wyjaśnia, w jaki sposób ${company} („ProGo”, „my”) przetwarza dane osobowe podczas korzystania ze strony internetowej ProGo (progo.one), platformy logistycznej ProGo, aplikacji mobilnej ProGo Driver oraz powiązanych usług logistycznych, komunikacyjnych, dokumentów i wsparcia.`,
    "Dokument jest przeznaczony dla użytkowników biznesowych — firm transportowych, przewoźników, dyspozytorów, kierowców, klientów i innych uprawnionych uczestników — oraz dla odwiedzających naszą stronę publiczną.",
    "Nie sprzedajemy danych osobowych.",
  ],
  sections: [
    {
      id: "who-we-are",
      title: "1. Kim jesteśmy",
      paragraphs: [
        `${company} dostarcza wspólny system operacyjny logistyki, który pomaga firmom transportowym, przewoźnikom, dyspozytorom, kierowcom, klientom i innym uprawnionym użytkownikom biznesowym koordynować pojazdy, ładunki, statusy, dokumenty i komunikację w jednym żywym środowisku pracy.`,
        LEGAL.address
          ? `Dane administratora: ${company}, ${LEGAL.address}. E-mail: ${LEGAL.email}.`
          : `W sprawach prywatności i prawnych prosimy o kontakt na ${LEGAL.email}. Zarejestrowana nazwa firmy, adres korespondencyjny i identyfikatory spółki zostaną opublikowane po potwierdzeniu.`,
        `Kontakt w sprawie ochrony danych: ${email}.`,
      ],
    },
    {
      id: "scope",
      title: "2. Zakres tej Polityki prywatności",
      paragraphs: ["Polityka dotyczy danych osobowych przetwarzanych w związku z:"],
      bullets: [
        "stroną marketingową ProGo i formularzami kontaktowymi",
        "kontami i uwierzytelnianiem na platformie ProGo",
        "planowaniem logistycznym, zarządzaniem flotą i zleceniami",
        "mapami, widocznością operacyjną na żywo i funkcjami lokalizacyjnymi",
        "wiadomościami, wymianą dokumentów, alertami i powiadomieniami",
        "wsparciem klienta i powiązaną komunikacją",
        "aplikacją mobilną ProGo Driver",
      ],
    },
    {
      id: "data-we-process",
      title: "3. Dane osobowe, które możemy przetwarzać",
      paragraphs: [
        "W zależności od sposobu korzystania z ProGo możemy przetwarzać poniższe kategorie danych. Nie każda kategoria dotyczy każdego użytkownika.",
      ],
      bullets: [
        "Dane konta: imię i nazwisko, e-mail, telefon, firma, rola i identyfikatory logowania",
        "Informacje o firmie i profilu biznesowym",
        "Dane pojazdów: numer rejestracyjny, typ, wymiary, ładowność i status operacyjny",
        "Przypisania kierowców i dyspozytorów",
        "Dane lokalizacji precyzyjnej lub przybliżonej, gdy są włączone",
        "Współrzędne GPS, znaczniki czasu i dane ruchu, gdy są włączone",
        "Informacje o zleceniach: miejsca załadunku i rozładunku, daty, godziny, referencje i statusy",
        "Wiadomości, treść czatu, przesłane dokumenty, zdjęcia i pliki",
        "Dane urządzenia i techniczne: adres IP, przeglądarka, typ urządzenia, system, wersja aplikacji, awarie i diagnostyka",
        "Prośby o wsparcie i dane z formularza kontaktowego",
        "Tokeny powiadomień",
        "Logi uwierzytelniania i bezpieczeństwa, w tym metadane ograniczania zapytań na podstawie IP",
      ],
    },
    {
      id: "location-data",
      title: "4. Dane lokalizacji",
      paragraphs: [
        "Dostęp do lokalizacji jest proszony, aby ProGo mógł wspierać operacje logistyczne na żywo — widoczność pojazdów, postęp trasy, szacowany czas przyjazdu, koordynację między dyspozytorami a kierowcami oraz bezpieczeństwo operacyjne.",
        "To, czy lokalizacja jest zbierana tylko na pierwszym planie, czy także w tle, zależy od uprawnień urządzenia i funkcji włączonych dla Twojej organizacji. Nie twierdzimy, że przetwarzamy lokalizację w tle, jeśli ustawienia urządzenia i konfiguracja aplikacji ProGo Driver na to nie pozwalają.",
        "Możesz wyłączyć uprawnienie lokalizacji w ustawieniach urządzenia. Wyłączenie lokalizacji może ograniczyć kluczowe funkcje logistyczne.",
        "Dane lokalizacji są udostępniane wyłącznie uprawnionym uczestnikom danej operacji oraz dostawcom usług pomagającym w mapach, hostingu i komunikacji.",
      ],
    },
    {
      id: "how-we-use",
      title: "5. Jak wykorzystujemy dane osobowe",
      paragraphs: ["Wykorzystujemy dane osobowe, aby:"],
      bullets: [
        "świadczyć i obsługiwać stronę, platformę i aplikację Driver",
        "uwierzytelniać użytkowników i zarządzać kontami",
        "wyświetlać pojazdy, zlecenia i statusy operacyjne",
        "wspierać planowanie i koordynację transportu",
        "umożliwiać widoczność lokalizacji i statusu, gdy jest to dozwolone",
        "umożliwiać komunikację między uprawnionymi użytkownikami",
        "wspierać wymianę dokumentów",
        "wysyłać powiadomienia i alerty",
        "zapewniać wsparcie klienta",
        "chronić bezpieczeństwo systemu i zapobiegać nadużyciom",
        "monitorować niezawodność i diagnozować problemy techniczne",
        "wypełniać obowiązki prawne",
        "ulepszać usługę",
      ],
    },
    {
      id: "legal-bases",
      title: "6. Podstawy prawne według RODO",
      paragraphs: [
        "Gdzie ma zastosowanie RODO, opieramy się na jednej lub kilku z poniższych podstaw, w zależności od czynności przetwarzania:",
      ],
      bullets: [
        "Wykonanie umowy — świadczenie funkcji platformy i aplikacji zamówionych przez Ciebie lub Twoją organizację",
        "Działania przed zawarciem umowy — np. odpowiedzi na zapytania kontaktowe lub o demo",
        "Obowiązki prawne — gdy musimy przechowywać lub ujawnić informacje zgodnie z prawem",
        "Prawnie uzasadniony interes — m.in. zabezpieczenie usług, zapobieganie nadużyciom, pomiar niezawodności strony i rozwój produktu",
        "Zgoda — gdy jest wymagana, np. opcjonalne cookies analityczne lub niektóre uprawnienia urządzenia",
      ],
    },
    {
      id: "business-customers",
      title: "7. Klienci biznesowi i role użytkowników",
      paragraphs: [
        "ProGo jest przede wszystkim usługą B2B. Często firma transportowa, przewoźnik lub organizacja klienta decyduje, którzy pracownicy, kierowcy lub partnerzy mogą korzystać z ProGo i jakie dane operacyjne są wprowadzane do systemu.",
        "W takich sytuacjach organizacja może określać cele i sposoby przetwarzania danych służbowych lub logistycznych. ProGo może działać jako procesor lub dostawca usług dla tej organizacji, pozostając administratorem w zakresie strony internetowej, administracji kont, bezpieczeństwa, wsparcia i własnej analityki produktowej, o ile ma zastosowanie.",
        "Jeśli korzystasz z ProGo przez pracodawcę lub firmę partnerską, zapoznaj się także z jej politykami wewnętrznymi.",
      ],
    },
    {
      id: "sharing",
      title: "8. Udostępnianie danych",
      paragraphs: [
        "Udostępniamy dane osobowe wyłącznie w zakresie niezbędnym do działania usługi i zgodnie z prawem. Odbiorcami mogą być:",
      ],
      bullets: [
        "Twoja firma i upoważnieni członkowie firmy",
        "dyspozytorzy, kierowcy, przewoźnicy, klienci lub inni uprawnieni uczestnicy operacji",
        "dostawcy hostingu w chmurze — obecnie Vercel dla strony publicznej i powiązanych API",
        "dostawcy poczty e-mail — obecnie Resend dla formularza kontaktowego",
        "dostawcy bazy / Redis używani do liczników i ochrony przed nadużyciami (Vercel KV / Upstash, gdy skonfigurowane)",
        "dostawcy map i lokalizacji używani przez platformę lub aplikację Driver, gdy funkcje są włączone",
        "dostawcy powiadomień",
        "dostawcy analityki i wydajności — Vercel Analytics i Speed Insights, ładowane dopiero po zgodzie na analitykę",
        "doradcy zawodowi i organy właściwe, gdy wymaga tego prawo",
      ],
    },
    {
      id: "transfers",
      title: "9. Międzynarodowe transfery danych",
      paragraphs: [
        "Niektórzy dostawcy mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym (EOG), w tym w Stanach Zjednoczonych.",
        "Tam gdzie wymaga tego prawo, stosujemy odpowiednie zabezpieczenia, takie jak decyzje o adekwatności lub standardowe klauzule umowne. Nie twierdzimy, że wszystkie dane są przechowywane wyłącznie w Niemczech lub wyłącznie w Unii Europejskiej.",
      ],
    },
    {
      id: "retention",
      title: "10. Okres przechowywania",
      paragraphs: [
        "Przechowujemy dane osobowe tylko tak długo, jak jest to konieczne do celów opisanych w tej polityce, w tym:",
      ],
      bullets: [
        "aktywne konta i świadczenie usługi",
        "operacje logistyczne i historia operacyjna",
        "wymagania umowne z klientami biznesowymi",
        "obowiązki prawne i księgowe",
        "rozstrzyganie sporów",
        "bezpieczeństwo i zapobieganie nadużyciom",
      ],
    },
    {
      id: "security",
      title: "11. Bezpieczeństwo",
      paragraphs: [
        "Stosujemy rozsądne środki techniczne i organizacyjne odpowiednie do charakteru danych i ryzyka. Mogą one obejmować uwierzytelnianie, kontrolę dostępu, uprawnienia oparte na rolach, szyfrowane połączenia (HTTPS), ograniczony dostęp administracyjny, monitoring i kopie zapasowe, o ile mają zastosowanie.",
        "Żadna metoda transmisji ani przechowywania nie jest całkowicie bezpieczna. Nie obiecujemy absolutnego bezpieczeństwa.",
      ],
    },
    {
      id: "rights",
      title: "12. Twoje prawa",
      paragraphs: ["Z zastrzeżeniem obowiązującego prawa (w tym RODO) możesz mieć prawo do:"],
      bullets: [
        "dostępu do swoich danych osobowych",
        "sprostowania niedokładnych danych",
        "żądania usunięcia",
        "ograniczenia przetwarzania",
        "sprzeciwu wobec określonego przetwarzania",
        "otrzymania przenośnej kopii danych, które podałeś",
        "wycofania zgody, gdy przetwarzanie opiera się na zgodzie",
        "wniesienia skargi do właściwego organu ochrony danych",
      ],
    },
    {
      id: "account-deletion",
      title: "13. Usuwanie konta i wybory prywatności",
      paragraphs: [
        "Możesz poprosić o usunięcie konta, dostęp do danych, sprostowanie, usunięcie przesłanych treści lub wycofanie opcjonalnej zgody, pisząc do nas e-mailem.",
        `Wyślij prośbę na ${email} z tematem „Privacy Request” lub użyj dedykowanego linku na tej stronie. Możemy poprosić o weryfikację tożsamości, a w przypadku konta firmowego — skoordynować sprawę z Twoją organizacją.`,
        "Dostępna jest także zwięzła strona Privacy Choices przeznaczona m.in. do App Store.",
      ],
    },
    {
      id: "cookies",
      title: "14. Cookies i technologie strony",
      paragraphs: ["Na stronie ProGo wykorzystujemy:"],
      bullets: [
        "technologie niezbędne do działania strony i zapamiętania wyboru cookies (localStorage: progo-cookie-consent)",
        "session storage dla licznika wyświetleń, aby ta sama przeglądarka nie była liczona wielokrotnie tego samego dnia",
        "Vercel Analytics i Speed Insights dopiero po akceptacji analityki w banerze",
        "obsługę adresu IP po stronie serwera w celu ograniczania zapytań formularza kontaktowego, gdy Redis/KV jest skonfigurowany",
      ],
    },
    {
      id: "children",
      title: "15. Dzieci",
      paragraphs: [
        "ProGo jest profesjonalną usługą logistyczną przeznaczoną do użytku biznesowego. Nie jest skierowana do dzieci. Nie zbieramy świadomie danych dzieci w celach konsumenckich lub rozrywkowych.",
      ],
    },
    {
      id: "changes",
      title: "16. Zmiany tej polityki",
      paragraphs: [
        "Możemy aktualizować tę Politykę prywatności. Najnowsza wersja i data „Ostatnia aktualizacja” będą zawsze widoczne na tej stronie.",
      ],
    },
    {
      id: "contact",
      title: "17. Kontakt",
      paragraphs: [
        `Organizacja / marka: ${company}`,
        LEGAL.address ? `Adres: ${LEGAL.address}` : "Adres korespondencyjny: zostanie opublikowany po potwierdzeniu.",
        `Kontakt ogólny: ${LEGAL.email}`,
        `Prywatność / ochrona danych: ${email}`,
        "Strona: https://www.progo.one",
      ],
    },
  ],
};

export const privacyChoicesPl: PrivacyChoicesDocument = {
  label: "Prawne",
  title: "Wybory prywatności",
  updatedPrefix: "Ostatnia aktualizacja",
  tocTitle: "Na tej stronie",
  backHome: "Wróć do strony głównej",
  privacyPolicyLink: "Pełna Polityka prywatności",
  requestAccessLabel: "Wyślij e-mail z prośbą o prywatność",
  intro: [
    "Ta strona wyjaśnia, jak możesz skorzystać z praw dotyczących prywatności w ProGo, w tym dostępu, sprostowania, eksportu i usunięcia danych.",
    "Jest to zwięzła strona User Privacy Choices dla odwiedzających stronę, użytkowników platformy i aplikacji ProGo Driver.",
  ],
  sections: [
    {
      id: "how-to-request",
      title: "Jak złożyć prośbę",
      paragraphs: [
        `Napisz na ${email} z tematem „Privacy Request”. Podaj imię i nazwisko, e-mail powiązany z ProGo, firmę (jeśli dotyczy) oraz treść prośby.`,
      ],
      bullets: [
        "Dostęp — kopia danych, które posiadamy",
        "Sprostowanie — poprawienie niedokładnych danych konta",
        "Eksport / przenoszalność — przenośna kopia danych, które podałeś, o ile ma zastosowanie",
        "Usunięcie — zamknięcie konta lub usunięcie określonych treści, gdy jest to możliwe",
        "Wycofanie opcjonalnej zgody — np. zgody na analitykę strony",
      ],
    },
    {
      id: "company-accounts",
      title: "Konta firmowe",
      paragraphs: [
        "Jeśli korzystasz z ProGo przez pracodawcę lub partnera, część próśb może wymagać współpracy z tą organizacją, zwłaszcza w zakresie danych operacyjnych wprowadzonych w imieniu firmy.",
      ],
    },
    {
      id: "website-choices",
      title: "Wybory analityki na stronie",
      paragraphs: [
        "Na progo.one możesz zaakceptować analitykę lub kontynuować tylko z niezbędnymi cookies poprzez baner. Wybór jest przechowywany lokalnie w przeglądarce.",
      ],
    },
    {
      id: "location-choices",
      title: "Uprawnienia lokalizacji",
      paragraphs: [
        "Dostęp do lokalizacji w aplikacji ProGo Driver kontrolujesz w ustawieniach urządzenia. Wyłączenie lokalizacji może ograniczyć funkcje logistyczne na żywo.",
      ],
    },
    {
      id: "response",
      title: "Czas odpowiedzi",
      paragraphs: [
        "Dążymy do odpowiedzi na zweryfikowane prośby bez zbędnej zwłoki i w terminach wymaganych przez obowiązujące prawo.",
      ],
    },
  ],
};
