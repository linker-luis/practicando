import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layout'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import ServicesSection from '../components/ServicesSection'
import ReviewSection from '../components/ReviewSection'

function About() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title = 'About Me' span = {'About Me'}></Title>
                <ImageSection />
                <ServicesSection/>
                <ReviewSection/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`

export default About
