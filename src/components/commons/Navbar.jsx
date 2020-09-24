import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { GoSettings } from 'react-icons/go';
import { BsFilterLeft } from "react-icons/bs";

class Navbar extends Component {
  state = {
    home: false,
    about: false,
    categories: false,
    careers: false,
    blog: false
  };

  onNavClick = e => {
    let updatedState = { ...this.state };
    for (let key in updatedState) {
      updatedState[key] = false;
    }
    this.setState(prevState => updatedState);
    const attr = e.target.getAttribute("customattribute");
    this.setState(prevState => ({ [attr]: !prevState[attr] }));
  };

  render() {
    return (
      <SideNav>
        <Wrapper className="d-flex flex-column align-items-center">      
          <LogoContainer>
            <Link to="/">
              <BsFilterLeft/>
            </Link>
          </LogoContainer>
          <NavContainer>
            <ItemNav name="home" to="/">
              <label className={this.state.home ? "active" : null}>home</label>
            </ItemNav>
            <ItemNav name="about" to="/about">
              <label className={this.state.about ? "active" : null}>about</label>
            </ItemNav>
            <ItemNav name="categories" to="/categories">
              <label className={this.state.categories ? "active" : null}>categories</label>
            </ItemNav>
            <ItemNav name="careers"  to="/careers">
              <label className={this.state.careers ? "active" : null}>careers</label>
            </ItemNav>
            <ItemNav to="/blog">
              <label className={this.state.blog ? "active" : null}>blog</label>
            </ItemNav> 
            <SocialNav style={{ marginTop: "auto" }} href="https://www.linkedin.com/in/restuba">
              <GoSettings/>
            </SocialNav>
          </NavContainer>
        </Wrapper>
      </SideNav>
    );
  }
}

export default Navbar;

const SocialNav = styled.a`
  color: #777;
  font-size: 24px;
`;

const ItemNav = styled(Link)`
    margin-top: 2.75rem;
    :nth-child(1){
      margin-top: auto!important;
    }
    label{
        font-size: 14px;
        color: #777;
        cursor: pointer;
        transform: rotate(270deg);
    }
`;

const SideNav = styled.div`
  height: 100%;
  z-index: 0;
`;

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    text-align-center;
    width: 5%;
    @media (max-width: 1024px){
      width: 10%;
    }
    @media (max-width: 625px){
      width: 15%;
    }
`;

const LogoContainer = styled.div`
    margin-top: 14px;
    font-size: 24px;
    a{
      color: #777;
    }
`;

const NavContainer = styled.div`
    width: 100%;
    height: 88%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;