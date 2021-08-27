import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layout'
import Title from '../components/Title'
import PrimaButton from '../components/PrimaButton'

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/ContactItem'

function Contact() {
    return (
        <MainLayout>
            <Title title = {'Contact'} span = {'Contact'} />
            <ContactStyled>
                <InnerLayout className = 'contact-section'>
                    <div className = 'left-content'>
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form action="" className = 'form'>
                            <div className="form-field">
                                <label htmlFor="name" >Enter your name</label>
                                <input type="text" id = 'name'/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Enter your email</label>
                                <input type="email" id = 'email'/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" >Enter your subject</label>
                                <input type="text" id = 'subject'/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message</label>
                                <textarea name="text-area" id="text-area" cols="30" rows="10"></textarea>
                            </div>

                            <div className="form-field f-button">
                                <PrimaButton title = {'Send Email'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem 
                            icon = {<PhoneIcon/>}
                            title = {'Phone'}
                            contact1 = {'+64634634'}
                            contact2 = {'867-467-5334'}
                        />

                        <ContactItem 
                            icon = {<EmailIcon/>}
                            title = {'Email'}
                            contact1 = {'fsdgds@gmail.com'}
                            contact2 = {'yrtkkkgndfs@gmail.com'}
                        />

                        <ContactItem 
                            icon = {<LocationOnIcon/>}
                            title = {'Location'}
                            contact1 = {'+64634634'}
                            contact2 = {'867-467-5334'}
                        />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);

            .f-button {
                margin-bottom: 2rem;
            }
        }

        .right-content {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }

        .contact-title {
            h4 {
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }

        .form {
            width: 100%;
            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input {
                    border: solid 1px var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }

                textarea {
                    background-color: transparent;
                    border: solid 1px var(--border-color);
                    outline: none;
                    width: 100%;
                    color: inherit;
                    padding: .8rem;
                }
            }
            
        }
    }
`

export default Contact
