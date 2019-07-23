import React, { Component } from 'react';
import styled from 'styled-components';
//components
import BookNow from './components/BookNow';
import Footer from './components/Footer';
//assets
import spacevibe from '../img/vibe.jpeg';

const BookingPage = styled.div`
    margin-top: 70px;

    img {
        width: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }

     > div {
         position: relative;
         top: -155px;
     }
    
    h1 {
        width: 300px;
        color: #fff;
        margin-left: 1rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    
`

const Service = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    h3 {
        margin-left: 1rem;
    }

    p {
        margin: 1rem 2rem;
        opacity: 0.75;
    }

    h5 {
        margin: .25rem 2rem;
        font-size: 1rem;
        font-weight: bold;
    }

    .centerVH {
        margin-top: 1rem;
    }

`



class Services extends Component {

  render() {
    return (
      <BookingPage>
            <img src={spacevibe} alt="Woman sitting resting her head on her hand" />
            <div>
                    <h1>IN-HOME LASH EXTENSIONS ON YOUR SCHEDULE</h1>
                    <Service>
                        <h3>classic extensions</h3>
                        <p>
                        With a classic lash application we use a thicker lash and apply one single extension to each of your natural lashes for a result similar to a "mascara look", plus added length if desired.
                        </p>
                        <h5>classic full set $200, up to 2 hours</h5>
                        <h5>classic fill $85, up to 1 hour</h5>
                        <div class="centerVH">
                            <BookNow textcolor={"#000"} />
                        </div>
                    </Service>
                    <Service>
                        <h3>volume extensions</h3>
                        <p>
                        With a volume application, micro fine lashes are used and anywhere from 2-6 lashes may be applied per natural lash for a very soft yet full look.
                        </p>
                        <h5>volume full set $300, up to 2 hours</h5>
                        <h5>volume fill $110, up to 1 hour</h5>
                        <div class="centerVH">
                            <BookNow textcolor={"#000"} />
                        </div>
                    </Service>
            </div>
            <Footer />
      </BookingPage>
    );
  }
}

export default Services;