import React, {Component} from 'react';
import Header from "./../../common/Header";
import Card from '@material-ui/core/Card';
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
