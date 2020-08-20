import React, { Component } from 'react'
 class productList extends Component {
    render() {
        return (
            <section className="section">
                  <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                  <div className="row">
                     {this.props.dataProduct_list}
                  </div>
              </section>
        );
    }
    
 }


export default productList;