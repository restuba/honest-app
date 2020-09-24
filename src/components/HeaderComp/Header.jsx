import React, { Component } from 'react'
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import Avatar from '../../assets/thumb-1.jpg';
import { RiShoppingCart2Line, RiHeartLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";
import { GlobalConsumer } from '../../context/Context';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="menu">
                    <button>
                        <BsFilterLeft />
                    </button>
                </div>
                <div className="logo">
                    <img src="https://www.honest.com/on/demandware.static/Sites-honest-Site/-/default/dw36af10f9/images/svg-icons/logo-lg.svg" alt=""/>
                </div>
                <div className="searchbar">
                    <div className="container text-center img-fluid" >
                        <form action="">
                            <div className="d-flex bd-highlight container-input form-group">
                            <div className="bd-highlight left">
                                <span className="fa fa-search"></span>
                            </div>
                            <div className="flex-grow-1 bd-highlight center">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Search here..." data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="navbar">
                    <button>
                        <RiShoppingCart2Line className="mx-1 nav-icon"/>
                        <Badge className="badge-icon" variant="light">{this.props.state.cart === 0 ? '' :  this.props.state.cart  }</Badge>
                    </button>                
                    <button>
                        <RiHeartLine className="nav-icon mx-1" />
                        <Badge className="badge-icon" variant="light"></Badge>
                    
                    </button>
                    <div className="margin-div"></div>
                    <button>
                        <img src={Avatar} alt="avatar" className="nav-icon mx-2"/>
                        <span>Fraco Fuerte</span>
                    </button>
                </div>
            </HeaderWrapper>
        )
    }
}

export default GlobalConsumer(Header);

const HeaderWrapper = styled.div`
    height: 70px;
    position: fixed;
    width: 100%;
    z-index: 99999!important;
    background: #F3F6FD;
    padding: 0px;
    color: #777;
    display: grid;
    grid-template-columns: repeat(4, 5% 15% 55% 25%);
    .menu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button{
            background: #F3F6FD;
            border: none;
        }
        svg{
            font-size: 32px;
            color: #777;
        }
    }
    .logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 100px;
            margin: auto 0;
        }
    }
    .searchbar{
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        .container-input{
            background-color: #fff;
            padding: 0 14px;
            margin: auto 0;
            width: 420px;
            border-radius: 40px;
            border: none;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            overflow: hidden;
            .left{
                span{
                    align-items: center;
                    margin: 0 auto;
                    color: #C8C8C8;
                }
            }
            .center input{
                border-radius: 0;
                box-shadow: none;
                border: none;
            }
        }
    }
    .navbar{
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: right;
        vertical-align: middle;
        button{
            border: none;
            background: transparent;
            padding: 8px 4px;
            margin: 0 4px;
            position: relative;
            .badge-icon{
                background: red;
                color: white;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 20px;
            }
            span{
                color: #777;
            }
            
        }
        .margin-div{
            border: 1px solid #C8C8C8;
            height: 24px;
            margin: 0 8px;
        }
        .nav-icon{
            font-size: 20px;
            color: #777;
        }
        img{
            height: 24px;
            width: 24px;
            object-fit: cover;
            border-radius: 100%;
        }
    }
`;
