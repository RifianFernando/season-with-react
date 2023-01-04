import {
    BrowserRouter as Router, 
    Routes, 
    // Route,
    Link
} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import Route from "./Pages/Route"
import Header from './Pages/Header';
import {Button} from 'technotic'
import logo from './assets/Frame.svg'

function App(){
    return(
        // <Router>
        <div>
            <nav>
                {/* <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link> */}
                {/* <a href='/'>Home</a>
                <a href='/about'>About</a>
                <Button link={'/profile'} element={<Profile/>}>
                    <p style={{fontSize: '15px'}}>profile</p>
                </Button> */}
                <Header/>
            </nav>
            {/* <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes> */}
            <Route path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
        </div>
        // </Router> */
    );
};

export default App;