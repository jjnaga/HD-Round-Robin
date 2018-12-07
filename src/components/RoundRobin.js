import React, { Component } from 'react';
import styled from 'styled-components';

import { AppContext } from './AppContext';
import Form from './Form';
import NameContainer from './NameContainer';

class RoundRobin extends Component {
    render() {
        let value = this.context;
        const { shiftNames } = value;

        return (
            <FormAndNames>
                <Form />
                <NameContainer />
                <button onClick={shiftNames}>Answer</button>
            </FormAndNames>
        );
    }
}

RoundRobin.contextType = AppContext;

export default RoundRobin;

const FormAndNames = styled.div`
    padding: 30px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    background: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
        margin-top: 30px;
    }
`;
