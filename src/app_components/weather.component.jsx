import React from "react"
//className='bg-blue-300 flex items-center border-r-2 border-black pl-6 h-32 w-16'  bg-blue-300 flex items-center 
const Weather = (props) =>
{
    return(
        <div className="container">
           <div className='flex justify-start bg-red-300 w-32 h-32'>
                <div className='flex items-center flex justify-center'>
                    <i className={`'flex items-center pt-16 px-5 border-r-4 bg-yellow-500 border-black h-32 w-16 wi ${props.weatherIcon}`}/>
                </div>
                <div className='flex items-center pl-6'>
                    {props.tempc ? <h1>{props.tempc}&deg;</h1> : null}
                </div>              
           </div>
           </div>
    )
}
export default Weather