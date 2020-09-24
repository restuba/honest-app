import React, { Component } from 'react';
import styled from 'styled-components'
import Products from '../components/ProductComp/Products';
import Categories from '../components/ProductComp/Categories';
import TitleContent from '../components/commons/TitleContent';
import { GlobalConsumer } from '../context/Context';

class Home extends Component {
    render() {
        return (
            <Main>
              <div className="container">
                <MainWrapper>
                    <TitleContent title="Product"/>
                    <ProductContainer>
                      <Products/>
                    </ProductContainer>
                </MainWrapper>
              </div>
            <Content>
              <div className="container">
                <h2>Categories</h2>
                <Categories />
              </div>
            </Content>
            </Main>
        );
    }
}

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 70% 30%);
  grid-auto-rows: auto;
  margin: 70px 0;
  .container{
    padding: 32px;
  }
`;

const MainWrapper = styled.div`
  background: white;
  border-radius: 40px;
  padding 40px;
`;

const Content = styled.div`
`;

const ProductContainer = styled.div`
  padding: 12px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  a:hover{
    text-decoration: none;
}
`;

export default GlobalConsumer(Home);