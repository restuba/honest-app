import React from 'react';
import styled from 'styled-components';
import Header from './components/HeaderComp/Header';
import Navbar from './components/commons/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import DetailProduct from './components/ProductComp/DetailProduct';
import GlobalProvider from './context/Context';

class App extends React.Component {
  render() {
    return (
      <Router>        
        <AppWrapper>  
          <Header />      
          <Sidebar className="min">
            <Navbar/>
            <Main>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/categories" exact component={Categories} />
              <Route path="/careers" exact component={Careers} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/detail-product/:id" component={DetailProduct}/>
            </Main>
          </Sidebar>
        </AppWrapper>     
      </Router>
    )
  }
}

export default GlobalProvider(App);

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 100%);
  grid-auto-rows: auto;
  background: #F3F6FD;
  box-sizing: border-box;
  .max{
    grid-template-columns: repeat(1, 100%);
    transition: 2s;
  }
  .min{
    grid-template-columns: repeat(2, 5% 95%);
    transition: 2s;
  }
`;


const Sidebar = styled.div`
  display: grid;
  grid-auto-rows: auto;
  background: #F3F6FD!important;
  box-sizing: border-box;
`;

const Main = styled.div`
  box-sizing: content-box;
`;

