# GitHub Actions pour HTML/CSS/JS

Exemple pratique d'automatisation des tests et du linting pour projets web avec GitHub Actions. Pipeline CI/CD complète avec Jest, Deno et Super-Linter.

## 🔧 Statut des Actions

![Tests Unitaires](https://github.com/Y-Picot/github-actions-html-css-js/workflows/unit_tests/badge.svg)
![Linting](https://github.com/Y-Picot/github-actions-html-css-js/workflows/super_linter_hcjs/badge.svg)
![Tests Deno](https://github.com/Y-Picot/github-actions-html-css-js/workflows/deno_lint/badge.svg)
![Statut des Actions](https://img.shields.io/github/actions/workflow/status/Y-Picot/github-actions-html-css-js/unit_tests.yml?branch=main)

## 🚀 Technologies utilisées

- **HTML5/CSS3/JavaScript** - Technologies front-end
- **Jest & Deno** - Frameworks de tests
- **GitHub Actions** - Pipeline CI/CD
- **Super-Linter** - Validation de code

## ✨ Fonctionnalités

- **Tests automatisés** - Jest et Deno en parallèle
- **Linting continu** - Validation automatique du code
- **Multi-environnements** - Support Node.js et Deno
- **Badges de statut** - Suivi visuel en temps réel

## 📦 Prérequis

- Node.js (version 16+) et npm
- Deno (optionnel pour tests Deno)
- Compte GitHub avec Actions activées

## 🛠️ Installation

```bash
git clone https://github.com/Y-Picot/github-actions-html-css-js.git
cd github-actions-html-css-js
npm install
npm run test-jest
```

## 💡 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run test-jest` | Tests unitaires avec Jest |
| `npm run test-deno` | Tests unitaires avec Deno |
| `deno test` | Tests Deno directement |

## 📁 Structure du projet

```
github-actions-html-css-js/
├── .github/workflows/      # GitHub Actions
├── src/                    # Code source HTML/CSS/JS
├── tests/                  # Tests Jest et Deno
├── package.json           # Configuration npm
└── README.md              # Documentation
```

## ⚙️ GitHub Actions configurées

- **Tests Jest** - Tests unitaires Node.js avec couverture
- **Super-Linter** - Validation HTML/CSS/JS automatique  
- **Tests Deno** - Tests avec runtime sécurisé Deno

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/amelioration`)
3. Testez (`npm run test-jest`)
4. Committez (`git commit -m 'Nouvelle fonctionnalité'`)
5. Ouvrez une Pull Request

## 📄 Licence

Licence MIT - voir [LICENSE](LICENSE) pour les détails.

## 👤 Auteur

**Y-Picot** - [GitHub](https://github.com/Y-Picot)

---

⭐ Projet utile ? N'hésitez pas à lui donner une étoile !
