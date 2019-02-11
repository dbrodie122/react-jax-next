import React from 'react';
import Link from 'next/link';
const Navigation = (props) => {
    return (
        <nav>
            <Link prefetch href='/'><a>Home</a></Link>
            <Link prefetch href='/characters'><a>Characters</a></Link>
            <Link prefetch href='/planets'><a>Planets</a></Link>
            <style jsx>{`
                nav {
                    display: flex;
                    background-color: black;
                    justify-content: space-around;
                    flex-wrap: wrap;
                }
                a {
                    color: white;
                    font-size: 3rem;
                }
                a:hover {
                    color: grey;
                    transition: 0.3s;
                }
            `}</style>
        </nav>
    );
};

export default Navigation;