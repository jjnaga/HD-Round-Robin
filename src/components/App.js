import React from 'react';
import styled, { keyframes } from 'styled-components';

import RoundRobin from './RoundRobin';
import Footer from './Footer';

const App = () => {
    return (
        <AppContainer>
            <Content>
                <RoundRobin />
            </Content>
            <Footer />
        </AppContainer>
    );
};

export default App;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(8vh);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Content = styled.main`
    padding: 0 20px;
    max-width: 900px;
    width: 100%;
    margin: auto 0;
    animation: ${fadeIn} 0.8s ease-in;
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
`;
