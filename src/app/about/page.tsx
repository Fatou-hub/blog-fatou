import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Fatou — QA Reliability Engineer spécialisée en systèmes fiables, sobres et durables.',
};

export default function AboutPage() {
  return (
    <div className="about-wrap">
      <p className="about-label">À propos</p>
      <h1 className="about-title">Ingénieure de la fiabilité,<br />pas de la performance spectacle.</h1>

      <div className="about-body">
        <p>
          Je m&apos;appelle <strong>Fatou</strong>, et je suis QA Reliability Engineer — un métier
          qui se situe à l&apos;intersection de la qualité logicielle, de l&apos;ingénierie des
          systèmes et de la responsabilité numérique.
        </p>
        <p>
          Mon travail consiste à construire des couches de fiabilité dans des environnements
          qui intègrent l&apos;IA — avec une attention particulière portée à la{' '}
          <strong>sobriété technique</strong>, à la maintenabilité du code, et aux coûts réels
          d&apos;infrastructure que les équipes ignorent trop souvent.
        </p>
        <p>
          Ce blog est un espace de réflexion sur la tech telle qu&apos;elle est vraiment
          pratiquée — loin des annonces de conférences et des slides optimistes. J&apos;écris
          sur la fiabilité, l&apos;éthique numérique, et les arbitrages concrets que font
          (ou devraient faire) les organisations qui déploient des systèmes critiques.
        </p>
        <p>
          Je crois que le vrai luxe technique, en 2026, ce n&apos;est pas d&apos;avoir le plus
          d&apos;IA. C&apos;est d&apos;avoir le <strong>moins de complexité inutile</strong> — des
          systèmes qui tiennent, qui coûtent ce qu&apos;ils annoncent, et dont la valeur ne
          s&apos;évapore pas au prochain changement de fournisseur.
        </p>
      </div>

      <div className="about-contact">
        <p className="about-contact-label">Contact &amp; réseau</p>
        <a
          href="https://www.linkedin.com/in/fatou-cisse-developpement-web-fullstack "
          target="_blank"
          rel="noopener noreferrer"
          className="about-contact-link"
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}
