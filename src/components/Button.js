import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0.8em;
    margin: 0.2em;
    background: ${props => props.bgColor}
`;

const Button = ({ text, bgColor }) => (
    <Wrapper bgColor={bgColor}>{text}</Wrapper>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string
};

export default Button;