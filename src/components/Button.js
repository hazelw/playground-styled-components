import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0.8em;
    margin: 0.2em;
    background: ${props => props.bgColor}
`;

const BorderedWrapper = styled(Wrapper)`
    border: ${props => props.borderWidth ? props.borderWidth : '1px'} solid white;
`;

const Button = ({ text, bgColor, borderWidth }) => {
    const button = borderWidth
        ? <BorderedWrapper bgColor={bgColor} borderWidth={borderWidth}>{text}</BorderedWrapper>
        : <Wrapper bgColor={bgColor}>{text}</Wrapper>;

    return button;
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string
};

export default Button;