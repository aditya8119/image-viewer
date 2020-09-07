import React, {Component} from 'react';
import Header from "../../common/Header";
import './Home.css';
import LoginCard from "../Login/LoginCard";
import HomePage from "./../HomePage/HomePage";

class Home  extends Component{
constructor(props){
    super(props);
    this.state = {
        isLogin : false,
        accessToken : ""
    }
    this.updateLoginState = this.updateLoginState.bind(this);
}

updateLoginState(updatedState){
  this.setState({isLogin:updatedState});
  console.log("Update Login Called");
}

  render(){
    return (
      <div>
        <header>
          <Header/>
        </header> 
        {this.state.isLogin ? <HomePage/> : <LoginCard updateLoginState = {this.updateLoginState}/>}
      </div>
    );
  }
 
}

export default Home;
