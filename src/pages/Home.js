import React from 'react';
import styled from 'styled-components';
//pages
import InstaGrid from './components/Instagram/Insta';
import Footer from './components/Footer';
//components
import BookNow from './components/BookNow';
//assets
import ejmain from '../img/ejmain.png';


const Main = styled.div`
    width: 100vw;
    background: url(${ejmain});
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.1) 100%), url(${ejmain});
    background-position: top;
    height: 88vh;
    margin-top: 40px;
    padding: 0 1.5rem;

    
    h1 {
        font-size: 3.25rem;
        padding: 4rem 0 1rem 0;
        color: #fff;
    }
`



class Home extends React.Component {
    
    render(){
        return (
            <div id="homeWhereAmI">
                <Main>
                    <h1>LASH EXTENSIONS WHEREVER YOU ARE</h1>
                    <BookNow textcolor={"#fff"} />
                </Main>
                <InstaGrid account="_emilyajones" numberOfMediaElements={4} />
                <Footer />
            </div>
        );
    }
}

export default Home;


