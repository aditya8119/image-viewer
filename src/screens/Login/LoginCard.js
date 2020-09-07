import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import "./LoginCard.css";
import FormHelperText from "@material-ui/core/FormHelperText" 
import Home from "../HomeScreen/Home";


class LoginCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            usernameRequired:"dispNone",
            passwordRequired:"dispNone",
            isLogin:"true",
            incorrectCredentials:"dispNone"
        }
    }
    loginClickHandler = (e) => {
        e.preventDefault();
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
        this.setState({incorrectCredentials:'dispNone'});

        if (this.state.usernameRequired === 'dispNone'){
            if(this.state.passwordRequired === 'dispNone'){
                if (this.state.username === "admin"){
                    if (this.state.password === "admin"){
                        this.props.updateLoginState(this.state.isLogin);
                    }
                } else {
                    this.setState({incorrectCredentials:'dispBlock'});
                }
                    
                
            }
        }

    }

    inputUsernameChangeHandler = (e) =>{
        this.setState({ username: e.target.value });
    }
    inputPasswordChangeHandler = (e) =>{
        this.setState({ password: e.target.value });
    }
    render(){
        return (
            <form className="login-card">
            <Card variant="outlined" raised={true} className="card-content">
              <CardContent>
                <Typography variant="h5">LOGIN</Typography>
                <br/>
                <FormControl required>
                    <InputLabel htmlFor="username">Username </InputLabel>
                    <Input id="username" type="text" className={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                    <FormHelperText className={this.state.usernameRequired}>
                    <span className="red">required</span>
                    </FormHelperText>
                </FormControl>
                <br/><br/>
                <FormControl required>
                    <InputLabel htmlFor="password">Password </InputLabel>
                    <Input id="password" type="password"  className={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                    <FormHelperText className={this.state.passwordRequired}>
                    <span className="red">required</span>
                    </FormHelperText>
                    <FormHelperText className={this.state.incorrectCredentials}>
                    <span className="red">Incorrect username and/or password</span>
                    </FormHelperText>
                </FormControl>
                <br/><br/><br/>
                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
            </CardContent>
            </Card>
            </form>
          );
    }

}

export default LoginCard;
