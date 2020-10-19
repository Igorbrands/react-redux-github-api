import React, { Component } from 'react';
import Search from './Search';
import GlobalStyle from '../styles/global';


class App extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">
                <Search />
                <GlobalStyle />
            </div>
        </div>
    )
  }
  
}

export default App;
