import React, { Component } from 'react'
import { connect } from 'react-redux';
import  ProductList from './../components/productList';
import ProductItem from './../components/productItem';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

 class containerProduct extends Component {
    render() {
        var {dataProduct}=this.props;
       
        return (
            <ProductList 
            
            dataProduct_list={this.showDataProduct(dataProduct)}/>
        );
    }
    
    showDataProduct=(products)=>{
        var result=null;
        var addCartRedux=this.props.addCartRedux;
        var {MessageRedux}=this.props;
        if(products){
            result=products.map((value,key)=>{
                return  <ProductItem key={key}
                            value={value}
                            addCart={addCartRedux}
                            Message={MessageRedux}
                        />
            });
        }
        return result;
    }
}
containerProduct.propTypes={
    dataProduct:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            des:PropTypes.string.isRequired,
            qty:PropTypes.number.isRequired,
            star:PropTypes.number.isRequired,
            images:PropTypes.string.isRequired
        })
    ).isRequired
}
const maStateToProps=(state)=>{
    return{
        dataProduct:state.Product_Data
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        addCartRedux:(product)=>{
            dispatch(actions.ADD_CART(product,1));
        },
        MessageRedux:(message)=>{
            dispatch(actions.AddMessage(message));
        }
    }
}
export default (connect(maStateToProps,dispatchToProps)) (containerProduct);