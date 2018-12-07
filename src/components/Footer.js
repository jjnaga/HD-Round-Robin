import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <div>
                Created by: <strong>Anthony Yarbrough</strong>
            </div>
            <div>
                Email problems to: <strong>asyarb@hawaii.edu</strong>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    width: 100%;
    background: #20232a;
    padding: 12px 30px;
    color: #999;
    font-size: 14px;
    margin-top: 30px;
`;
