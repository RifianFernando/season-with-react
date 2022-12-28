import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SeasonDisplay from './SeasonDisplay';

// class App extends React.Component{
//     state = {
//         lat:null, 
//         errorMessage: ''
//     };

//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({ lat: position.coords.latitude }),
//             err => this.setState({ errorMessage: err.message })
//         );
//     }

//     componentDidUpdate(){
//         console.log('My componentwas just updated');
//     }
    
//     render(){
//         if(this.state.errorMessage && !this.state.lat){
//             return <div>Error: {this.state.errorMessage}</div>;
//         }
//         // else if(!this.state.errorMessage && this.state.lat){
//         //     return <div>Latitude: {this.state.lat}</div>;
//         // }
//         else if(!this.state.errorMessage && this.state.lat){
//             return <SeasonDisplay lat={this.state.lat} err={this.state.errorMessage}/>;
//         }
//         else{
//             return <div>Loading!!</div>
//         }
        
//         //return <div>Latitude: {this.state.lat}</div>;
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
