import React, { Component } from 'react';
import './App.css';

import {SelectBox} from './SelectBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-info is-large">
         
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-center">
                  <a className="nav-item">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Baidu.svg/640px-Baidu.svg.png" alt="Logo" />
                  
                  </a>
                </div>
                
               </div>
            </header>
          </div>

          
          <div className="hero-body">
            <SelectBox />
          </div>

       
          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Can</a></li>
                  <li ><a>We</a></li>
                  <li className="is-active"><a>Look</a></li>
                  <li ><a>After</a></li>
                  <li className="is-active"><a>Your </a></li>
                  <li ><a>Dear</a></li>
                  <li className="is-active"><a>Computer</a></li>
                  <li ><a>?</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
