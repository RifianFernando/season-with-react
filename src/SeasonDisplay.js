import React from "react";

const seasonConfig = {
    summer: {
        text: "let's hit the beach",
        iconName: 'sun'
    },
    winter:{
        text: "Burr need an firecamp",
        iconName: "snowflake"
    }
}

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
    const {text, iconName} = seasonConfig[season]// {text, iconname}

    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

//passing props with class component
// class SeasonDisplay extends React.Component{
//     render(){
//         return <h1>Hello, {this.props.lat}</h1>
//     }
// }

export default SeasonDisplay;