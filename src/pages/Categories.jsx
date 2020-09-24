import React from 'react';
import styled from 'styled-components';

const Categories = () => {
    return (
        <Main>
            <h1>Hello from Categories</h1>
        </Main>
    );
};

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 65% 35%);
  grid-auto-rows: auto;
  margin-top: 28px;
  margin: 100px 0;
  height: 100vw;
`;


export default Categories;