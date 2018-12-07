import React from 'react';
import styled from 'styled-components';

import RoundRobin from './RoundRobin';
import Footer from './Footer';

const App = () => {
    return (
        <AppContainer>
            <header />
            <Content>
                <RoundRobin />
            </Content>
            <Footer />
        </AppContainer>
    );
};

export default App;

const Content = styled.main`
    padding: 0 20px;
    max-width: 900px;
    width: 100%;
    margin: auto 0;
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
`;
