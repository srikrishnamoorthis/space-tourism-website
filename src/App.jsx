import { useEffect } from 'react';
import { NavLink, redirect, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';
import classnames from 'classnames';

function App() {
    const location = useLocation();
    const isHomePage = location.pathname.includes('/home');
    const isDestinationPage = location.pathname.includes('/destination');

    return (
        <div className={classnames('min-h-screen mx-auto min-w-[375px] md:pl-8 lg:max-w-[1440px] lg:pl-14 lg:pt-8 bg-primary \
            isolate grid grid-rows-[min-content_1fr]', {
            'lg:bg-[url(./assets/home/background-home-desktop.jpg)] md:bg-[url(./assets/home/background-home-tablet.jpg)] bg-[url(./assets/home/background-home-mobile.jpg)] bg-center bg-cover': isHomePage,
            'lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] md:bg-[url(./assets/destination/background-destination-tablet.jpg)] bg-[url(./assets/destination/background-destination-mobile.jpg)] bg-center bg-cover': isDestinationPage
        })}>
            <Header />
            <Routes>
                <Route path='/space-tourism-website/' element={<RedirectToHomePage />} />
                <Route path='/space-tourism-website/home' element={<Home />} />
                <Route path='/space-tourism-website/destination' element={<Destination />} />
                <Route path='/space-tourism-website/crew' element={<Crew />} />
                <Route path='/space-tourism-website/technology' element={<Technology />} />
            </Routes>
        </div>
    )
}

export default App;

function RedirectToHomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/space-tourism-website/home');
    }, []);
}