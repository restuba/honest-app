import React, { Component } from 'react';
import API from '../../service/Service';
import Category from './Category';

class Categories extends Component{
    state = {
        categories: []
    }

    componentDidMount(){
        this.getCategories();
    }

    getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))];
    };

    getCategories = () => {        
        API.getProducts().then(result => {
            let CategoriesProduct = this.getUnique(result, "category");
            this.setState({
                categories: CategoriesProduct
            })
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.categories.map((item, index) => {
                        return <Category key={index} title={item} />
                    })
                }
            </div>
            
        );
    }
};




export default Categories;