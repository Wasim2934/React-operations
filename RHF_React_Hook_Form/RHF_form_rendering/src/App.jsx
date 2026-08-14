import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState(() => {
    try {
      const raw = localStorage.getItem("users");
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Failed to read users from localStorage:", err);
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("users", JSON.stringify(users));
    } catch (err) {
      console.error("Failed to save users to localStorage:", err);
    }
  }, [users]);

  // CREATE USER
  const handleAddUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    setShowForm(false);
  };

  // DELETE USER
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );
  };

  // OPEN FORM FOR UPDATE
  const handleUpdateClick = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  // UPDATE USER
  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );

    setEditingUser(null);
    setShowForm(false);
  };

  // OPEN FORM FOR CREATE
  const handleCreateUser = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCreateUser={handleCreateUser} />

      <main className="">
        {showForm ? (
          <Form
            editingUser={editingUser}
            onAddUser={handleAddUser}
            onUpdateUser={handleUpdateUser}
          />
        ) : (
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {users.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">
                No users available. Click "Create User" to add one.
              </p>
            ) : (
              users.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onUpdate={handleUpdateClick}
                  onDelete={handleDeleteUser}
                />
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;