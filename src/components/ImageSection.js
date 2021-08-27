import React from 'react'
import styled from 'styled-components'
import PrimaButton from './PrimaButton'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className = 'left-content'>
                <img src="img/img-3.jpg" alt="resume" />
            </div>

            <div className = 'right-content'>
                
                <h4>I am <span>Lorem Ipsum</span></h4>
                
                <p className = 'paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus ducimus. Vero ducimus est neque incidunt. Recusandae ad explicabo amet.
                </p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Natinality</p>
                        <p>Languajes</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>

                    <div className="info">
                        <p>: Lorem ipsum</p>
                        <p>: 36</p>
                        <p>: Spanish</p>
                        <p>: Spanish, French, English</p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>

                <PrimaButton title = {'Download Cv'}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 2rem;
    display: flex;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        .left-content {
            margin-bottom: 2rem;
        }
    }

    .left-content {
        width: 100%;
        img {
            width: 90%; 
            object-fit: cover;
        }
    }

    .right-content {
        
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }

        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            display: flex;     
            padding-bottom: 1.4rem;

            .info-title {
                padding-right: 3rem;

                p {
                    font-weight: 600;
                }
            }

            .info-title, .info {
                p {
                    padding: .3rem 0;
                }
            }
            

        }
    }
`

export default ImageSection
