import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

function Sidebar({navToggle}) {
    return (
        <SidebarStyled className = {`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    position: fixed;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: 0.4s;
        
    @media screen and (max-width: 1200px){
        transform: translate(-100%);
        z-index: 20;
    }
`

export default Sidebar
