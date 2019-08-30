import React from "react"
import styled from "styled-components"

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
    return (
        <NotificationWrapper>
            <p>Hi, I&apos;m a notification 👋🏼</p>
        </NotificationWrapper>
    )
}

export default Notification
