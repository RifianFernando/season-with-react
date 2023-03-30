import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
// // import Route from "./Pages/Route"
// import Header from './Pages/Header';
// import { Button } from 'technotic';


function App() {
    return (
        <div>
            <Router>
                <nav>
                    <Link style={{ 'color': 'black' }} to={'/'}>Home</Link>
                    <Link style={{ 'color': 'black' }} to={'/about'}>About</Link>
                    <Link style={{ 'color': 'black' }} to={'/profile'}>Profile</Link>
                    {/* <Button link={'/profile'} element={<Profile/>}>
                    <p style={{fontSize: '15px'}}>profile</p>
                </Button> */}
                    {/* <Header/> */}
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;