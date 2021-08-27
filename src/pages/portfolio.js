import React from 'react'
import { MainLayout, InnerLayout } from '../styles/Layout'
import Title from '../components/Title'
import { useState } from 'react'
import portfolios from '../data/portfolios'
import Menu from '../components/Menu'
import Button from '../components/Button'

const allButton = ['All', ...new Set(portfolios.map(item => item.category))]

function Portfolio() {
    const [menuItem, setMenuItem] = useState(portfolios)
    // const [button, setButton] = useState(allButton)

    const filter = (button) => {
        if(button === 'All'){
            setMenuItem(portfolios)
            return
        }
        const filterData = portfolios.filter(item => item.category === button)
        setMenuItem(filterData)
    }
    return (
        <MainLayout>
            <Title title = {'Portfolios'} span = {'Portfolios'} />
            
            <InnerLayout>
                <Button filter = {filter} button = {allButton}/>
                <Menu menuItem = {menuItem}/>
            </InnerLayout>
        </MainLayout>
    )
}

export default Portfolio
