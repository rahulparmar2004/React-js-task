import React, { useEffect, useContext } from 'react'
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (!currentUser) navigate("/login")
    }, [])

    return (
        children
    )
}

export default ProtectedRoute