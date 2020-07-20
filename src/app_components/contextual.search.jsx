import React from "react"
import unirest from "unirest"
const Context = (props) =>
{

var unirest = require("unirest");

var req = unirest("GET", "https://bing-image-search1.p.rapidapi.com/images/search");

req.query({
	"q": props.query
});

req.headers({
	"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
	"x-rapidapi-key": "97f9b79eeemsh9e16538f55a377cp19f440jsn65aa20858245",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

    console.log(res.body);
    
return(<img src={res.body.value[0].thumbnailUrl}/>)
});
}

export default Context
