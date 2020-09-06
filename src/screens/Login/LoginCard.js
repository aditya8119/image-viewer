import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import "./LoginCard.css";
import FormHelperText from "@material-ui/core/FormHelperText" 


class LoginCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            usernameRequired:"dispNone",
            passwordRequired:"dispNone"
        }
    }
    loginClickHandler = (e) => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) =>{
        this.setState({ username: e.target.value });
    }
    inputPasswordChangeHandler = (e) =>{
        this.setState({ password: e.target.value });
    }
    render(){
        return (
            <div className="login-card">
            <Card variant="outlined" raised={true} className="card-content">
              <CardContent>
                <Typography variant="h5">LOGIN</Typography>
                <br/>
                <FormControl required>
                    <InputLabel htmlFor="username">Username </InputLabel>
                    <Input id="username" type="text" className="full-width"/>
                    <FormHelperText className={this.state.usernameRequired} onChange={this.inputUsernameChangeHandler}>
                    <span className="red">required</span>
                    </FormHelperText>
                </FormControl>
                <br/><br/>
                <FormControl required>
                    <InputLabel htmlFor="password">Password </InputLabel>
                    <Input id="password" type="password" className="full-width" />
                    <FormHelperText className={this.state.passwordRequired} onChange={this.inputPasswordChangeHandler}>
                    <span className="red">required</span>
                    </FormHelperText>
                </FormControl>
                <br/><br/><br/>
                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
            </CardContent>
            </Card>
            </div>
          );
    }

}

export default LoginCard;
