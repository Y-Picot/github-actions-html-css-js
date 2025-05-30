# GitHub Actions pour HTML/CSS/JS

Une démonstration complète et didactique de l'intégration des GitHub Actions pour automatiser les tests, le linting et la validation de code dans un projet web front-end. Ce projet sert d'exemple pratique pour mettre en place une pipeline CI/CD robuste.

## 🔧 Statut des Actions GitHub

![Tests Unitaires](https://github.com/Y-Picot/github-actions-html-css-js/workflows/unit_tests/badge.svg)
![Linting](https://github.com/Y-Picot/github-actions-html-css-js/workflows/super_linter_hcjs/badge.svg)
![Tests Deno](https://github.com/Y-Picot/github-actions-html-css-js/workflows/deno_lint/badge.svg)
![Statut des Actions](https://img.shields.io/github/actions/workflow/status/Y-Picot/github-actions-html-css-js/unit_tests.yml?branch=main)

## 🚀 Technologies utilisées

- **HTML5** - Structure sémantique des pages web
- **CSS3** - Styles et mise en page responsive
- **JavaScript ES6+** - Logique interactive côté client
- **Jest** - Framework de tests unitaires
- **Deno** - Runtime JavaScript moderne et sécurisé
- **GitHub Actions** - Pipeline CI/CD automatisée
- **Super-Linter** - Validation multi-langages

## ✨ Fonctionnalités

- **Tests automatisés** - Exécution de tests unitaires avec Jest et Deno
- **Linting continu** - Vérification automatique du code avec Super-Linter
- **Pipeline CI/CD** - Intégration et déploiement continus via GitHub Actions
- **Multi-environnements** - Support des runtimes Node.js et Deno
- **Badges de statut** - Visualisation en temps réel de l'état du projet
- **Documentation complète** - Guide détaillé pour l'utilisation et la contribution

## 📦 Prérequis

- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn** pour la gestion des dépendances
- **Deno** (optionnel, pour les tests Deno)
- **Git** pour le contrôle de version
- Compte **GitHub** avec accès aux Actions

## 🛠️ Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Y-Picot/github-actions-html-css-js.git
   ```

2. **Naviguer dans le dossier**
   ```bash
   cd github-actions-html-css-js
   ```

3. **Installer les dépendances**
   ```bash
   npm install
   ```

4. **Vérifier l'installation**
   ```bash
   npm run test-jest
   ```

## 💡 Utilisation

### Exécution des tests

#### Tests Jest (Node.js)
```bash
npm run test-jest
```
Exécute la suite complète de tests unitaires avec Jest et génère un rapport de couverture.

#### Tests Deno
```bash
npm run test-deno
```
ou directement avec Deno :
```bash
deno test
```

### Validation du code

#### Linting automatique
Le linting s'exécute automatiquement lors des pushs sur la branche `main` via GitHub Actions.

#### Linting local (si configuré)
```bash
npm run lint
```

### Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run test-jest` | Tests unitaires avec Jest |
| `npm run test-deno` | Tests unitaires avec Deno |
| `npm run lint` | Vérification du code (si configuré) |
| `npm start` | Démarre le serveur de développement (si configuré) |

## 📁 Structure du projet

```
github-actions-html-css-js/
├── .github/
│   └── workflows/          # Fichiers de configuration GitHub Actions
│       ├── unit_tests.yml  # Pipeline de tests Jest
│       ├── super_linter_hcjs.yml # Pipeline de linting
│       └── deno_lint.yml   # Pipeline de tests Deno
├── src/                    # Code source
│   ├── index.html         # Page principale
│   ├── style.css          # Feuilles de style
│   └── script.js          # Scripts JavaScript
├── tests/                  # Tests unitaires
│   ├── jest/              # Tests Jest
│   └── deno/              # Tests Deno
├── package.json           # Configuration npm
├── .gitignore            # Fichiers à ignorer
├── README.md             # Documentation
└── LICENSE               # Licence du projet
```

## ⚙️ Configuration des GitHub Actions

### Workflows automatisés

1. **Tests Unitaires** (`unit_tests.yml`)
   - Exécution des tests Jest
   - Génération de rapports de couverture
   - Compatible multi-OS (Ubuntu, Windows, macOS)

2. **Super-Linter** (`super_linter_hcjs.yml`)
   - Validation HTML, CSS, JavaScript
   - Détection d'erreurs de syntaxe
   - Vérification des bonnes pratiques

3. **Tests Deno** (`deno_lint.yml`)
   - Tests avec le runtime Deno
   - Validation TypeScript native
   - Sécurité renforcée

## 🎨 Conventions de développement

### HTML
- **Nommage** : Classes et IDs en `kebab-case`
- **Structure** : HTML5 sémantique
- **Accessibilité** : Attributs ARIA appropriés

### CSS
- **Méthodologie** : BEM (Block Element Modifier)
- **Nommage** : Classes en `kebab-case`
- **Organisation** : Feuilles de style modulaires

### JavaScript
- **Variables/Fonctions** : `camelCase`
- **Classes** : `PascalCase`
- **Constantes** : `UPPER_SNAKE_CASE`
- **Fichiers** : `kebab-case.js`

### Dépôt
- **Nom** : Format `kebab-case`
- **Branches** : `feature/nom-fonctionnalite`
- **Commits** : Messages descriptifs en français

## 🚫 Fichiers ignorés

Le projet exclut automatiquement :
- `node_modules/` - Dépendances Node.js
- `*.log` - Fichiers de logs
- `.deno_modules/`, `.deno_test_cache/` - Cache Deno
- `.DS_Store`, `Thumbs.db` - Fichiers système
- `coverage/` - Rapports de couverture
- `build/`, `dist/` - Dossiers de build

## 🤝 Contribution

Les contributions sont encouragées ! Pour contribuer :

1. **Fork** le projet
2. **Créez** votre branche (`git checkout -b feature/amelioration`)
3. **Testez** vos modifications (`npm run test-jest`)
4. **Committez** (`git commit -m 'Ajout d'une fonctionnalité'`)
5. **Poussez** (`git push origin feature/amelioration`)
6. **Ouvrez** une Pull Request

### Checklist avant PR
- [ ] Tests passent localement
- [ ] Code respecte les conventions
- [ ] Documentation mise à jour
- [ ] Badges de statut fonctionnels

### Suggestions d'améliorations
- Ajout de tests end-to-end avec Playwright
- Intégration de Lighthouse pour les performances
- Pipeline de déploiement automatique
- Analyse de sécurité avec CodeQL
- Support de TypeScript

## 🎯 Objectifs pédagogiques

Ce projet démontre :
- **Configuration CI/CD** avec GitHub Actions
- **Tests multi-environnements** (Node.js vs Deno)
- **Automatisation du linting** et validation
- **Intégration continue** et bonnes pratiques
- **Documentation technique** complète

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Y-Picot** - [GitHub](https://github.com/Y-Picot)

---

⭐ N'hésitez pas à donner une étoile si ce projet vous aide à comprendre GitHub Actions !
