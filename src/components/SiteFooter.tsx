export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-copy">
          © {currentYear} AIByFatou.com — QA Reliability Engineer
        </p>
        <nav className="site-footer-links" aria-label="Liens externes">
          <a
            href="https://www.linkedin.com/in/fatou-cisse-developpement-web-fullstack "
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a
            href="https://github.com/AIbyFatou"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
