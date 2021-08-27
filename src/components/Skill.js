import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layout'
import ProgressBar from './ProgressBar'
import Title from './Title'

function Skill() {
    return (
        <SkillStyled>
            
                <Title title = {'My Skills'} span = {'My Skills'}/>

                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title = {'HTML5'}
                            width = {'70%'}
                            text = {'70%'}
                        />
                        <ProgressBar
                            title = {'CSS3'}
                            width = {'90%'}
                            text = {'90%'}
                        />
                        <ProgressBar
                            title = {'JAVSCRIPT'}
                            width = {'85%'}
                            text = {'85%'}
                        />
                        <ProgressBar
                            title = {'PYTHON'}
                            width = {'60%'}
                            text = {'60%'}
                        />
                        <ProgressBar
                            title = {'React JS'}
                            width = {'75%'}
                            text = {'75%'}
                        />
                        <ProgressBar
                            title = {'Django'}
                            width = {'70%'}
                            text = {'70%'}
                        />
                    </div>
                </InnerLayout>
            
        </SkillStyled>
    )
}

const SkillStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

        @media screen and (max-width:700px) {
            grid-template-columns: 1fr;
        }
    }
`

export default Skill
