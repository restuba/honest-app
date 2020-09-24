import React, { Component } from 'react'
import styled from 'styled-components';

export default class Category extends Component {
  render() {
    return (
      <ProductsWrapper>
          <div className="select-product">
              <button>Select</button>
          </div>
          <div className="img-thumb">
              <img src={this.props.imgUrl} alt=""/>
          </div>
          <div className="about-product">
              <div className="detail-product">
                  <p className="title">{this.props.title}</p>
                  {/* <p className="desc">{this.props.desc}</p> */}
              </div>               
          </div>            
      </ProductsWrapper>
    )
  }
}

Category.defaultProps = {
  price: "00.00",
  title: "Title undescribe",
  desc: "Description undescribe",
  imgUrl: "https://images.pexels.com/photos/1149362/pexels-photo-1149362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}

const ProductsWrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 20% 30% 50%);
    background: white;
    height: 100px;
    margin: 20px 0;
    border: 1px solid white;
    border-left: 10px solid white;
    transition: 0.5s ease-in-out;
    box-sizing: content-box;
    :hover{
        box-sizing: content-box;
        border: 1px solid #cccfd6;
        border-left: 10px solid #cccfd6;
        cursor: pointer;
        box-shadow: 4px 5px 20px rgba(27, 113, 139, 0.15);
    }
    .select-product{
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        button{
            transform: rotate(270deg);
            background: transparent;
            border: none;
            font-size: 14px;
        }
    }
    .img-thumb{
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
    .about-product{
        display: flex;
        padding: 0 14px;
        align-items: center;
        vertical-align: middle;
        .detail-product{
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

