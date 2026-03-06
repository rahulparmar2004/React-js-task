import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, set, onValue, remove, update } from "firebase/database";
import { app } from "../Componet/Firebase";

const db = getDatabase(app);

export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {

        const todoRef = ref(db, "todos");

        onValue(todoRef, (snapshot) => {

            const data = snapshot.val();

            if (data) {

                const list = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...value
                }));

                setTodos(list);

            } else {
                setTodos([]);
            }

        });

    }, []);

    function saveTodo() {

        if (todo.trim() === "") return;

        if (editId) {

            update(ref(db, `todos/${editId}`), {
                text: todo
            });

            setEditId(null);

        } else {

            set(push(ref(db, "todos")), {
                text: todo
            });

        }

        setTodo("");

    }

    function deleteTodo(id) {

        remove(ref(db, `todos/${id}`));

    }

    function editTodo(item) {

        setTodo(item.text);
        setEditId(item.id);

    }

    return (

        <div style={styles.container}>

            <div style={styles.card}>

                <h2
                    style={{
                        textAlign: "center",
                        margin: "15px 0",
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#333",
                        letterSpacing: "1px"
                    }}
                >
                    My Todo List
                </h2>
                <div style={styles.inputBox}>

                    <input
                        type="text"
                        placeholder="Enter Todo..."
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        style={styles.input}
                    />

                    <button onClick={saveTodo} style={styles.addBtn}>
                        {editId ? "Update" : "Add"}
                    </button>

                </div>

                <ul style={styles.list}>

                    {todos.map((item) => (

                        <li key={item.id} style={styles.todoItem}>

                            <span>{item.text}</span>

                            <div>

                                <button
                                    onClick={() => editTodo(item)}
                                    style={styles.editBtn}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteTodo(item.id)}
                                    style={styles.deleteBtn}
                                >
                                    Delete
                                </button>

                            </div>

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}

const styles = {

    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#667eea,#764ba2)"
    },

    card: {
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        width: "400px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    },


    inputBox: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
    },

    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },

    addBtn: {
        background: "#4CAF50",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "8px",
        cursor: "pointer"
    },

    list: {
        listStyle: "none",
        padding: 0
    },

    todoItem: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "10px",
        background: "#f5f5f5",
        borderRadius: "8px"
    },

    editBtn: {
        background: "#2196F3",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "6px",
        marginRight: "5px",
        cursor: "pointer"
    },

    deleteBtn: {
        background: "#ff4d4d",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "6px",
        cursor: "pointer"
    }

};
