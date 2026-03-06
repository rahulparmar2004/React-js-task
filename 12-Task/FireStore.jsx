import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./Firebase";

const db = getFirestore(app);

export default function FireStore() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [born, setBorn] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const sendData = async () => {
        if (!first || !last || !born) {
            alert("Please fill all fields");
            return;
        }

        try {
            await addDoc(collection(db, "User"), {
                first,
                last,
                born: Number(born),
            });

            setFirst("");
            setLast("");
            setBorn("");
            fetchData();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const fetchData = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "User"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setUsers(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={styles.page}>
            {/* Add User Card */}
            <div style={styles.card}>
                <h2 style={styles.title}>Add User</h2>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="First Name"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Last Name"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                />
                <input
                    style={styles.input}
                    type="number"
                    placeholder="Born Year"
                    value={born}
                    onChange={(e) => setBorn(e.target.value)}
                />
                <button style={styles.button} onClick={sendData}>
                    Save User
                </button>
            </div>

            {/* Users List Card */}
            <div style={styles.listCard}>
                <h3 style={styles.listTitle}>Users List</h3>

                {loading && <p style={styles.empty}>Loading users...</p>}
                {!loading && users.length === 0 && <p style={styles.empty}>No users added yet</p>}

                {users.map((user) => (
                    <div key={user.id} style={styles.userRow}>
                        <div style={styles.avatar}>
                            {user.first.charAt(0).toUpperCase()}{user.last.charAt(0).toUpperCase()}
                        </div>
                        <div style={{ flex: 1 }}>
                            <strong style={{ fontSize: "16px" }}>
                                {user.first} {user.last}
                            </strong>
                            <p style={styles.year}>Born: {user.born}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
        padding: "40px",
        flexWrap: "wrap",
        fontFamily: "'Inter', sans-serif",
    },
    card: {
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        padding: "30px",
        borderRadius: "20px",
        width: "320px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.2)",
    },
    title: {
        marginBottom: "20px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "700",
        color: "#fff",
        letterSpacing: "1px",
    },
    input: {
        width: "100%",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
        fontSize: "14px",
    },
    button: {
        width: "100%",
        padding: "12px",
        background: "linear-gradient(135deg,#43e97b,#38f9d7)",
        color: "#000",
        border: "none",
        borderRadius: "10px",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.3s",
    },
    listCard: {
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        padding: "30px",
        borderRadius: "20px",
        width: "320px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255,255,255,0.2)",
    },
    listTitle: {
        marginBottom: "20px",
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "600",
        color: "#fff",
    },
    userRow: {
        display: "flex",
        alignItems: "center",
        padding: "12px",
        marginBottom: "10px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.2)",
    },
    avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#43e97b",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
        fontSize: "16px",
        marginRight: "12px",
    },
    year: {
        margin: 0,
        fontSize: "13px",
        color: "#ddd",
    },
    empty: {
        textAlign: "center",
        color: "#ccc",
        fontStyle: "italic",
    },
};
