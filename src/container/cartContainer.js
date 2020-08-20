import React, { Component } from 'react'
import { connect } from 'react-redux';
import CartList from './../components/cartList';
import CartItem from './../components/cartItem';
import CountResult from './../components/countResultCart';
import * as actions from './../actions/index';


// import PropTypes from 'prop-types';

 class cartContainer extends Component {
    render() {
        var {dataCart}=this.props;
       
        return (
            <CartList
             cart={this.showDataCart(dataCart)}
             showResultCart={this.showResultCart(dataCart)}
            />
        );
    }
    showDataCart=(Cart)=>{
        var result=null;
        var {MessageDeRedux,MessageUpRedux}=this.props;
        if(Cart){
            if(Cart.length >0){
                result=Cart.map((value,key)=>{
                    return  <CartItem key={key}
                                value={value}
                                deleteCart={this.deleteCart}
                                onReduction={this.onReduction}
                                onIncrease={this.onIncrease}
                                MessageDe={MessageDeRedux}
                                MessageUp={MessageUpRedux}
                            />
                });
            }
            
        }
        return result;
    }
    showResultCart=(cart)=> {
            return <CountResult cart={cart}/>
       
    }
    deleteCart=(cart)=>{
        this.props.onDeleteCart(cart);
    }
    onReduction=(cart)=>{
        this.props.onReductionRedux(cart);
    }
    onIncrease=(cart)=>{
        this.props.onIncreaseRedux(cart);
    }
}
// cartContainer.propTypes={
    
//     dataCart:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.string.isRequired,
//             name:PropTypes.string.isRequired,
//             price:PropTypes.number.isRequired,
//             des:PropTypes.string.isRequired,
//             qty:PropTypes.number.isRequired,
//             star:PropTypes.number.isRequired,
//             images:PropTypes.string.isRequired
//         }),
//         PropTypes.shape({
//             quantity:PropTypes.number.isRequired
//         })
       
//     ).isRequired
// }
const maStateToProps=(state)=>{
    return{
        dataCart:state.CART
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        onDeleteCart:(cart)=>{
            dispatch(actions.DELETE_CART(cart));
        },
        onReductionRedux:(cart)=>{
            dispatch(actions.UPDATE_CART_GIAMS(cart));
        },
        onIncreaseRedux:(cart)=>{
            dispatch(actions.UPDATE_CART_TANGS(cart));
        }
        ,
        MessageDeRedux:(message)=>{
            dispatch(actions.DeMessage(message));
        },
        MessageUpRedux:(message)=>{
            dispatch(actions.UpMessage(message));
        }

    }
}
export default (connect(maStateToProps,dispatchToProps)) (cartContainer);