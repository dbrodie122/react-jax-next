import React from 'react';
import fetch from 'isomorphic-unfetch'

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
        console.log(this.props);
        return (
            <div>Hello, Next!</div>
        );

    }
};

export default Home;