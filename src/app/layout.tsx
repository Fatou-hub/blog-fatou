import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Fatou — QA Reliability Engineer',
    template: '%s | Fatou',
  },
  description:
    'Réflexions sur la qualité logicielle, la fiabilité des systèmes et l’éthique numérique. Par Fatou, QA Reliability Engineer.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Fatou — QA Reliability Engineer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
