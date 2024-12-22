Gestion des Utilisateurs (React + Express.js + Docker)
Ce projet est une application de gestion des utilisateurs avec un frontend en React, un backend en Express.js, et une base de données MySQL intégrée via Docker.

Fonctionnalités
Ajout d'utilisateurs : Remplis un formulaire pour ajouter un utilisateur avec un nom, un email, un rôle, et un statut.
Liste des utilisateurs : Affiche les utilisateurs sous forme de cartes avec leurs informations.
Modification d'utilisateurs : Modifie les informations des utilisateurs existants directement depuis la liste.
Suppression d'utilisateurs : Supprime un utilisateur de la liste.
Stockage des données dans une base MySQL persistante.

Technologies Utilisées
Frontend

React.js
Axios (pour les requêtes HTTP)
CSS pour la mise en page

Backend

Express.js
Node.js
Base de Données
MySQL
phpMyAdmin

Infrastructure

Docker
Docker Compose

Prérequis
Docker installé sur votre machine
Installation et Démarrage
1. Cloner le projet
2. Lancer avec Docker Compose
Lance les conteneurs avec :
docker-compose up --build
Accède aux services :
Frontend : http://localhost
Backend : http://localhost:3001
phpMyAdmin : http://localhost:8080
Structure du Projet
bash
├── client                 # Code du frontend (React)
│   ├── src
│   │   ├── components     # Composants React (UserForm, UserList)
│   │   ├── App.js         # Composant principal React
│   │   └── index.js       # Point d'entrée du frontend
│   └── Dockerfile         # Fichier Docker pour le frontend
├── server                 # Code du backend (Express.js)
│   ├── index.js           # Fichier principal du backend
│   └── Dockerfile         # Fichier Docker pour le backend
├── docker-compose.yml     # Configuration Docker Compose
└── README.md              # Documentation du projet
Base de Données
Configuration
La base de données MySQL est configurée avec les paramètres suivants (dans docker-compose.yml) :
Utilisateur : root
Mot de passe : root123
Base de données : usersdb

phpMyAdmin
Accède à http://localhost:8080 pour gérer la base de données avec phpMyAdmin.
Identifiants :
Serveur : mysql
Utilisateur : root
Mot de passe : root123
Structure de la Table
Nom de la table : users


Colonnes :
id : INT, clé primaire, auto-incrémentée
name : VARCHAR(255)
email : VARCHAR(255), unique
role : ENUM('user', 'admin')
status : ENUM('active', 'inactive')


API du Backend
Liste des Utilisateurs
GET /users
Réponse : Liste des utilisateurs
json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "status": "active"
  }
]
Ajouter un Utilisateur
POST /users/register
Corps de la requête :
json
Copier le code
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "status": "active"
}
Réponse : Utilisateur ajouté
Modifier un Utilisateur
PUT /users/update/:id
Corps de la requête :


{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
Réponse : Confirmation de la mise à jour
Supprimer un Utilisateur
DELETE /users/delete/:id
Remplacez :id par l'ID de l'utilisateur à supprimer.
Réponse : Confirmation de la suppression

Tester l'Application
Frontend :

Accède à http://localhost.
Ajoute, modifie, ou supprime des utilisateurs via l'interface.

Backend :
Tester les routes avec Postman ou curl.

