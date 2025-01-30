# ✅ Todo App - API REST avec CI/CD & Documentation

![GitHub Actions](https://img.shields.io/github/actions/workflow/status/ton-repo/todo-app/ci.yml?branch=master)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![Jest](https://img.shields.io/badge/Tests-Jest-orange)
![Playwright](https://img.shields.io/badge/E2E-Playwright-purple)
![Swagger](https://img.shields.io/badge/Documentation-Swagger-yellow)

## 📝 Description du projet
**Todo App** est une API REST permettant de **gérer une liste de tâches** (**CRUD**).  
Elle est accompagnée d'un **frontend minimaliste** en HTML/TailwindCSS et inclut :
- 📡 **API en Node.js / Express**
- 🧪 **Tests unitaires (Jest) & End-to-End (Playwright)**
- 🔄 **Pipeline CI/CD (GitHub Actions)**
- 📖 **Documentation API avec Swagger & JSDoc**

---

## 🚀 Installation & Démarrage

### 1️⃣ **Pré-requis**
- **Node.js** (version 20+)
- **npm** (installé avec Node.js)
- **Git** (si clonage depuis GitHub)

### 2️⃣ **Installation**
Cloner le projet et installer les dépendances :
```sh
git clone https://github.com/ton-repo/todo-app.git
cd todo-app
npm install
```

### 3️⃣ **Démarrage**
**Lancer le serveur API** (port **3000** par défaut) :
```sh
node src/server.js
```
**Lancer le frontend** (port **3001**) :
```sh
node server.front.js
```
📌 Ouvrir [http://localhost:3001](http://localhost:3001) pour voir l'interface utilisateur.

---

## 🔧 API - Endpoints

### 📌 **Base URL : `http://localhost:3000/api`**
| Méthode | Endpoint        | Description |
|---------|---------------|-------------|
| **GET**    | `/tasks`          | 🔍 Récupère toutes les tâches |
| **POST**   | `/tasks`          | ➕ Crée une nouvelle tâche |
| **PUT**    | `/tasks/:id`      | ✏️ Met à jour une tâche |
| **DELETE** | `/tasks/:id`      | ❌ Supprime une tâche |

### 📝 **Exemple d'une tâche**
```json
{
  "id": 1,
  "title": "Acheter du lait",
  "completed": false
}
```

---

## 🧪 Tests (Jest & Playwright)
### 📌 **1️⃣ Lancer les tests unitaires (Jest)**
```sh
npm run test
```
📌 **Tester les endpoints API avec `supertest` et `jest`.**  
Les tests se trouvent dans **`tests/api/api.test.js`**.

### 📌 **2️⃣ Lancer les tests End-to-End (Playwright)**
```sh
npm run test:e2e
```

---

## 📖 Documentation API (Swagger & JSDoc)

### 📌 **1️⃣ Documentation Swagger**
Démarre l'API (`npm start`) puis ouvre :  
📌 **Swagger UI :** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### 📌 **2️⃣ Générer la documentation JSDoc**
```sh
npm run generate-docs
```
📌 **La documentation sera générée dans `docs/`** et peut être ouverte avec un navigateur.

---

## ⚙️ CI/CD - Pipeline GitHub Actions
Le projet inclut un pipeline CI/CD avec **GitHub Actions** :

| Étape | Description |
|---------|-------------|
| **✔️ Lint & Tests API (Jest)** | Vérifie le code et exécute les tests unitaires |
| **✔️ Tests End-to-End (Playwright)** | Exécute les tests sur le frontend |
| **✔️ Génération de la documentation** | Génère la documentation API (JSDoc) |

📌 **Le fichier CI/CD est dans `.github/workflows/ci.yml`.**



