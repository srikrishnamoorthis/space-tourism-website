import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';


function App() {
    return (
        <div className="h-screen mx-auto lg:max-w-[1440px] lg:pl-14 lg:pt-8 bg-primary bg-[url(./assets/home/background-home-desktop.jpg)] bg-no-repeat bg-cover bg-fixed bg-right-bottom">
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