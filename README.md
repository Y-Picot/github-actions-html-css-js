# GitHub Actions HTML/CSS/JS

### Statut des Actions GitHub
![Tests Unitaires](https://github.com/Y-Picot/github-actions-html-css-js/workflows/unit_tests/badge.svg)
![Linting](https://github.com/Y-Picot/github-actions-html-css-js/workflows/super_linter_hcjs/badge.svg)
![Tests Deno](https://github.com/Y-Picot/github-actions-html-css-js/workflows/deno_lint/badge.svg)
![Statut des Actions](https://img.shields.io/github/actions/workflow/status/Y-Picot/github-actions-html-css-js/unit_tests.yml?branch=main)

## Description
Ce projet est un exemple d'utilisation des GitHub Actions pour automatiser les tests, le linting et d'autres tâches pour un projet HTML/CSS/JS. Il est conçu pour être didactique et facile à utiliser.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Y-Picot/github-actions-html-css-js.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd github-actions-html-css-js
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

### Lancer les tests
- Pour exécuter les tests Jest :
  ```bash
  npm run test-jest
  ```
- Pour exécuter les tests Deno :
  ```bash
  deno test
  ```

### Lancer le linting
- Pour vérifier le linting avec Super-Linter :
  Les erreurs de linting seront automatiquement détectées lors des pushs sur la branche `main`.

## Scripts disponibles

### Tests
- **Jest** :
  ```bash
  npm run test-jest
  ```
  Exécute les tests unitaires pour les fichiers JavaScript avec Jest.

- **Deno** :
  ```bash
  npm run test-deno
  ```
  Exécute les tests unitaires pour les fichiers JavaScript avec Deno.

### Fichiers ignorés
Un fichier `.gitignore` a été ajouté pour exclure les fichiers et dossiers suivants :
- `node_modules/`
- Fichiers de logs (`*.log`)
- Dossiers spécifiques à Deno (`.deno_modules/`, `.deno_test_cache/`)
- Fichiers système (`.DS_Store`, `Thumbs.db`)
- Dossiers de couverture (`coverage/`)
- Dossiers de build (`build/`, `dist/`)

## Normes de nommage

### HTML/CSS/JS
- **HTML** : Utilisez des noms de classes et d'identifiants en kebab-case (ex. `main-container`).
- **CSS** : Respectez la méthodologie BEM (Block Element Modifier).
- **JavaScript** : Utilisez le camelCase pour les variables et fonctions, et PascalCase pour les classes.

### Nom du dépôt
- Utilisez des noms descriptifs en kebab-case (ex. `action-git-html-css-js`).

## Contribuer
Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes :
1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité : `git checkout -b feature/ma-fonctionnalite`.
3. Faites vos modifications et testez-les.
4. Soumettez une pull request.
