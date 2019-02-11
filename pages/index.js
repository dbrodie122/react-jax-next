import React from 'react';
import Navigation from '../components/Navigation';

class Home extends React.Component {
    constructor(props){
        super(props);

    }
    static async getInitialProps({ req }) {
        const response = await fetch('https://swapi.co/api/people');
        const data = await response.json();
        return { data }
      }

    render(){
        return (
            <div>
                <Navigation />
                <h1>My First Little Next.js App...featuring Star Wars!</h1>
            </div>
        );

    }
};

export default Home;