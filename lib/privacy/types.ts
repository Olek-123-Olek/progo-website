export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PrivacyDocument = {
  label: string;
  title: string;
  updatedPrefix: string;
  intro: string[];
  tocTitle: string;
  backHome: string;
  contactCta: string;
  privacyChoicesLink: string;
  requestAccessLabel: string;
  sections: PrivacySection[];
};

export type PrivacyChoicesDocument = {
  label: string;
  title: string;
  updatedPrefix: string;
  intro: string[];
  tocTitle: string;
  backHome: string;
  privacyPolicyLink: string;
  requestAccessLabel: string;
  sections: PrivacySection[];
};
