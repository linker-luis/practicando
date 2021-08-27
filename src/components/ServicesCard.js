import React from 'react'
import styled from 'styled-components'

function ServicesCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className = 'container'>
                <div>
                    {image}
                </div>
                {/* <img src={image} alt="" /> */}
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
            
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    margin: 0 .5rem;
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s;
    &:hover {
        border-top: solid 8px var(--primary-color);
        transform: translateY(3px);
    }

    @media screen and (max-width: 1000px){
        margin-bottom: 1rem;
    }

    .container {
        padding: 1.2rem;
        h4 {
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;

            &::after {
                content: '';
                width: 4rem;
                background-color: var(--border-color);
                height: 4px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p {
            padding: .8rem 0;
        }
    }
`

export default ServicesCard
