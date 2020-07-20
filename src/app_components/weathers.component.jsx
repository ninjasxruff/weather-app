import React from "react"

var date = new Date().getDate(); //To get the Current Date
var d = new Date();
var n = d.getDay();

var dc = (p) =>
{
    switch(p%7)
    {
        case 1: return 'Monday'
        break
        case 2: return 'Tuesday'
        break
        case 3: return 'Wednesday'
        break
        case 4: return 'Thursday'
        break
        case 5: return 'Friday'
        break
        case 6: return 'Saturday'
        break
        case 0: return 'Sunday'
        break
        default: return 'Noday'
    }
}

const Weathers = (props) =>
{
    return(<div>
        <div className="container">
            <div className='flex justify-end bg-red-300 w-16 h-16'>
            <div className='flex items-center flex justify-center'>
                    <i className={`'flex items-center pt-2 pl-8 border-r-4 bg-yellow-500 border-black h-8 w-16 wi ${props.weatherIcon}`}/>
                </div>  
                <div>
                
                {props.tempc ? <h1 className='flex items-center pl-3 pt-6'>{props.tempc}&deg;</h1> : null}
                </div>
                
                
           </div>
           </div>
           {props.tempc ? <p>{dc(n+props.d)}</p>  : null}
           </div>
    )
}
export default Weathers