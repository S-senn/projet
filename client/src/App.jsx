import React, { useState, useEffect } from "react";
import axios from "./axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("Erreur lors de la récupération des utilisateurs :", error));
    }, []);

    const handleUserAdded = (newUser) => {
        // Ajouter le nouvel utilisateur à la liste existante
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div>
            <UserForm onUserAdded={handleUserAdded} />
            <UserList users={users} setUsers={setUsers} />
        </div>
    );
};

export default App;
