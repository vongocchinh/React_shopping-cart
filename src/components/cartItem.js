import React, { Component } from 'react'
import * as formatCurrents from '../constans/formatCurrent';
import * as Message from './../Message/message';
 class cartItem extends Component {
    deleteCart=()=>{
        this.props.deleteCart(this.props.value);
        this.props.MessageDe(Message.DELETE_CART);
    }
    onIncrease=()=>{
        this.props.onIncrease(this.props.value);
        this.props.MessageUp(Message.UPDATE_CART);
    }
    onReduction=()=>{
        this.props.onReduction(this.props.value);
        this.props.MessageUp(Message.UPDATE_CART);
    }
   
    render() {
        var cart=this.props.value;
        return (
            
                <tr>
                    <th>{this.props.CartTrong}</th>
                    <th scope="row">
                        <img src={cart.product.images}
                            alt="" className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{cart.product.name}</strong>
                        </h5>
                    </td>
                    <td>{formatCurrents.FORMAT_CURRENT(cart.product.price)} $</td>
                    <td className="center-on-small-only">
                        <span className="qty">{cart.quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label onClick={this.onReduction} className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light">
                                —
                            </label>
                            <label onClick={this.onIncrease}  className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light">
                                +
                            </label>
                        </div>
                    </td>
                    <td>{formatCurrents.FORMAT_CURRENT(formatCurrents.TotalCartItem(cart.product.price,cart.quantity))} $</td>
                    <td>
                        <button type="button" onClick={this.deleteCart} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item">
                            X
                        </button>
                    </td>
                </tr>
        );
    }
}
export default cartItem;
