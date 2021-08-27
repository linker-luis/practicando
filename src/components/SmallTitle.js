import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
     p {
        padding-right: 1rem;
        font-size: 2rem;
        svg {
            font-size: 3rem;
        }
     }
     h3 {
         color: var(--white-color);
     }
`

export default SmallTitle
