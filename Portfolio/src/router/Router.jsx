import React,{Suspense} from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../components/static/Nav'
import Home from '../components/pages/Home'
import NotFoundPage from '../components/pages/NotFoundPage'
import Portfolio from '../components/pages/Portfolio'
import Contact from '../components/pages/Contact'
import About from '../components/pages/About'


const Router = () => {
    return (
      <Suspense fallback="...loading">        
       <BrowserRouter>
        <Nav />
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={Portfolio} path="/portfolio"></Route>
          <Route component={Contact} path="/contact"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={NotFoundPage} ></Route>
        </Switch>
       </BrowserRouter>
      </Suspense>
    )
  }
  
  export default Router