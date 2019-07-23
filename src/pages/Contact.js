import React, { Component } from 'react';
import styled from 'styled-components';
//pages
import Footer from './components/Footer';
//assets
import ejabout from '../img/emilyAbout.png';

const AboutPage = styled.div`
    margin-top: 70px;

    img {
        width: 100%;
        object-fit: cover;
    }

    > div {
        position: relative;
        top: -100px;
    

        > div {
            margin: 1rem;
            display: flex;
            flex-direction: column;

            a {
                margin: .5rem 0 0 1rem;
                color: #000;
            }

            a:hover {
                text-decoration: underline;
            }
            
        }
    
    }
    
    h1 {
        width: 300px;
        color: #fff;
        margin-left: 1rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    form {
        display: flex;
        flex-direction: column;

        input[type="text"] {
            width: 300px;
            border: 1px solid #000;
            border-radius: 3px;
            margin: .5rem auto;
            padding: 5px;
        }

        textarea {
            display: flex;
            justify-content: flex-start;
            width: 300px;
            border: 1px solid #000;
            border-radius: 3px;
            margin: .5rem auto;
            padding: 5px;
            height: 140px;
        }
    }

    #submit {
        width: 88px;
        height: 41px;
        background: #000;
        border: 2px solid #000;
        border-radius: 3px;
        color: #fff;
        margin: .5rem 2rem .5rem 0;
        align-self: flex-end;
    }

    #submit:hover {
        background: #fff;
        color: #000;
    }
`



class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: true,
        };
    }

    render() {
    return (
      <AboutPage>
          <img src={ejabout} alt="Woman sitting resting her head on her hand" />
          <div>
                <h1>SLIDE INTO MY DM'S</h1>
                <div>
                    <a href="mailto:emilyajones@gmail.com">emilyajones@gmail.com</a>
                    <a href="mailto:emilyajones@gmail.com">(615) 555-5432</a>
                    <a href="https://www.instagram.com/_emilyajones">@_emilyajones</a>
                </div>
                
                <form id="contact-form">
                    <input id="name" type="text" placeholder="name" />
                    <input id="email" type="text" placeholder="email" />
                    <textarea rows="4" id="message" type="textarea" placeholder="message" />
                    <a id="submit" className="centerVH" href="" >submit</a>
                </form>
          </div>
          <Footer />
      </AboutPage>
    );
  }
}

export default Contact;