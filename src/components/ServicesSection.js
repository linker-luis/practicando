import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ServicesCard from './ServicesCard'
import Title from './Title'
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title = {'Services'} span = {'services'} />

                <div className="services">
                    <ServicesCard image = {<SportsEsportsOutlinedIcon/>} title = {'Web Design'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus ducimus. Vero ducimus est neque incidunt. Recusandae ad explicabo amet.'} />

                    <ServicesCard image = {<AccountTreeOutlinedIcon/>} title = {'Game Develop'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus ducimus. Vero ducimus est neque incidunt. Recusandae ad explicabo amet.'} />
                

                
                    <ServicesCard image = {<AndroidOutlinedIcon/>} title = {'Intelligence'} paragraph = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus ducimus. Vero ducimus est neque incidunt. Recusandae ad explicabo amet.'} />
                </div>               
                
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        
        @media screen and (max-width: 1000px){
            
            flex-direction: column;
            
        }
    }

`

export default ServicesSection
