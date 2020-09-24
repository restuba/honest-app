import React, { Component } from 'react'
import styled from 'styled-components';
import TitleContent from '../components/commons/TitleContent';
import Baby from '../assets/baby1.jpg';
import Axios from 'axios';
import { RiDeleteBin5Line } from "react-icons/ri";

export default class Blog extends Component {
   render() {
        return (
            <Main>
                <Content>
                    <FormWrapper>
                        <TitleContent title="New Product"/>
                        <CommentsField>
                            <div className="img-avatar">
                                <img src={Baby} alt=""/>
                            </div>
                            <div className="form-comment">
                                <input type="text" className="input-title" placeholder="Name product"/>
                                <input type="text" className="input-body" placeholder="Description product" />
                                <button className="submit">Submit</button>        
                            </div>  
                        </CommentsField>                    
                    </FormWrapper>

                    <FormWrapper>
                       
                        <CommentsField>
                            <div className="img-avatar">
                                <img src={Baby} alt=""/>
                            </div>
                            <div className="form-comment">
    
                                    <input type="text" className="input-title" placeholder="Title here..."/>
                                    <input type="text" className="input-body" placeholder="Body here..." />
                                    <button className="submit">Submit</button>
                                        
                            </div>  
                        </CommentsField>                    
                    </FormWrapper>
                </Content>
                
                <Content>
                    
                </Content>
            </Main>

            
        )
    }
}

const Main = styled.div`
    margin: 70px 0;
    padding: 32px;
    // background: orange;
`;

const Content = styled.div`
    background: white;
    border-radius: 40px;
`;


const FormWrapper = styled.div`
    padding 40px;
    // background: red;
`;

const CommentsField = styled.div`
    // background: blue;
    border-radius: 12px;
    display: grid;
    padding: 12px 0;
    grid-template-columns: repeat(2, 10% 90%);
    margin: 20px 0;
    border: 1px solid #F2F3F4;    
    transition: 0.5s ease-in-out;
    box-sizing: content-box;
    .img-avatar{
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .form-comment{
        display: flex;
        vertical-align: middle;
        border-left: 10px solid #F2F3F4 ;
        width: 100%; 
        flex-flow: column;
        flex-direction: columns;
        padding: 20px;
        grid-template-columns: repeat(1, 100%);
        input, button{
                padding: 8px 12px;
                margin: 4px 0;
                border: none;
            }
            button{
                width: 15%;
                border: none;
                border-radius: 20px;
                background: #D7DBDD ;
                color: black;
                text-transform: uppercase;
                font-weight: bold;
                margin-left: auto;
                font-size: 16px;
            }
      
        .title{
            font-size: 12px;
            font-weight: 600;
            margin: 0;
            text-transform: capitalize;
            color: #2d2d2d;
        }
        .desc{
            font-size: 12px;
            margin: 0;
        }
    }
`;





