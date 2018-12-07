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
                <button onClick={shiftNames}>Answer a Call</button>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    > button {
        grid-column: 1/-1;
        padding: 12px 15px;
        background: linear-gradient(180deg, #3ecf8e, #1a965f);
        color: #fff;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 1px 2px 0 rgba(74, 144, 226, 0.44), 0 2px 8px 0 rgba(0, 0, 0, 0.14);
        transition: all 0.15s ease;
        white-space: nowrap;
        outline: none;
        justify-self: end;
        min-width: 150px;

        &:hover {
            transform: translateY(-1px);
        }
        &:active {
            transform: translateY(1px);
        }
    }

    @media (max-width: 700px) {
        margin-top: 30px;
        grid-template-columns: 1fr;
        grid-row-gap: 60px;

        > button {
            justify-self: stretch;
        }
    }
`;
