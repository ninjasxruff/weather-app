import React from "react"
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var d = new Date();
var n = d.getDay();

var dc = () =>
{
    switch(n)
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

var mc = () =>
{
    switch(month)
    {
        case 1: return 'January'
        break
        case 2: return 'February'
        break
        case 3: return 'March'
        break
        case 4: return 'April'
        break
        case 5: return 'May'
        break
        case 6: return 'June'
        break
        case 7: return 'July'
        break
        case 8: return 'August'
        break
        case 9: return 'September'
        break
        case 10: return 'October'
        break
        case 12: return 'November'
        break
        case 12: return 'December'
        break
    }
}
const Dayte = (props) =>
{
    return(
        <div className="container">
                {console.log(props.validity)}
               {props.validity === undefined ? null : <h3>{dc()}, {date}th {mc()} {year}</h3> }
        </div>
    );
}
export default Dayte