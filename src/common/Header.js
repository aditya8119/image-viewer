import React, {Component} from 'react';
import ExtendedHeader from './ExtendedHeader';
import "./Header.css";


class Header extends Component{
    render(){
        console.log("This.props.isLogin is "+this.props.loginState);
        return(
            <div className="header-style">
                <span>Image Viewer</span>
                {this.props.loginState ? <ExtendedHeader/>:null}
            </div>
        )
    }
}

export default Header;