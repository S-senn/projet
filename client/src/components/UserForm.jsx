import React, { useState } from "react";
import axios from "../axios";
import "./card.css";

const UserForm = ({ onUserAdded }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");
    const [status, setStatus] = useState("active");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/users/register", { name, email, role, status })
            .then((response) => {
                alert("Utilisateur ajouté !");
                setName("");
                setEmail("");
                setRole("user");
                setStatus("active");

                // Appeler le callback avec les données du nouvel utilisateur
                if (onUserAdded) {
                    onUserAdded(response.data);
                }
            })
            .catch((error) => console.error("Erreur lors de l'ajout :", error));
    };

    return (
        <form onSubmit={handleSubmit} className="card">
            <h2>Ajouter un utilisateur</h2>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">Utilisateur</option>
                <option value="admin">Administrateur</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default UserForm;
