import React, {Component} from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./HomePage.css"


class HomePage extends Component{
    render(){
        return(
            <div className="content-screen">
                <ImageCard/>
            </div>
        )
    }
}

export default HomePage;