import { useState } from 'react'
import classnames from 'classnames';
import duglas from '../assets/crew/image-douglas-hurley.webp';
import mark from '../assets/crew/image-mark-shuttleworth.webp';
import victor from '../assets/crew/image-victor-glover.webp';
import ansari from '../assets/crew/image-anousheh-ansari.webp';

const images = {
    'douglas-hurley': duglas,
    'mark-shuttleworth': mark,
    'victor-glover': victor,
    'anousheh-ansari': ansari,
}

function Crew() {
    const [selectedTab, setSelectedTab] = useState(getNameKey(crew[0].name));

    return (
        <div className='px-6 lg:px-24 md:py-16 font-heading grid grid-cols-1 lg:grid-cols-[minmax(50%,70%)_minmax(30%,50%)] grid-rows-[min-content_1fr_min-content_1fr] md:grid-rows-[min-content_0.5fr_min-content_2fr] lg:grid-rows-[min-content_3fr_1fr] gap-x-12 gap-y-8 lg:max-h-[920px]'>
            <div className='uppercase font-body-cond text-[28px] text-white text-center md:text-left row-start-1 row-end-2 col-start-1 col-end-2'><span className='font-bold opacity-30 pr-4'>02</span><span>Meet your crew</span></div>
            {crew.map((item) => {
                const nameKey = getNameKey(item.name);
                console.log(nameKey);
                const isActive = selectedTab === nameKey;
                return (
                    <div key={nameKey} className={classnames('self-end lg:text-left text-center row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-start-1 col-end-2', { 'hidden': !isActive })}>
                        <div className='uppercase font-heading lg:text-[32px] md:text-2xl text-base opacity-30 text-white pb-4'>{item.role}</div>
                        <div className='uppercase font-heading lg:text-6xl md:text-4xl text-2xl text-white pb-8 md:pb-12 '>{item.name}</div>
                        <p className='font-body text-secondary leading-relaxed pb-8 lg:w-[70%] md:px-24 lg:px-0 text-base'>
                            {item.bio}
                        </p>
                    </div>
                )
            })}
            <ul className='flex gap-4 self-center lg:justify-start justify-center md:order-none row-start-3 row-end-4 col-start-1 col-end-2'>
                {crewNames.map(name => (
                    <li key={name} className={classnames('h-4 w-4 rounded-full bg-tertiary cursor-pointer hover:opacity-70 opacity-30', { 'bg-white opacity-100': selectedTab === name })} onClick={() => setSelectedTab(name)}></li>
                ))}
            </ul>
            <div className='self-end row-start-2 row-end-3 md:row-start-4 md:row-end-5 col-start-1 col-end-2 lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 border-b border-tertiary border-opacity-30 md:border-none'>
                <img src={images[selectedTab]} alt="" className='mx-auto h-56 md:h-[40rem] lg:h-auto' />
            </div>
        </div>
    )
}

export default Crew;

const crew = [
    {
        name: "Douglas Hurley",
        images: {
            png: "./assets/crew/image-douglas-hurley.png",
            webp: "./assets/crew/image-douglas-hurley.webp"
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "Mark Shuttleworth",
        images: {
            png: "./assets/crew/image-mark-shuttleworth.png",
            webp: "./assets/crew/image-mark-shuttleworth.webp"
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        images: {
            png: "./assets/crew/image-victor-glover.png",
            webp: "./assets/crew/image-victor-glover.webp"
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "Anousheh Ansari",
        images: {
            png: "./assets/crew/image-anousheh-ansari.png",
            webp: "./assets/crew/image-anousheh-ansari.webp"
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

const crewNames = crew.map(item => getNameKey(item.name));

function getNameKey(name = '') {
    return name.toLowerCase().split(' ').join('-');
}