import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-header-name">
          AIByFatou
        </Link>
        <nav className="site-header-nav" aria-label="Navigation principale">
          <Link href="/" className="nav-link">
            Articles
          </Link>
          <Link href="/about" className="nav-link">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
