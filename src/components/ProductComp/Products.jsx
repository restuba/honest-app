import React from 'react';
import styled from 'styled-components';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import API from '../../service/Service';
import { GlobalConsumer } from '../../context/Context';

class Products extends React.Component{
    state = {
        products: []
    }

    render(){
        return (
            <>
            {
                this.props.state.products.map(product => {
                    return(                        
                        <ProductsWrapper key={product.id}>
                            <Link to={`/detail-product/${product.id}`}>
                            <div className="img-thumb">
                                <img src={product.imgUrl} alt=""/>
                                <div className="price-thumb">
                                    <p>${product.price}</p>
                                </div>                                 
                                <div className="wishlist-thumb">
                                    <button>
                                        {this.state.favorite === false ? <HiOutlineHeart/> : <HiHeart style={{fill: 'red'}}/> }
                                    </button>
                                </div>
                            </div>                            
                            <p className="title">{product.name}</p>
                            <p className="desc">{product.desc}</p>
                            </Link>
                        </ProductsWrapper>                       
                    )
                })
            }            
            </>
        );
    }
};
export default GlobalConsumer(Products);

const ProductsWrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    box-sizing: content-box;
    transition: 0.3s ease-in-out;
    border: 1px solid #F2F3F4;
    padding-bottom: 14px;    
    :hover{
        box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .img-thumb{
        height: 320px;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            object-fit: cover;
        }
        .price-thumb{
            position: absolute;
            left: 12px;
            width: 40px;
            height: 40px;
            top: 8px;
            font-weight: 600;
            background: transparent;
            display: flex;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            p{
                color: #777;
            }            
        }
        .wishlist-thumb{
            position: absolute;
            right: 8px;
            width: 40px;
            height: 40px;
            top: 8px;
            background: transparent;
            border: 1px solid #C8C8C8;
            display: flex;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            button{
                background: transparent;
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 50%;
            }
        }
        p{
            color: white;
            margin: auto 0;
            font-size: 12px;
            font-weight: 500;
        }
    }
    .title{
        font-size: 14px;
        font-weight: 600;
        text-transform: capitalize;
        margin: 8px 12px;
        color: #2d2d2d;
    }
    .desc{
        font-size: 12px;
        margin: 8px 12px;
        color: #2d2d2d;
    }    
`;
