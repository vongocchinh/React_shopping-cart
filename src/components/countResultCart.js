import React, { Component } from 'react'
import * as formatCurrents from '../constans/formatCurrent';
 class countResultCart extends Component {
    render() {
        var {cart}=this.props;
        return (
            <tr>
                            <td colSpan="3"></td>
                            <td>
                                <h4>
                                    <strong>Tổng Tiền</strong>
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    <strong>{formatCurrents.FORMAT_CURRENT(this.totalCart(cart))}  $</strong>
                                   
                                </h4>
                            </td>
                            <td colSpan="3">
                                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                    <i className="fa fa-angle-right right"></i>
                                </button>
                            </td>
                        </tr>
        )
    }
    totalCart=(cart)=>{
        var total=0;
        for(let i=0;i<cart.length;i++){
            total+=cart[i].product.price * cart[i].quantity;
        }
        return total;
    }
}
export default countResultCart;