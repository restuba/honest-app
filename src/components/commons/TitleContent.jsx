import React from 'react';
import styled from 'styled-components';

const TitleContent = (props) => {
    return (
        <Title>
            <h2>{props.title}</h2>
        </Title>
    );
};

const Title = styled.div`
`;

export default TitleContent;