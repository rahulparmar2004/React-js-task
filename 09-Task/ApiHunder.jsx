import React, { useState, useEffect } from "react";

function Apihunter() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", email: "" });
    const [editUser, setEditUser] = useState(null);

    // Fetch Users
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // Add User
    const addUser = () => {
        if (!newUser.name || !newUser.email) return alert("Fill all fields");

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => setUsers([...users, data]));

        setNewUser({ name: "", email: "" });
    };

    // Update User
    const updateUser = () => {
        fetch(`http://localhost:5000/users/${editUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser),
        })
            .then(res => res.json())
            .then(data => {
                setUsers(users.map(u => (u.id === data.id ? data : u)));
                setEditUser(null);
            });
    };

    // Delete User
    const deleteUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, { 
            method: "DELETE" 
        })
            .then(() => setUsers(users.filter(u => u.id !== id)));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
                🚀 API Hunter CRUD
            </h1>

            {/* Add User Form */}
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mb-10">
                <h2 className="text-xl font-semibold mb-4">Add New User</h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={newUser.name}
                        onChange={(e) =>
                            setNewUser({ ...newUser, name: e.target.value })
                        }
                        className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) =>
                            setNewUser({ ...newUser, email: e.target.value })
                        }
                        className="flex-1 border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />

                    <button
                        onClick={addUser}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Users Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {users.map(u => (
                    <div
                        key={u.id}
                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
                    >
                        <h3 className="text-lg font-bold">{u.name}</h3>
                        <p className="text-gray-500 mt-1">{u.email}</p>

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => setEditUser(u)}
                                className="flex-1 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteUser(u.id)}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {editUser && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
                        <h2 className="text-xl font-bold mb-4">Edit User</h2>

                        <input
                            type="text"
                            value={editUser.name}
                            onChange={(e) =>
                                setEditUser({ ...editUser, name: e.target.value })
                            }
                            className="w-full border p-3 rounded-lg mb-4"
                        />

                        <input
                            type="email"
                            value={editUser.email}
                            onChange={(e) =>
                                setEditUser({ ...editUser, email: e.target.value })
                            }
                            className="w-full border p-3 rounded-lg mb-4"
                        />

                        <div className="flex gap-4">
                            <button
                                onClick={updateUser}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                            >
                                Save
                            </button>

                            <button
                                onClick={() => setEditUser(null)}
                                className="flex-1 bg-gray-300 hover:bg-gray-400 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Apihunter;