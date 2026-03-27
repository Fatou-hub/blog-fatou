# Guide de déploiement sur Vercel

Ce guide détaille les étapes exactes pour déployer le blog sur Vercel (plan gratuit Hobby).

## Prérequis

- Un compte [Vercel](https://vercel.com) (gratuit)
- Un compte [GitHub](https://github.com) (ou GitLab / Bitbucket)
- Node.js 18+ installé localement

---

## Étape 1 — Préparer le dépôt Git

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "feat: initial blog setup"
```

Créez un nouveau dépôt sur GitHub (sans README, sans .gitignore), puis :

```bash
git remote add origin https://github.com/votre-nom/blog-fatou.git
git branch -M main
git push -u origin main
```

---

## Étape 2 — Importer le projet sur Vercel

1. Connectez-vous sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Add New… → Project"**
3. Sélectionnez votre dépôt GitHub `blog-fatou`
4. Vercel détecte automatiquement Next.js — aucune configuration nécessaire
5. Laissez les paramètres par défaut :
   - **Framework Preset** : Next.js ✓
   - **Root Directory** : `./` ✓
   - **Build Command** : `next build` ✓
   - **Output Directory** : `.next` ✓
6. Cliquez sur **"Deploy"**

Le premier déploiement prend environ 1-2 minutes.

---

## Étape 3 — Vérifier le déploiement

Une fois déployé, Vercel fournit une URL de type :
```
https://blog-fatou-xxxx.vercel.app
```

Vérifiez :
- [ ] La page d'accueil s'affiche avec la liste des articles
- [ ] L'article est accessible via `/articles/ia-entreprise-heresie-ecologique-2026`
- [ ] La page `/about` s'affiche correctement
- [ ] Le design correspond à la référence (polices DM Serif Display + DM Sans)
- [ ] Le site est responsive sur mobile

---

## Étape 4 — (Optionnel) Configurer un domaine personnalisé

1. Dans le dashboard Vercel, allez dans **Settings → Domains**
2. Ajoutez votre domaine (ex: `fatou.dev`)
3. Suivez les instructions pour configurer les DNS chez votre registrar :
   - Ajoutez un enregistrement `A` pointant vers `76.76.21.21`
   - Ou un `CNAME` `www` vers `cname.vercel-dns.com`
4. Le certificat SSL est automatiquement généré par Vercel (Let's Encrypt)

---

## Déploiements continus

Après configuration, **chaque `git push` sur `main` déclenche automatiquement un nouveau déploiement** sur Vercel.

Pour publier un nouvel article :

```bash
# 1. Créez le fichier Markdown
echo "---\ntitle: Mon article\n..." > content/articles/mon-article.md

# 2. Commitez et poussez
git add content/articles/mon-article.md
git commit -m "feat(content): add article mon-article"
git push
```

Vercel redéploie en ~60 secondes. L'article est en ligne.

---

## Dépannage

### Le build échoue avec une erreur TypeScript

```bash
# Vérifiez localement
npx tsc --noEmit
npm run build
```

Corrigez les erreurs TypeScript avant de re-pusher.

### Les polices Google Fonts ne se chargent pas

Vérifiez la connexion réseau. Les polices sont chargées depuis `fonts.googleapis.com` — assurez-vous que votre `Content-Security-Policy` (si configurée) l'autorise.

### L'article n'apparaît pas sur la page d'accueil

- Vérifiez que le fichier `.md` est bien dans `content/articles/`
- Vérifiez que le frontmatter contient tous les champs requis (`title`, `slug`, `date`, `kicker`, `author`, `authorTitle`, `readingTime`, `tags`)
- Vérifiez que le champ `slug` correspond exactement au nom du fichier (sans `.md`)

### Erreur 404 sur la page d'un article

- Vérifiez l'URL : `/articles/[slug]` où `[slug]` est la valeur du champ `slug` dans le frontmatter
- Vérifiez que le nom du fichier correspond au slug

---

## Variables d'environnement

Aucune variable d'environnement n'est requise. Le blog est 100% statique, sans base de données ni API externe.

Si vous souhaitez ajouter une variable à l'avenir (ex: URL d'analytics), ajoutez-la dans :
- **Vercel Dashboard → Settings → Environment Variables**
- Localement dans un fichier `.env.local` (non commité)
