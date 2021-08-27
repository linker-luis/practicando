import React from 'react'
import styled from 'styled-components'
import blogs from '../data/blogs'
import Title from '../components/Title'
import { MainLayout, InnerLayout } from '../styles/Layout'

function Blogs() {
    return (
        <MainLayout>
            <BlogsStyled>
                <Title title = {'Blogs'} span = {'Blogs'} />
                <InnerLayout className = 'blog'>
                    {
                        blogs.map(blog => {
                            
                            return(
                                <div key = {blog.id} className = 'blog-item'>
                                    <div className="image">
                                        <img src= {blog.image} alt="" />
                                    </div>
                                    <div className = 'title'>
                                        <a href = '#' >
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        
        
        .blog-item {
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
            overflow: hidden;
        }

        .image {
            width: 100%;
            /* height: 90%; */
            overflow: hidden;
            img {
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: .4s;

                &:hover {
                    cursor: pointer;
                    transform: rotate(5deg) scale(1.1);
                }
            }
        }

        .title {
            a {
                font-size: 1rem;
                color: var(--white-color);
                cursor: pointer;
                transition: .4s;
                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`

export default Blogs
