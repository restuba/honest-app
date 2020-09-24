import React, { Component } from 'react'
import styled from 'styled-components';
import TitleContent from '../commons/TitleContent';
import API from '../../service/Service';
import { GlobalConsumer, RootContext } from '../../context/Context';

class DetailProduct extends Component {
    state = {
        product: {
            name: "",
            desc: "",
            category: "",
            price: 0,
            imgUrl: "",
            comments: ['']
        },
        cart: {
            quantity: 0,
            name: "",
            price: 0
        },
        id: this.props.match.params.id
    }

    static contextType = RootContext;

    componentDidMount(){
        this.getAPI();

    }

    getAPI = () => {
        let id = this.props.match.params.id;
        API.getProductID(id).then(result => {
            this.setState({
                product: {
                    name: result.name,
                    desc: result.desc,
                    category: result.category,
                    price: parseInt(result.price),
                    imgUrl: result.imgUrl,
                    comments: result.comments
                },
                cart: {
                    quantity: 1,
                    name: result.name,
                    price: parseInt(result.price),
                }
            })
        })
    }

    handlePlus = () => {
        this.setState({
            cart: {
                quantity: this.state.cart.quantity + 1,
                name: this.state.product.name,
                price: this.state.cart.price + this.state.product.price
            }
        })
    }

    render() {
        const { getProductID } = this.context;
        const productID = getProductID(this.state.id);
        return (
            <Main>
                <Content>
                <MainWrapper>
                    <ProductContainer>                        
                        <div className="img-thumb">
                            <img src={this.state.product.imgUrl} alt=""/>
                        </div>
                    </ProductContainer>
                    <ProductContainer>
                        <div className="detail">
                            <TitleContent title={this.state.product.name}/>
                            <p className="desc">{this.state.product.desc}</p>
                            <p className="price">${this.state.product.price}</p>  
                            <hr/>
                            <p className="warning">Free shipping in the contiguous US with any Honest Beauty purchase. No code needed, restrictions apply.</p>       
                            <p className="quantity-label">Quantity</p>
                            <div className="quantity-form">
                                <button onClick={this.handleMinus}>-</button>
                                <div>{this.state.cart.quantity}</div>
                                <button onClick={this.handlePlus}>+</button>
                            </div>  
                            <p className="price">Total: ${this.state.cart.price}</p>  
                            <hr/>
                            <div className="add">
                                <button>Add to Bag</button>
                            </div>                
                        </div>
                    </ProductContainer>
                </MainWrapper>
                </Content>               
            </Main>            
        )
    }
}

export default GlobalConsumer(DetailProduct);


const Content = styled.div`
    background: white;
    border-radius: 40px;
`;

const Main = styled.div`
    margin: 70px 0;
    padding: 32px;
`;

const MainWrapper = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 60% 40%);
    grid-auto-rows: auto;
`;

const ProductContainer = styled.div`
    padding 40px;
    .img-thumb{
        height: 480px;
        overflow: hidden;
        position: relative;
        border-radius: 20px;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            background-position: center;
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
    .detail{
        .desc{
            margin: 16px 0;
            font-size: 16px;
            font-weight: 400;
            color: #474747;
        }
        .price{
            margin: 16px 0;
            font-weight: bold;
            font-size: 20px;
        }
        .warning{
            font-size: 12px;
            font-weight: thin;
            color: red;
            margin: 16px 0;
        }
        .quantity-label{
            margin-top: 16px;
        }
        .quantity-form{
            margin-top: -12px;
            margin-bottom: 16px;
            display: flex;
            button{
                background: green;
                border-radius: 50%;
                width: 32px;
                border: none;
                outline: none;
                background: #D7DBDD ;
                color: black;
                text-transform: uppercase;
                font-weight: bold;
            }
            button:focus{
                background: #BCD2E8;
            }
            div{
                border: none;
                width: 120px;
                padding: 4px 12px;
                text-align: center;
            }            
        }
        .add{
            margin: 16px 0;
            button{
                border-radius: 20px;
                width: 100%;
                padding: 12px 16px;
                border: none;
                background: #D7DBDD ;
                color: black;
                text-transform: uppercase;
                font-weight: bold;
            }
        }
    }
`;  