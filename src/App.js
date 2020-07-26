import React, {Component} from 'react';
import {render} from 'react-dom'
import axios from 'axios';
import './tailwind.css';
import 'weather-icons/css/weather-icons.css';
import Navbar from './app_components/navbar';
import Weather from './app_components/weather.component';
import Dayte from './app_components/date';
import Loc from './app_components/location';
import Weathers from './app_components/weathers.component';
import Context from './app_components/contextual.search';
//https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key} - 1 day
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}- 7 days 

const api_key='aef5f0f7ef1f482eb40aeaa93c360e1e'
const lat=51.5074
const lon=0.1278
let ikon = []
let zz = 1
//const cnt=7
/*componentDidMount() 
{
  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
}*/
class App extends React.Component {
 constructor()
  {
    super();
    this.state = 
    {
      city_name: undefined,
      country_name: undefined,
      long: undefined,
      lat: undefined,
      tempc: [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      icon: [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      valid: undefined,
      error: false
    };
    //this.getWeather() not needed as the search bar will call for this 
    this.weatherIcon = 
    {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }     
  }

  componentDidMount()
   {console.log("position");
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log("position");
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    
    );
    }
   
  getWeatherIcon(icons,rangeId,i)
    { 
    
    
      switch(true)
      {
        case (rangeId>=200 && rangeId<=232):
          ikon[i]=this.weatherIcon.Thunderstorm
          break
        case (rangeId>=300 && rangeId<=321):
          ikon[i]=this.weatherIcon.Drizzle
          break
        case (rangeId>=400 && rangeId<=531):
          ikon[i]=this.weatherIcon.Rain
          break
        case (rangeId>=500 && rangeId<=622):
          ikon[i]=this.weatherIcon.Snow
          break
        case (rangeId>=600 && rangeId<=781):
          ikon[i]=this.weatherIcon.Atmosphere
          break
        case (rangeId===800):
          ikon[i]=this.weatherIcon.Clear
          break  
        case (rangeId>=800 && rangeId<=804):
          ikon[i]=this.weatherIcon.Clouds
        break

      }
      /*console.log(ikon)
      console.log(this.state.icon)*/
      if(i<=6) this.setState({icon: ikon})
    }

  tempcon = (t) =>
  { 
    for(let i=0;i<7;i++)
    {
     t[i]=(Math.floor(t[i]-273.15))
    }
    return t;
  
  }



  getWeather = async e =>
  {
    e.preventDefault()
    const city_name=e.target.elements.city.value;
    if(city_name)
    {
      const api_call1= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
      /* fetch('https://no-such-server.blabla') // rejects
    .then(response => response.json())
    .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary) */
      const response1 = await api_call1.json();
      console.log(response1)
      this.setState({
        city_name:response1.name,
        country_name: response1.sys.country,
        lat: response1.coord.lat,
        long: response1.coord.lon,
        valid: 1
      })
      console.log(this.state.lat)

      const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&exclude=${'hourly,current'}&appid=${api_key}`)

      const response2 = await api_call2.json();
      console.log(response2)
      let temperatures = []

      for(let i=0;i<7;i++)
      {
        temperatures.push(response2.daily[i].temp.day);
      }
      this.setState(
      {  
        tempc: this.tempcon(temperatures) 
      })

      for(let i=0;i<7;i++)
      {  
        this.getWeatherIcon(this.weatherIcon,response2.daily[i].weather[0].id,i) 
      }

    
  /*   else
    {
    this.setState({error: true})
  }*/
  
    }
  }

 
  

 // this.getWeatherIcon(this.getWeather,response.weather[0].id)
  
  render(){
    return(
      <div className="App">
        <Navbar loadWeather={this.getWeather} error={this.error} />
        <div className='w-full h-screen flex'>
          <div className='bg-green-900 w-1/4 h-screen '>
            <div className='flex-col h-screen flex justify-center index-center'>
              <Weathers tempc={this.state.tempc[1]} d = {zz} weatherIcon={this.state.icon[1]}/>
              <Weathers tempc={this.state.tempc[2]} d = {zz+1} weatherIcon={this.state.icon[2]}/>
              <Weathers tempc={this.state.tempc[3]} d = {zz+2} weatherIcon={this.state.icon[3]}/>
              <Weathers tempc={this.state.tempc[4]} d = {zz+3} weatherIcon={this.state.icon[4]}/>
              <Weathers tempc={this.state.tempc[5]} d = {zz+4} weatherIcon={this.state.icon[5]}/>
              <Weathers tempc={this.state.tempc[6]} d = {zz+5} weatherIcon={this.state.icon[6]}/>
             </div>
          </div>
          <div className='flex justify-center flex flex items-center bg-blue-900 w-2/4 h-screen'>
            <div className='justify-end' >
            <Weather tempc={this.state.tempc[0]} weatherIcon={this.state.icon[0]}/>
            <Dayte validity={this.state.valid}/>
            <Loc city={this.state.city_name} country={this.state.country_name}/>
            </div>
          </div>  
          <div className='flex justify-center flex items-center bg-red-900 w-1/4 h-screen'><Context query={this.state.country_name}/></div>
          
        </div>
      </div>
      );
  }

}
export default App;
