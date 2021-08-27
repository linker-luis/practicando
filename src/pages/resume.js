import React from 'react'
import Skill from '../components/Skill'
import ResumeSection from '../components/ResumeSection'
import { MainLayout, InnerLayout } from '../styles/Layout'

function Resume() {
    return (
        <MainLayout>
            <Skill/>
            <ResumeSection />
        </MainLayout>
    )
}

export default Resume
