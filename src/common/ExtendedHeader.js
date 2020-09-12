import React, {Component} from 'react';
import "./ExtendedHeader.css";
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from "../assets/supandi.png";
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';


class ExtendedHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            dropDown:'dispNone'

        }
        
    }
    displayMenu = (e) => {
        console.log("Inside Display Menu");
        if (this.state.dropDown === 'dispNone'){
            this.setState({dropDown:'dropdown-menu'});
        }
        if (this.state.dropDown === 'dropdown-menu'){
            this.setState({dropDown:'dispNone'});
        }
    }

    closeDropdown = (e) => {
        this.setState({dropDown:'dispNone'});
    }

    openDropdown = (e) => {
        this.setState({dropDown:'dropdown-menu'});
    }
    render(){
        return(
            <div>
                <span className="search-box">
                    <span>
                        <SvgIcon component={SearchIcon} className="search-icon" >
                        </SvgIcon>
                    </span>
                    <span  className="search-field">
                    <InputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'naked' }}
                            style={{width:'247px'}}
                        />
                    </span>
                </span>
                <span className="profile-icon">
                        <IconButton onClick={this.displayMenu} onMouseLeave={this.closeDropdown}>
                            <Avatar alt="Profile Icon" src={ProfilePic} style={{height:'50px', width:'50px'}}/>
                        </IconButton>
                </span>
                <span className={this.state.dropDown} onMouseEnter={this.openDropdown} onMouseLeave={this.closeDropdown}>
                    <Typography variant="subtitle1">My Account</Typography>
                    <hr className="horizontal-rule"/>
                    <Typography variant="subtitle1">Logout</Typography>
                </span>
            </div>
        )
    }
}

export default ExtendedHeader;