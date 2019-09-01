import React from "react"
import PropTypes from "prop-types"
import {createContext, useState} from "react"

const NotificationContext = createContext()

const NotificationProvider = ({children}) => {
    const [notification, setNotification] = useState()

    const context = {
        notification,
        setNotification,
    }

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    )
}

NotificationProvider.propTypes = {
    children: PropTypes.node,
}

export {NotificationContext, NotificationProvider}
