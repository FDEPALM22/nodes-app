import React from 'react'
import './GridLayout.css'
import Accordion from './Accordion';

const GridLayout = () => {

    const endpoints = [
        {
            title: 'Google',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.',
            url: 'https://google.com',
        },
        {
            title: 'Tests Server 1',
            content: 'No data to display!!',
            url: 'https://test-server.com',
        },
    ];

    return (
        <div className="grid-container">
            {endpoints.map((endpoint, index) => (
                <Accordion key={index} title={endpoint.title} url={endpoint.url} content={endpoint.content} />
            ))}
        </div>
    );
};

export default GridLayout;