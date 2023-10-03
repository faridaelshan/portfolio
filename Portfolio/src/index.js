import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css'

const App = () => {
  return (
      <div className='body'>
      <Router />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));