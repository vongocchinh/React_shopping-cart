import React,{Component} from 'react';
import Header from './components/header';
import ProductListContainer from './container/containerProduct';
import CartContainer from './container/cartContainer';
import Footer from './components/footer';
import MessageContainer from './container/messageContainer';
import { connect } from 'react-redux';
import * as action from './actions/index';
class App extends Component {
componentDidMount(){
  this.props.Product_Data_List();
}
  render(){
    
      return (
      <div>
    <Header/>
      <main id="mainContainer">
          <div className="container">
            <ProductListContainer/>
            <MessageContainer/>
            <CartContainer/>
          </div>
      </main>
    <Footer/>
  </div>
  );
}
}

const dispatchToProps=(dispatch,props)=>{
  return {
    Product_Data_List:()=>{
      dispatch(action.Product_Data_List())
    }
  }
}
export default connect(null,dispatchToProps)(App);
