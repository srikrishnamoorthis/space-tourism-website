import { useState } from 'react';
import classnames from 'classnames';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import { getNameKey } from '../common/utils';

const images = {
    'launch-vehicle': {
        portrait: launchVehiclePortrait,
        landscape: launchVehicleLandscape,
    },
    'spaceport': {
        portrait: spaceportPortrait,
        landscape: spaceportLandscape,
    },
    'space-capsule': {
        portrait: spaceCapsulePortrait,
        landscape: spaceCapsuleLandscape,
    }
}

function Technology() {
    const [selectedTab, setSelectedTab] = useState(technologyTabs[0]);  
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[5rem_1.5fr_1fr] grid-rows-[min-content_1fr_min-content_1fr] lg:grid-rows-[min-content_1fr] md:py-8 lg:py-16 lg:pl-24 lg:max-h-[900px] lg:gap-x-12 gap-y-8 text-white text-center lg:text-left items-center'>
            <div className='px-6 lg:px-0 uppercase font-body-cond text-[28px] text-white md:text-left col-start-1 col-end-2 md:col-end-3 row-start-1 row-end-2 text-left '><span className='font-bold opacity-30 pr-4'>03</span><span>space launch 101</span></div>
            <ol className='px-6 lg:px-0 flex lg:flex-col gap-8 text-base md:text-xl lg:text-3xl font-heading row-start-3 row-end-4 lg:row-start-2 lg:row-end-3 col-start-1 col-end-2 justify-self-center'>
                {technologyTabs.map((tab, index) => (
                    <li key={tab} className={classnames('h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 px-2 rounded-full border border-white border-opacity-30 hover:border-opacity-100 flex justify-center items-center', { 
                        'bg-white text-primary': tab === selectedTab
                    })} onClick={() => setSelectedTab(tab)}>{index + 1}</li>
                ))}
            </ol>
            <div className='px-6 lg:px-0 col-start-1 col-end-2 row-start-4 row-end-5 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 items-center'>
                <div className='uppercase text-secondary font-body-cond text-base tracking-[2.7px] mb-1'>The Terminology...</div>
                {technologyData.map(({ name, description }) => (
                    <div className={classnames('', { 'hidden': selectedTab !== getNameKey(name)})}>
                        <h2 className='uppercase font-heading lg:text-6xl md:text-4xl text-2xl text-white pb-8 md:pb-12 '>{name}</h2>
                        <p className='font-body text-base md:text-lg text-secondary w-[70%] lg:w-full mx-auto lg:mx-0'>{description}</p>
                    </div>
                ))}
            </div>
            <div className='justify-self-stretch lg:justify-self-end self-center row-start-2 row-end-3 lg:row-start-1 lg:row-end-3 col-start-1 col-end-2 lg:col-start-3 lg:col-end-4'>
                <img src={images[selectedTab].portrait} alt="" className='hidden lg:block'/>
                <img src={images[selectedTab].landscape} alt="" className='lg:hidden w-full'/>
            </div>
        </div>
    )
}

export default Technology;


const technologyData = [
    {
        name: "Launch vehicle",
        images: {
            portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
            landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "Spaceport",
        images: {
            portrait: "./assets/technology/image-spaceport-portrait.jpg",
            landscape: "./assets/technology/image-spaceport-landscape.jpg"
        },
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        name: "Space capsule",
        images: {
            portrait: "./assets/technology/image-space-capsule-portrait.jpg",
            landscape: "./assets/technology/image-space-capsule-landscape.jpg"
        },
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
];

const technologyTabs = technologyData.map(item => getNameKey(item.name));