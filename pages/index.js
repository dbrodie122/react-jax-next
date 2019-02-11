import React from 'react';
import fetch from 'isomorphic-unfetch'
import CharacterList from '../components/CharacterList';

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
            <div className='container'>
                <CharacterList characters={this.props.data.results}/>
                <style jsx>{`
                .container {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                `}</style>
            </div>
        );

    }
};

export default Home;