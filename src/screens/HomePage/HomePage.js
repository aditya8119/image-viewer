import React, {Component} from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./HomePage.css"
import { PropTypes } from 'react';


class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            imageCache: []
        };

        this.prepareImageRepository = this.bind.prepareImageRepository(this);
    }


    render(){
        function httpGet(requestType,imageId){
            var masterUrl = "https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJVWHphNk43azdNc01jd0c4SVNEMmpueERMQ2Rwd3dLV1ZAtNWQ1TVUzeUhVZAWxPVG5XNVpyOEc1RUxfRjJsWjUzN0g2MzJtS2NGa1JvYWs5RFVKdzN0Qm9NRFBOQ1IxVm1KSzFFbDNKdjFrRVQ4ZAQZDZD";
            var graphUrl = "https://graph.instagram.com/"+imageId+"?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJVWHphNk43azdNc01jd0c4SVNEMmpueERMQ2Rwd3dLV1ZAtNWQ1TVUzeUhVZAWxPVG5XNVpyOEc1RUxfRjJsWjUzN0g2MzJtS2NGa1JvYWs5RFVKdzN0Qm9NRFBOQ1IxVm1KSzFFbDNKdjFrRVQ4ZAQZDZD";
            var xmlHttp = new XMLHttpRequest();
            if (requestType==="masterUrl"){
                
                xmlHttp.open( "GET", masterUrl, false ); // false for synchronous request
                xmlHttp.send( null );
                console.log("SENDING HTTP Request to " + masterUrl);
            }
            else if(requestType==="graphUrl"){
    
                xmlHttp.open( "GET", graphUrl, false ); // false for synchronous request
                xmlHttp.setRequestHeader("Cache-Control","no-cache");
                xmlHttp.send( null );
                console.log("SENDING HTTP Request to " + graphUrl);
    
            }
            console.log("RECEIVED Resoponse : " + xmlHttp.responseText);
            return(xmlHttp.responseText);
        }
    
        function prepareImageRepository(){
            var masterList = httpGet("masterUrl");
            var imageDictionary = JSON.parse(masterList);
            var imageList = imageDictionary["data"];
            var imageRepository = {};
            console.log("Length of imageList is " + imageList.length);
            for (var i=0;i<imageList.length;i++){
                imageRepository[imageList[i]["id"]]={"caption":imageList[i]["caption"]};
                //var count = i+1;
                // console.log("Image No " + count );
                // console.log(" Image key " + imageList[i]["id"]);
                // console.log(" Caption "  + imageList[i]["caption"]);
                var imageDetailsText = httpGet("graphUrl",imageList[i]["id"]);
                var imageDetails = JSON.parse(imageDetailsText);
                console.log("URL is " + imageDetails["media_url"]);
                // imageRepository[imageList[i]["id"]]["url"] = imageDetails["media_url"];
                console.log("Timestamp is " + imageDetails["timestamp"]);
                // imageRepository[imageList[i]["id"]]["timestamp"] = imageDetails["timestamp"];
                console.log(" username is " + imageDetails["username"]);
                // imageRepository[imageList[i]["id"]]["username"] = imageDetails["username"];
                // imageRepository[imageList[i]["id"]]["comments"] = [];
                // imageRepository[imageList[i]["id"]]["likes"] = Math.floor(Math.random() * 10);

                var newElement = {"id":imageList[i]["id"], "url":imageDetails["media_url"], "stimestamp":imageDetails["timestamp"],"username":imageDetails["username"],
                                    "comments":[],
                                    "likes":Math.floor(Math.random() * 10)};
                console.log(newElement);
                this.setState({ 
                    imageCache: [...this.state.imageCache,newElement]
                  });
            }

            
        }
        return(
            <div className="content-screen">
                {prepareImageRepository()}
                <ImageCard/>
            </div>
        )
    }
}

export default HomePage;