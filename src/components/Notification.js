import React from "react"
import {useContext, useEffect} from "react"
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

    p {
        margin: 0;
    }
`

const Notification = () => {
    const {notification, setNotification} = useContext(NotificationContext)
    console.log(notification)

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
