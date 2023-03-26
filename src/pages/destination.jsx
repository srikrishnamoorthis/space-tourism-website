import { useState } from 'react';
import classnames from 'classnames';
import moonImg from '../assets/destination/image-moon.webp';
import marsImg from '../assets/destination/image-mars.webp';
import europaImg from '../assets/destination/image-europa.webp';
import titanImg from '../assets/destination/image-titan.webp';

// Due to vite's inability to bundle images with appended base path
// TODO: Find better way
const images = {
    Moon: moonImg,
    Mars: marsImg,
    Europa: europaImg,
    Titan: titanImg
}

function Destination() {
    const [selectedTab, setSelectedTab] = useState(destinationTabTitles[0]);
    return (
        <div className='px-6 md:px-12 lg:pl-0 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 text-white place-items-center'>
            <div>
                <picture>
                    <img src={images[selectedTab]} alt="" />
                </picture>
            </div>
            <div className='text-center lg:text-left'>
                <ul className='font-body-cond tracking-[2.7px] flex gap-8 text-base justify-center lg:justify-start'>
                    {destinationTabTitles.map(title => (
                        <li
                            key={title}
                            onClick={() => setSelectedTab(title)}
                            className={classnames('cursor-pointer py-2 hover:border-b-2 hover:border-tertiary uppercase text-secondary', {
                                'border-b-2 border-white': title === selectedTab
                            })}>{title}</li>
                    ))}
                </ul>
                {destinations.map(({ name, description, distance, travel }) => (
                    <div key={name}>
                        {name === selectedTab &&
                            <div className='mt-8'>
                                <h2 className='font-heading text-8xl uppercase mb-8'>{name}</h2>
                                <p className='font-body mb-16 text-secondary'>{description}</p>
                                <div className='py-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 border-t border-[#383B4B]'>
                                    <div className=''>
                                        <div className='uppercase font-body-cond tracking-[2.35px] text-sm mb-4 text-secondary'>Avg. distance</div>
                                        <div className='uppercase font-heading text-3xl'>{distance}</div>
                                    </div>
                                    <div className=''>
                                        <div className='uppercase font-body-cond tracking-[2.35px] text-sm mb-4 text-secondary'>Est. Travel Time</div>
                                        <div className='uppercase font-heading text-3xl'>{travel}</div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Destination;

const destinations = [
    {
        name: 'Moon',
        images: {
            png: './assets/destination/image-moon.png',
            webp: './assets/destination/image-moon.webp'
        },
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days'
    },
    {
        name: 'Mars',
        images: {
            png: './assets/destination/image-mars.png',
            webp: './assets/destination/image-mars.webp'
        },
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months'
    },
    {
        name: 'Europa',
        images: {
            png: './assets/destination/image-europa.png',
            webp: './assets/destination/image-europa.webp'
        },
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years'
    },
    {
        name: 'Titan',
        images: {
            png: './assets/destination/image-titan.png',
            webp: './assets/destination/image-titan.webp'
        },
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years'
    }
];

const destinationTabTitles = destinations.map(item => item.name);