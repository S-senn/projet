import React from "react";
import axios from "../axios";
import "./card.css";

const UserList = ({ users, setUsers }) => {
    // Fonction pour supprimer un utilisateur
    const deleteUser = (id) => {
        axios.delete(`/users/delete/${id}`)
            .then(() => setUsers(users.filter((user) => user.id !== id)))
            .catch((error) => console.error("Erreur lors de la suppression :", error));
    };

    return (
        <div className="user-list">
            <h2>Liste des utilisateurs</h2>
            {users.map((user) => (
                <div key={user.id} className="card">
                    <h3>{user.name}</h3>
                    <p>Email : {user.email}</p>
                    <p>Rôle : {user.role}</p>
                    <p>Statut : {user.status}</p>
                    <button onClick={() => deleteUser(user.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
};

export default UserList;
