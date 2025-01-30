# Todo List Application

Cette application est une API de gestion de tâches (Todo) avec une interface frontend. Elle utilise Express pour le backend, Playwright pour les tests end-to-end, et JSDoc pour la documentation.

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```
2. Installez les dépendances :

   ```sh
   npm install
   ```

3. Installez les navigateurs Playwright :
   ```sh
   npx playwright install --with-deps
   ```

## Installation

### Démarrer le serveur

Pour démarrer le serveur en mode développement :

```sh
npm run start:dev
```

Sinon vous pouvez démarrer le serveur avec

```sh
npm start
```

### Frontend

Pour accéder à l'interface frontend, démarrez le serveur et accédez à :
[http://localhost:3000](http://localhost:3000)

### Documentation

La documentation JSDoc est générée dans le dossier docs. Pour générer la documentation :

```sh
npm run docs
```

Si le serveur est lancé, accédez à [http://localhost:3000/docs](http://localhost:3000/docs) pour consulter la documentation.

### Tests

Pour exécuter les tests unitaires :

```sh
npm test
```

Pour exécuter les tests end-to-end :

```sh
npm run test:e2e
```

### API

#### Endpoints

- **GET /api/todos** : Récupère toutes les tâches.
- **GET /api/todos/:id** : Récupère une tâche par ID.
- **POST /api/todos** : Crée une nouvelle tâche.
- **PUT /api/todos/:id** : Met à jour une tâche par ID.
- **DELETE /api/todos/:id** : Supprime une tâche par ID.
- **DELETE /api/todos** : Réinitialise toutes les tâches.

#### Swagger

L'API est documentée avec Swagger. Pour accéder à la documentation Swagger, démarrez le serveur et accédez à :
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)
