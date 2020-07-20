import React from 'react'

const SearchBar= props=>
{
    return(
    <div>
        <div>{props.error ? error() : null}</div>
        <form className='flex' onSubmit={props.loadWeather}>
            <input name='city'className="w-3/4 focus:bg-gray-600 border border-gray-900 w-1/3 ml-20 mr-2 my-5 rounded-full my-4 p-2 block text-gray-400" type="text" autoComplete="off" placeholder="search place"/>
            <button className=" bg-orange-300 hover:bg-orange-600 focus:bg-orange-900 focus:text-orange-100 rounded-full mr-5 my-5 p-2">Search</button>
        </form>
    </div>
    
    )
}

function error()
{
    return(
        <div className="alert"role="alert">Please enter valid city name</div>
    )
}
export default SearchBar