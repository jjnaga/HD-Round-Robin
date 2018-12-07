import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContext } from './AppContext';

import { ReactComponent as Graphic } from '../images/Working.svg';

export default class Form extends Component {
    state = { name: '' };

    handleChange = event => {
        const name = event.target.name;

        this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        let value = this.context;
        const { addName } = value;
        const { name } = this.state;

        if (!(name === '')) {
            addName(name);
            this.setState({ name: '' });
        }
    };

    render() {
        const { name } = this.state;

        return (
            <FormEl onSubmit={this.handleSubmit}>
                <Graphic />
                <label>Enter your name:</label>
                <AddStudent>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={name}
                        placeholder="John Smith"
                    />
                    <button type="submit">Add Name</button>
                </AddStudent>
            </FormEl>
        );
    }
}

Form.contextType = AppContext;

const AddStudent = styled.div`
    display: flex;

    input {
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
        border: none;
        padding: 15px 15px 15px 12px;
        border-radius: 15px;
        background-color: #f1f3f6;
        transition: all 0.15s ease;
        border: 2px solid #f1f3f6;
        outline: none;
        margin-right: 12px;

        &:active,
        &:focus {
            background: transparent;
        }
    }

    button {
        padding: 12px 15px;
        background: linear-gradient(180deg, #89b1ff, #5b8def);
        color: #fff;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 1px 2px 0 rgba(74, 144, 226, 0.44), 0 2px 8px 0 rgba(0, 0, 0, 0.14);
        transition: all 0.15s ease;
        white-space: nowrap;
        outline: none;

        &:hover {
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(1px);
        }
    }
`;

const FormEl = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    @media (max-width: 700px) {
        order: 2;
    }

    svg {
        max-width: 325px;
        width: 100%;
        height: 100%;
        margin-bottom: 50px;
    }

    label {
        margin-bottom: 12px;
        font-style: italic;
        font-weight: 500;
        color: #e88c30;
        font-size: 18px;
    }
`;
