import React from 'react';
import fetch from 'isomorphic-unfetch'
import List from '../components/List';
import Navigation from '../components/Navigation';


class Characters extends React.Component {
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
                <h1>Characters!</h1>
                <div className='container'>
                    <List data={this.props.data.results}/>
                    <style jsx>{`
                    .container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    `}</style>
                </div>
            </div>
        );

    }
};

export default Characters;