import Head from 'next/head'
// import Image from 'next/image'
import styled from 'styled-components'
import Particles from '../components/Particles';
import { Facebook, YouTube, GitHub } from '@material-ui/icons'


export default function Home() {
  

  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particles />
      </div>
      <div className="typograpy">
        <h1>Hi Im <span>lorem inpsum</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at aspernatur illo, totam hic perspiciatis ipsum enim cumque voluptates voluptatibus?
        </p>
        <div className="icons">
          <a href = '#' className="icon i-faccebook">
            <Facebook/>
          </a>
          <a href = '#' className="icon i-github">
            <GitHub/>
          </a>
          <a href = '#' className="icon i-youtube">
            <YouTube/>
          </a>
        </div>
      </div>

    </HomePageStyled>
  )
}


const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typograpy {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: solid 2px var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: solid 2px var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: .5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: solid 2px red;
          color: red;
        }
      }

      .i-github {
        &:hover {
          border: solid 2px #5f4687;
          color: #5f4687;
        }
      }
    }
  }

  
`