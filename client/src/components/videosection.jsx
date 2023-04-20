// using youtube api to get video id and title and store in the database and display in the history page
// Compare this snippet from server\Routes\History.js:
// also show few videos on this page

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Video = ()=>{

    const [video, setVideo] = useState([]);

    useEffect(() => {
        axios.get('https://api.apilayer.net/youtube/search?q=q&hl=hl&gl=gl&cursor=cursor&apikey=FtKeeXwQsVgSJVOuaxFgE9vwf3Fy55GY')
        .then(res => {
            console.log(res.data);
            setVideo(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

const search = async () => {
    var myHeaders = new Headers();
myHeaders.append("apikey", "FtKeeXwQsVgSJVOuaxFgE9vwf3Fy55GY");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/youtube/search?q=q&hl=enl&gl=in&cursor=cursor", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


}

    return(

        <div>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default Video;
    