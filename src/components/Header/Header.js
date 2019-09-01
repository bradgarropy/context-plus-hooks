import React from "react"
import {useContext} from "react"
import styled from "styled-components"
import {UserContext} from "../../context/user"

const AuthenticationButtons = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
`

const UserButton = styled.button`
    border-radius: 8px;
    font-size: 0.9rem;
    border: 2px solid ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.darkPurple};
    color: ${({theme}) => theme.colors.white};
    padding: 0.5rem 1rem;
    cursor: pointer;
`

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.darkPurple};
    color: ${({theme}) => theme.colors.white};
    padding: 1.5rem;
    align-items: center;

    p {
        margin: 0;
    }
`

const Header = () => {
    const {user, login, logout} = useContext(UserContext)

    const onLogin = () => {
        login()
    }

    const onLogout = () => {
        logout()
    }

    return (
        <StyledHeader>
            <p>{user ? `${user.firstName} ${user.lastName}` : "HEADER"}</p>

            <AuthenticationButtons>
                {user ? (
                    <UserButton onClick={onLogout}>Logout</UserButton>
                ) : (
                    <UserButton onClick={onLogin}>Login</UserButton>
                )}
            </AuthenticationButtons>
        </StyledHeader>
    )
}

export default Header
