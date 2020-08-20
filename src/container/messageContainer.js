import React, { Component } from 'react'
import { connect } from 'react-redux';
import Message from './../components/Message';
// import * as actions from './../actions/index';


 class messageContainer extends Component {
    render() {
        var {MessageRedux}=this.props;
      
        return (
            
            <Message message={MessageRedux}/>
        );
    }
    
   
}

const maStateToProps=(state)=>{
    return{
        MessageRedux:state.Message
    }
}
const dispatchToProps=(dispatch,props)=>{
    return{
        

    }
}
export default (connect(maStateToProps,dispatchToProps)) (messageContainer);