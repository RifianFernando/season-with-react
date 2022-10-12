import React from "react";

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }

}
//passing props with const element
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'summer' ? 'Its hottt' : 'burrr';

    return (
        <div>SeasonDisplay {text}</div>
    );
};

//passing props with class component
// class SeasonDisplay extends React.Component{
//     render(){
//         return <h1>Hello, {this.props.lat}</h1>
//     }
// }

export default SeasonDisplay;