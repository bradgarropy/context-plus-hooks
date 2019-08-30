import React from "react"
import styled from "styled-components"

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
    return (
        <StyledHeader>
            <p>HEADER</p>

            <AuthenticationButtons>
                <UserButton onClick={() => console.log("login")}>
                    Login
                </UserButton>

                <UserButton onClick={() => console.log("logout")}>
                    Logout
                </UserButton>
            </AuthenticationButtons>
        </StyledHeader>
    )
}

export default Header
