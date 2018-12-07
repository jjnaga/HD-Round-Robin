import React from 'react';
import styled from 'styled-components';

import { ReactComponent as X } from '../images/icons/Close.svg';

const CloseButton = props => {
    return (
        <Close {...props}>
            <X />
        </Close>
    );
};

export default CloseButton;

const Close = styled.button`
    cursor: pointer;
    outline: none;
    background: #0000;
    display: grid;
    width: 36px;
    padding: 12px;
    border-radius: 50%;
    place-items: center;
    transition: all 0.25s ease;
    -webkit-tap-highlight-color: #0000;

    &:hover {
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
        background: #f6f9fc;
        transform: scale(1.07);
    }

    &:active {
        transform: scale(0.93);
    }
`;
