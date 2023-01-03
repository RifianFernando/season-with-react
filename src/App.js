import {
    BrowserRouter as Router, 
    Routes, 
    Route,
    Link
} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import {Button} from 'technotic'
import logo from './assets/Frame.svg'

function App(){
    return(
        // <Router>
            <nav>
                {/* <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link> */}
                <a href='/profile'>Home</a>
                <a>About</a>
                <Button link={'/profile'} element={<Profile/>}>
                    <p style={{fontSize: '10px'}}>profile</p>
                </Button>
            </nav>
            /* <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </Router> */
    );
};

export default App;