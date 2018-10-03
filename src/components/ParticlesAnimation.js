import React from 'react';
import styled from 'styled-components';


const Particles = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh !important;

    .particles-js-canvas-el {
        width: 100%;
        height: 99%;
    }
`;

export default class ParticlesAnimation extends React.Component {
    componentDidMount() {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }

    render() {
        return (
            <Particles id="particles-js"></Particles>
        );
    }
}