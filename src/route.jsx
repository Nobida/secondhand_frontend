import React from "react";
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Loadable from "react-loadable";
import Loadings from './components/Loadings'

const asyncComponent = (importComponent)=> {
    return Loadable(
      {
        loader: importComponent,
        loading: Loadings
      }
    )
}

const AsyncHome = asyncComponent(()=>import('./containers/Home'))
const AsyncUser = asyncComponent(()=>import('./containers/User'))

const RouteConfig = ( 
  <HashRouter> 
    <Route path='/home' component={AsyncHome}/>
    <Route path='/user' component={AsyncUser}/>
  </HashRouter>  
)


export default RouteConfig 
