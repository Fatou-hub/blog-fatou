# Blog Fatou — QA Reliability Engineer

Blog éditorial sobre et élégant, construit avec Next.js 14 (App Router), TypeScript strict et TailwindCSS.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript (`"strict": true`)
- **Style** : TailwindCSS + CSS custom (design tokens)
- **Contenu** : Fichiers Markdown dans `/content/articles/`
- **Parser** : gray-matter + remark + remark-html
- **Polices** : DM Serif Display + DM Sans (Google Fonts)
- **Déploiement** : Vercel

## Architecture

Le projet suit une architecture hexagonale (Ports & Adapters) :

```
src/
  app/                          # Pages Next.js (App Router)
    layout.tsx                  # Layout global avec header/footer
    page.tsx                    # Page d'accueil (liste des articles)
    about/page.tsx              # Page À propos
    articles/[slug]/page.tsx    # Page article dynamique
  components/                   # Composants partagés
    SiteHeader.tsx
    SiteFooter.tsx
    mdx/                        # Composants spéciaux pour les articles
      PullQuote.tsx
      DataGrid.tsx
      Comparison.tsx
      SectionDivider.tsx
  features/
    articles/
      types/article.types.ts    # Types domaine (ArticleMetadata, Article, Slug)
      services/
        articleService.interface.ts   # Port (contrat)
        articleService.ts             # Adapter (implémentation fs)
      hooks/
        useArticles.ts          # Récupération de la liste (server-side)
        useArticle.ts           # Récupération par slug (server-side)
      ui/
        ArticleCard.tsx         # Carte d'aperçu sur la page d'accueil
        ArticleHeader.tsx       # Hero sombre de la page article
        ArticleBody.tsx         # Corps de l'article (HTML parsé)

content/
  articles/                     # Fichiers Markdown des articles
    ia-entreprise-heresie-ecologique-2026.md
```

## Ajouter un nouvel article

### 1. Créer le fichier Markdown

Créez un fichier `.md` dans `content/articles/` avec le nom qui sera le **slug** de l'URL.

Exemple : `content/articles/mon-nouvel-article.md`
→ accessible sur `/articles/mon-nouvel-article`

### 2. Remplir le frontmatter

```markdown
---
title: "Titre de l'article"
slug: "mon-nouvel-article"
date: "2026-04-15"
kicker: "Rubrique · Sous-rubrique"
author: "Fatou"
authorTitle: "QA Reliability Engineer"
readingTime: "6 min"
tags: ["Tag1", "Tag2", "Tag3"]
excerpt: "Résumé court affiché sur la carte de la page d'accueil."
---
```

> ⚠️ Le champ `slug` doit correspondre exactement au nom du fichier (sans `.md`).

### 3. Écrire le contenu

Le contenu supporte le Markdown standard **et** les blocs HTML suivants :

#### Pull Quote
```html
<div class="pullquote">
  <p>Citation mise en valeur, fond crème avec bordure accent.</p>
</div>
```

#### Data Grid (chiffres clés)
```html
<div class="data-grid">
  <div class="data-item">
    <span class="data-number">42%</span>
    <span class="data-label">Description du chiffre</span>
  </div>
  <div class="data-item">
    <span class="data-number">×3</span>
    <span class="data-label">Autre métrique</span>
  </div>
</div>
```

#### Comparison (deux colonnes)
```html
<div class="comparison">
  <div class="comparison-col">
    <h4>Option A</h4>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  </div>
  <div class="comparison-col highlight">
    <h4>Option B (recommandée)</h4>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  </div>
</div>
```

#### Section Divider
```html
<div class="section-divider"><span>II</span></div>
```

#### Paragraphe d'introduction (lead)
```html
<p class="lead">Texte d'introduction mis en valeur avec bordure accent.</p>
```

### 4. Vérifier localement

```bash
npm run dev
# Ouvrir http://localhost:3000
```

L'article apparaît automatiquement sur la page d'accueil (trié par date décroissante).

## Développement local

```bash
npm install
npm run dev
```

## Linting & type-check

```bash
npm run lint
npx tsc --noEmit
```

## Build de production

```bash
npm run build
npm start
```
