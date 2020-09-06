import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import "./LoginCard.css"


export default function LoginCard() {
return (
    <div className="login-card">
    <Card variant="outlined" raised={true} className="card-content">
      <CardContent>
        <Typography variant="h5">LOGIN</Typography>
        <br/>
        <FormControl required>
            <InputLabel htmlFor="username">Username </InputLabel>
            <Input id="username" type="text" className="full-width"/>
        </FormControl>
        <br/><br/>
        <FormControl required>
            <InputLabel htmlFor="password">Password </InputLabel>
            <Input id="password" type="password" className="full-width" />
        </FormControl>
    </CardContent>
    <br/>
      <CardActions>
        <Button variant="contained" color="primary">LOGIN</Button>
      </CardActions>
    </Card>
    </div>
  );
}
