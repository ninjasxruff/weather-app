import React from 'react';
import axios from 'axios';
import './tailwind.css';
import 'weather-icons/css/weather-icons.css';
import Navbar from './app_components/navbar';
import Weather from './app_components/weather.component';
import Dayte from './app_components/date';
import Loc from './app_components/location';
import Weathers from './app_components/weathers.component';
//https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key} - 1 day
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}- 7 days 

const api_key='aef5f0f7ef1f482eb40aeaa93c360e1e'

//const cnt=7
class App extends React.Component 
{
  constructor()
  {
    super();
    this.state = 
    {
      country: undefined,
      city: undefined,
      tempc: undefined,
      icon: undefined,
      valid:0,
      error: false
    };
    //this.getWeather()
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


getWeatherIcon(icons,rangeId)
  {
      switch(true)
      {
        case (rangeId>=200 && rangeId<232):
          this.setState({icon:this.weatherIcon.Thunderstorm})
          break
        case (rangeId>=300 && rangeId<321):
          this.setState({icon:this.weatherIcon.Drizzle})
          break
        case (rangeId>=400 && rangeId<531):
          this.setState({icon:this.weatherIcon.Rain})
          break
        case (rangeId>=500 && rangeId<622):
          this.setState({icon:this.weatherIcon.Snow})
          break
        case (rangeId>=600 && rangeId<781):
          this.setState({icon:this.weatherIcon.Atmosphere})
          break
        case (rangeId===800):
          this.setState({icon:this.weatherIcon.Clear})
        break  
        case (rangeId>=800 && rangeId<804):
          this.setState({icon:this.weatherIcon.Clouds})
        break

      }
    }

tempcon = (t) =>
{
  return(Math.floor(t-273.15))
}
  

getWeather = async (e) =>
{
  e.preventDefault()
  const city_name= e.target.elements.city.value;
  if(city_name)
  {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
    
  const response = await api_call.json();
  console.log(response)
  this.setState(
    {
      city: response.name,  
      country: response.sys.country,
      tempc: this.tempcon(response.main.temp),
      valid: 1
    })
  this.getWeatherIcon(this.weatherIcon,response.weather[0].id) 
  }
  else
  {
    this.setState({error: true})
  }
  
}

  
  

 // this.getWeatherIcon(this.getWeather,response.weather[0].id)
  
  render()
  {
    return (
      <div className="App">
        <Navbar loadWeather={this.getWeather} error={this.error} />
        <div className='w-full h-screen flex'>
          <div className='bg-green-900 w-1/4 h-screen '>
            <div className='flex-col h-screen flex justify-center index-center'>
              <Weathers tempc={this.state.tempc} weatherIcon={this.state.icon}/>
              <Weathers tempc={this.state.tempc} weatherIcon={this.state.icon}/>
              <Weathers tempc={this.state.tempc} weatherIcon={this.state.icon}/>
              <Weathers tempc={this.state.tempc} weatherIcon={this.state.icon}/>
              <Weathers tempc={this.state.tempc} weatherIcon={this.state.icon}/>
              <Weathers tempc={this.state.tempc} weatherIcon={this.state.icon}/>
             </div>
          </div>
          <div className='flex justify-center flex flex items-center bg-blue-900 w-2/4 h-screen'>
            <div className='justify-end' >
            <Weather tempc={this.state.tempc} weatherIcon={this.state.icon}/>
            <Dayte validity={this.valid}/>
            <Loc city={this.state.city} country={this.state.country}/>
            </div>
          </div>  
          <div className='flex justify-center flex items-center bg-red-900 w-1/4 h-screen'>Contextual icon</div>
          
        </div>
      </div>
      );
  }

}
export default App;
