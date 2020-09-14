import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ProfilePic from "../../assets/supandi.png";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./ImageCard.css";

class ImageCard extends Component {
    render(){
        return(
            <div>
                <Card raised="true" className="image-card">
                    <CardHeader action={
                        <span>
                        <IconButton className="profile">
                        <Avatar alt="Profile Icon" src={ProfilePic} style={{height:'60px', width:'60px'}}/>
                        </IconButton>
                        <span className="user-id">
                        <Typography variant="p">
                            suppandi8119 
                        </Typography>  
                        </span>
                        <br/>
                        <span class="post-date">
                        <Typography variant="subtitle2">
                            03/09/2020 16:07:24
                        </Typography>
                        </span>
                        </span>
                    }>
                    </CardHeader>
                    <CardContent>
                        Card Content
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ImageCard;