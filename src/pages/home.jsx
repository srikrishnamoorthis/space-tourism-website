import classnames from 'classnames';

function Home() {
    return (
        <div className='px-8 lg:px-24 mt-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 place-items-center pb-16 text-center lg:text-left'>
            <div>
                <div className='font-body text-secondary text-3xl uppercase tracking-[4.75px]'>So, you want to travel to</div>
                <h1 className='font-heading text-white text-8xl md:text-[clamp(6rem,_15vw+1rem,_10rem)] mt-12 mb-12'>SPACE</h1>
                <p className='text-base leading-[2rem]'>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className='lg:justify-self-end flex justify-center items-center aspect-square bg-white text-primary rounded-full h-48 w-48 md:h-64 md:w-64 lg:h-64 lg:w-64 font-heading text-3xl relative uppercase cursor-pointer'>
                Explore
                <div className='absolute h-48 w-48 md:h-64 md:w-64 aspect-square hover:scale-[1.4] bg-tertiary rounded-full transition-transform duration-300 ease-in opacity-0 hover:opacity-40'></div>
            </div>
        </div>
    );
}

export default Home;