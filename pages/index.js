import React from 'react';
import Navigation from '../components/Navigation';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Navigation />
                <h1>My First Little Next.js App...featuring Star Wars!</h1>
            </div>
        );

    }
};

export default Home;