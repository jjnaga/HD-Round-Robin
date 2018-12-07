import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContext } from './AppContext';
import posed, { PoseGroup } from 'react-pose';

import CloseButton from './CloseButton';

class NameContainer extends Component {
    render() {
        let value = this.context;
        const { names, removeName } = value;

        return (
            <Container>
                <PoseGroup>
                    {names.map((name, index) => {
                        if (index === 0) {
                            return (
                                <ExpandedName key={index}>
                                    <span>Who's Next?</span>
                                    <h1>{name}</h1>
                                    <CloseButton onClick={() => removeName(index)}>Remove</CloseButton>
                                </ExpandedName>
                            );
                        } else {
                            return (
                                <Name key={index}>
                                    <span>{name}</span>
                                    <CloseButton onClick={() => removeName(index)} />
                                </Name>
                            );
                        }
                    })}
                </PoseGroup>
            </Container>
        );
    }
}

NameContainer.contextType = AppContext;

export default NameContainer;

const Container = styled.ul`
    width: 100%;
    align-self: stretch;
    display: grid;
    grid-template-columns: 1fr;

    @media (max-width: 700px) {
        grid-row: 1;
    }
`;

const AnimatedName = posed.li({
    enter: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 50,
        opacity: 0,
    },
});

const Name = styled(AnimatedName)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    margin: 8px 0;
    border-radius: 4px;
    background: linear-gradient(180deg, #7c7ebf, #414384);
    color: #fff;
    font-weight: 600;
    max-height: 50px;

    span {
        font-size: 18px;
    }
`;

const ExpandedName = styled(AnimatedName)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 150px;
    position: relative;

    span {
        color: #6b7c93;
        font-style: italic;
        font-size: 15px;
    }

    h1 {
        font-size: 36px;
        font-weight: 600;
        color: #3396d3;
        margin: 0;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
    }
`;
