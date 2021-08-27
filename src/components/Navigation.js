import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
// import Image from 'next/image'

function Navigation() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <NavigationStyled>
            <div className = 'avatar'>
                
                <img src= '/img/img-2.jpg' alt="" />
            </div>

            <ul className = 'nav-items'>
                <li className = 'nav-item'>
                    <Link href = '/'>
                        <a className = {router.pathname == '/' ? 'active-class' : ''}>Home</a>
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link href = '/about'>
                        <a className = {router.pathname == '/about' ? 'active-class' : ''}>About</a>
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link href = '/resume'>
                        <a className = {router.pathname == '/resume' ? 'active-class' : ''}>Resume</a>
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link href = '/portfolio'>
                        <a className = {router.pathname == '/portfolio' ? 'active-class' : ''}>Portfolio</a>
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link href = '/blogs'>
                        <a className = {router.pathname == '/blogs' ? 'active-class' : ''}>Blogs</a>
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link href = '/contact'>
                        <a className = {router.pathname == '/contact' ? 'active-class' : ''}>Contact</a>
                    </Link>
                </li>
            </ul>

            <footer className = 'footer'>
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: solid 1px var(--border-color);

    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items {
        width: 100%;
        text-align: center;      

        li {
            display: block;
            a{
                display: block;
                padding: 0.45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                
                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                }
                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    z-index: 3;
                    opacity: 0.21;
                }
            }

            a:hover::before {
                width: 100%;
                height: 100%;
            }

            .active-class {
                background-color: var(--primary-color);
            }
        }
    }

    .footer {
        border-top: solid 1px var(--border-color);
        width: 100%;
        p {
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;

        }
    }

`

export default Navigation
