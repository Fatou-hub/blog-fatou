import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <div className="not-found-wrap">
      <p className="home-hero-label">404</p>
      <h1 className="not-found-title">Page introuvable</h1>
      <p className="not-found-text">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="not-found-link">
        ← Retour à l&apos;accueil
      </Link>
    </div>
  );
}
