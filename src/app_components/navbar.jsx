import React from "react"
import SearchBar from "./searchbar"
import t from './assets/twitter.png';
import i from './assets/instagram.png';

const Navbar = (props) =>
{
    return(
        <div className="container">
                <div className='flex justify-between w-screen'>
                <div className='flex w-1/3 justify-start'>
                    <a href='https://www.twitter.com/' target="_blank"><img className='w-10 h-10 m-4' src={t}/></a>
                    <a href='https://www.instagram.com/'target="_blank"><img className='w-10 h-10 m-4' src={i}/></a>
                </div>
                <h1 className='text-3xl p-4 bg-black text-white w-1/3 font-serif flex justify-center text-bold'>Wearest.</h1>
                <SearchBar loadWeather={props.loadWeather} error={props.error}/>
                </div>
        </div>
    );
}
export default Navbar