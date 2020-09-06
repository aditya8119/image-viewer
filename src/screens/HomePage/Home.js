import React, {Component} from 'react';
import Header from "./../../common/Header";
import Card from '@material-ui/core/Card';
import Route from 'react-router-dom';
import './Home.css';

class Home  extends Component{

  render(){
    return (
      <div>
        <header>
          <Header/>
        </header> 
      </div>
    );
  }
 
}

export default Home;
