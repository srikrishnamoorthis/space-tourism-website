import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';
import classnames from 'classnames';


function App() {
    return (
        <div className={classnames('min-h-screen mx-auto min-w-[375px] md:pl-8 lg:max-w-[1440px] lg:pl-14 lg:pt-8 bg-primary \
            isolate grid grid-rows-[min-content_1fr] lg:bg-[url(./assets/home/background-home-desktop.jpg)] \
            md:bg-[url(./assets/home/background-home-tablet.jpg)] bg-[url(./assets/home/background-home-mobile.jpg)] bg-center bg-cover')}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </div>
    )
}

export default App;