import React,{Component} from 'react';
import Header from './components/header';
import ProductListContainer from './container/containerProduct';
import CartContainer from './container/cartContainer';
import Footer from './components/footer';
import MessageContainer from './container/messageContainer';

class App extends Component {
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

export default App;
