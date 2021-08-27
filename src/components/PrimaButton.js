import React from 'react'
import styled from 'styled-components'

function PrimaButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s;

    &::after {
        content: '';
        width: 0;
        position: absolute;
        height: .2rem;
        transition: all .4s;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    

    &:hover::after {
        
        width: 100%;
        height: .4rem;
        background-color: var(--white-color);
        
    }
`

export default PrimaButton
