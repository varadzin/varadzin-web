// MARK: - Contact

export const contactEmail = 'email@varadzin.com';

// MARK: - Apps on the homepage

export interface AppLink {
  label: 'Website' | 'App Store';
  href: string;
}

export interface App {
  name: string;
  icon: string;
  summary: string;
  chips?: string[];
  links: AppLink[];
}

/** Apps designed, written and published by František. */
export const ownApps: App[] = [
  {
    name: 'SecureDoc',
    icon: '/images/securedoc.png',
    summary:
      'A digital vault for scanning, storing and organising personal and business documents. ' +
      'Contracts, receipts, invoices and insurance papers stay on your device.',
    chips: ['iPhone', '100% offline'],
    links: [
      { label: 'Website', href: '/securedoc-scanner-vault/' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/securedoc-organizer-ai/id6748312274' },
    ],
  },
  {
    name: 'Still Here — For You',
    icon: '/images/stillhere.jpg',
    summary:
      'A simple, secure way to let your loved ones know you are okay, every single day. ' +
      'Designed for seniors and the families who care about them.',
    chips: ['iPhone', 'Daily check-in'],
    links: [
      { label: 'Website', href: '/still-here-app/' },
      { label: 'App Store', href: 'https://apps.apple.com/app/id6759660505' },
    ],
  },
  {
    name: 'Vitrio',
    icon: '/images/vitrio.png',
    summary:
      'Your collection, catalogued. Vinyl, LEGO, whisky, retro games and board games. ' +
      'Scan a barcode and the record fills itself in.',
    chips: ['iOS 18+', 'No account, ever', '12 languages'],
    links: [
      { label: 'Website', href: '/vitrio/' },
      { label: 'App Store', href: 'https://apps.apple.com/sk/app/vitrio-collection-tracker/id6795606078' },
    ],
  },
];

/** Client projects František contributed to. */
export const contributedApps: App[] = [
  {
    name: 'Itemlist',
    icon: '/images/itemlist.jpg',
    summary: 'Home and small business inventory. Organise, categorise and find items in seconds.',
    links: [
      { label: 'Website', href: 'https://www.getitemlist.app/' },
      { label: 'App Store', href: 'https://apps.apple.com/app/id1548649551' },
    ],
  },
  {
    name: 'QR Genie',
    icon: '/images/qrgenie.png',
    summary: 'Custom-designed QR codes that boost scan rates by up to 200%.',
    links: [
      { label: 'Website', href: 'https://www.qrgenie.app/' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/qr-code-generator-qrgenie/id6740281687' },
    ],
  },
];

// MARK: - Subpages
// Slugs must stay exactly as they were on WordPress: App Store Connect and Google Play link to them.

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  /** Short label for the site footer; pages without one are not listed there. */
  footerLabel?: string;
}

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy-for-securedoc',
    title: 'Privacy Policy for SecureDoc',
    description: 'How SecureDoc handles your information.',
    footerLabel: 'Privacy: SecureDoc',
  },
  {
    slug: 'terms-of-use-eula-for-securedoc',
    title: 'Terms of Use (EULA) for SecureDoc',
    description: 'Terms of use and end user licence agreement for SecureDoc.',
  },
  {
    slug: 'privacy-policy-stillhere',
    title: 'Privacy Policy – StillHere',
    description: 'How Still Here — For You handles your information on iPhone.',
    footerLabel: 'Privacy: Still Here',
  },
  {
    slug: 'privacy-policy-stillhere-android',
    title: 'Privacy Policy – StillHere (Android)',
    description: 'How Still Here — For You handles your information on Android.',
  },
  {
    slug: 'terms-and-conditions-stillhere',
    title: 'Terms and Conditions – StillHere',
    description: 'Terms and conditions for Still Here — For You.',
  },
  {
    slug: 'privacy-policy-vitrio',
    title: 'Privacy Policy – Vitrio',
    description: 'How Vitrio handles your information.',
    footerLabel: 'Privacy: Vitrio',
  },
];

export interface LandingPage {
  slug: string;
  title: string;
  description: string;
}

/** App landing pages. Their HTML is self-contained (own styles), so they render without the site chrome. */
export const landingPages: LandingPage[] = [
  {
    slug: 'securedoc-scanner-vault',
    title: 'SecureDoc – Scanner & Vault',
    description: 'Scan, store and organise documents in a secure vault that works 100% offline.',
  },
  {
    slug: 'still-here-app',
    title: 'Still Here — For You',
    description: 'A simple daily check-in that lets your loved ones know you are okay.',
  },
  {
    slug: 'vitrio',
    title: 'Vitrio — Catalog What You Collect',
    description: 'Catalogue vinyl, LEGO, whisky, retro games and board games. Scan a barcode and the record fills itself in.',
  },
];
