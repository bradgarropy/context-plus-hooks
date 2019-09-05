import React, {createContext, useContext, useCallback, useMemo, useEffect} from "react"
import PropTypes from "prop-types"

import {UserContext} from "./user"
import {NotificationContext} from "./notification"

const UserNotificationContext = createContext()

const UserNotificationProvider = ({children}) => {
    const {notification, setNotification} = useContext(NotificationContext)
    const {user: {firstName} = {}} = useContext(UserContext)

    const prefix = useMemo(() => {
        return firstName ? `${firstName}: ` : ""
    }, [firstName])

    const setUserNotification = useCallback(
        notificationContent => {
            setNotification(`${prefix}${notificationContent}`)
        },
        [prefix],
    )

    const context = {
        notification,
        setNotification: setUserNotification,
    }

    return (
        <UserNotificationContext.Provider value={context}>
            {children}
        </UserNotificationContext.Provider>
    )
}

UserNotificationProvider.propTypes = {
    children: PropTypes.node,
}

export {UserNotificationContext, UserNotificationProvider}
