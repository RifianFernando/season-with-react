import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {lat:null};   
        
    // }
    state = {lat:null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate(){
        console.log('My componentwas just updated');
    }
    
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        // else if(!this.state.errorMessage && this.state.lat){
        //     return <div>Latitude: {this.state.lat}</div>;
        // }
        else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} err={this.state.errorMessage}/>;
        }
        else{
            return <div>Loading!!</div>
        }
        
        //return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);