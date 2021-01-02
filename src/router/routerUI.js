import React, { Component } from 'react'
import {BrowserRouter as Switch,Route} from 'react-router';

export default class routerUI extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route  exact path="/" component={}>

                    </Route>
                    <Route  exact path="/cart" component={}>

                    </Route>
                   
                    
                </Switch>
            </div>
        )
    }
}
     