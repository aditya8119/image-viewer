import React, {Component} from 'react';
import Header from "./../../common/Header";
import Card from '@material-ui/core/Card';
import Route from 'react-router-dom';
import './Home.css';
import LoginCard from "./../Login/LoginCard";

class Home  extends Component{
constructor(props){
    super(props);
    this.state = {
        isLogin : false
    }
}

  render(){
    return (
      <div>
        <header>
          <Header/>
        </header> 
        {this.state.isLogin ? null : <LoginCard />}
      </div>
    );
  }
 
}

export default Home;
