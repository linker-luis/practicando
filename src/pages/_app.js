import GlobalStyle from '../styles/GlobalStyle'
import '../styles/GlobalStyle.css'
import styled from 'styled-components'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { useEffect } from 'react';
import { IconButton } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)
  const [navToggle, setNavToggle] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    }
    else {
      setTheme('light-theme')
      setChecked(true)
    }
  }

  return (
  <>
    <GlobalStyle/>
    <Sidebar navToggle = {navToggle}></Sidebar>

    <div className="theme">
      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness4Icon/>
        </div>
        <div className="right-content">
          <Switch
            value = ''
            checked = {checked}
            // onChange = {}
            inputProps = {{'arial-label': ''}}
            size = 'medium'
            onClick = {themeToggler}
          />
        </div>
      </div>
    </div>

    <div className="ham-burger-menu">
      <IconButton onClick = {() => setNavToggle(!navToggle)}>
        <MenuIcon/>
      </IconButton>
    </div>

    <MainContemtStyled>
      <div className = 'lines'>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      
      <Component {...pageProps} />
    </MainContemtStyled>
  </>
  )
}

const MainContemtStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  

  @media screen and (max-width: 1200px){
        margin-left: 0;
    }
  
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;

    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`

export default MyApp
