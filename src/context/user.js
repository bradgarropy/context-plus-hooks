import React from "react"
import PropTypes from "prop-types"
import {useState, createContext} from "react"

const me = {
    firstName: "Brad",
    lastName: "Garropy",
    email: "bradgarropy@gmail.com",
}

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    const login = () => {
        console.log("login")
        setUser(me)
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
    children: PropTypes.node.isRequired,
}

export {UserContext, UserProvider}
