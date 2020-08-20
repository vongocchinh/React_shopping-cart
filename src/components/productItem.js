import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import * as formatCurrents from '../constans/formatCurrent';
import * as Message from './../Message/message';
 class productItem extends Component {
    addCart=()=>{
        
        this.props.addCart(this.props.value);
        this.props.Message(Message.ADD_CART)
    }
    render() {
        var product=this.props.value;
        return (
            <div className="col-lg-4 col-md-4 mb-r">
            <div className="card text-center card-cascade narrower">
                              <div className="view overlay hm-white-slight z-depth-1">
                                  <img src={product.images}
                                      className="img-fluid" alt="" />
                                  <a href="abc">
                                      <div className="mask waves-light waves-effect waves-light"></div>
                                  </a>
                              </div>
                              <div className="card-body">
                                  <h4 className="card-title">
                                      <strong>
                                          <a href="abc">{product.name}</a>
                                      </strong>
                                  </h4>
                                  <ul className="rating">
                                 <StarRatings value={product.star}
                                  starRatedColor="yellow"  
                                  starSpacing="2px" 
                                  starDimension="30px"
                                  rating={product.star}/>
                                  </ul>
                                  <p className="card-text">
                                     {product.des}
                                  </p>
                                  <div className="card-footer">
                                      <span className="left">{formatCurrents.FORMAT_CURRENT(product.price)} $</span>
                                      <span className="right">
                                          <button onClick={this.addCart} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                              <i  className="fa fa-shopping-cart"></i>
                                          </button>
                                      </span>
                                  </div>
                              </div>
                          </div>
                        </div>
        )
    }
}
export default productItem;