import React from "react"
import {useEffect, useContext} from "react"
import styled from "styled-components"
import {NotificationContext} from "../context"

const NotificationWrapper = styled.div`
    position: fixed;
    bottom: 10%;
    background: ${({theme}) => theme.colors.darkPurple};
    color: ${({theme}) => theme.colors.white};
    padding: 1.5rem 2.5rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.8);

    p {
        margin: 0;
    }
`

const Notification = () => {
    const {notification, setNotification} = useContext(NotificationContext)

    useEffect(() => {
        const id = setTimeout(() => setNotification(), 3000)

        return () => {
            clearTimeout(id)
        }
    })

    if (!notification) {
        return null
    }

    return (
        <NotificationWrapper>
            <p>{notification}</p>
        </NotificationWrapper>
    )
}

export default Notification
