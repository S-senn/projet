const express = require("express");
const cors = require("cors");

const server = express();
const PORT = 3001;

// Liste des utilisateurs (stockée en mémoire)
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "admin", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user", status: "inactive" }
];

// Middleware
server.use(cors());
server.use(express.json());

// Route pour récupérer tous les utilisateurs
server.get("/users", (req, res) => {
    res.json(users);
});

// Route pour ajouter un nouvel utilisateur
server.post("/users/register", (req, res) => {
    const { name, email, role, status } = req.body;

    if (!name || !email || !role || !status) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const newUser = {
        id: Date.now(), // Génère un ID unique
        name,
        email,
        role,
        status
    };

    users.push(newUser); // Ajoute le nouvel utilisateur à la liste
    res.status(201).json(newUser);
});

// Route pour supprimer un utilisateur
server.delete("/users/delete/:id", (req, res) => {
    const { id } = req.params;
    const initialLength = users.length;
    users = users.filter((user) => user.id !== parseInt(id));

    if (users.length === initialLength) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    res.json({ message: "Utilisateur supprimé" });
});

// Lancer le serveur
server.listen(PORT, () => {
    console.log(`Backend démarré sur le port ${PORT}`);
});
