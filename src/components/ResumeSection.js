import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layout'
import SmallTitle from './SmallTitle'
import Title from './Title'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem'

function ResumeSection() {
    return (        
        
        <ResumeStyled>
            <Title title = {'Resume'} span = {'Resume'}/>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon = {<BusinessCenterIcon/>} title = {'Workink Experience'}/>
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year = {'2015 - 2020'} 
                    title = {'Computer Science'}
                    sub_title = {'Sussex University'}
                    text = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus neque soluta facilis explicabo mollitia magnam porro provident dignissimos iste?'}
                    />           
                
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year = {'2015 - 2020'} 
                    title = {'Computer Science'}
                    sub_title = {'Sussex University'}
                    text = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus neque soluta facilis explicabo mollitia magnam porro provident dignissimos iste?'}
                    />           
                
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year = {'2015 - 2020'} 
                    title = {'Computer Science'}
                    sub_title = {'Sussex University'}
                    text = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus neque soluta facilis explicabo mollitia magnam porro provident dignissimos iste?'}
                    />           
                
                </div>

                <div className="u-margin bottom"></div>

                <div className="small-title">
                    <SmallTitle icon = {<SchoolIcon/>} title = {'Workink Experience'}/>
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year = {'2015 - 2020'} 
                    title = {'Computer Science'}
                    sub_title = {'Sussex University'}
                    text = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus neque soluta facilis explicabo mollitia magnam porro provident dignissimos iste?'}
                    />           
                
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year = {'2015 - 2020'} 
                    title = {'Computer Science'}
                    sub_title = {'Sussex University'}
                    text = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus neque soluta facilis explicabo mollitia magnam porro provident dignissimos iste?'}
                    />           
                
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year = {'2015 - 2020'} 
                    title = {'Computer Science'}
                    sub_title = {'Sussex University'}
                    text = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore natus neque soluta facilis explicabo mollitia magnam porro provident dignissimos iste?'}
                    />           
                
                </div>
            </InnerLayout>
        </ResumeStyled>
           
    )
}

const ResumeStyled = styled.section`
    .small.title {
        padding-bottom: 3rem;
    }

    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`

export default ResumeSection
