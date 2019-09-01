import React from "react"
import PropTypes from "prop-types"
import {createContext, useState} from "react"
import brad from "../user.json"

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    const login = () => {
        console.log("login")
        setUser(brad)
    }

    const logout = () => {
        console.log("logout")
        setUser()
    }

    const context = {
        user,
        login,
        logout,
    }

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
}

export {UserContext, UserProvider}
