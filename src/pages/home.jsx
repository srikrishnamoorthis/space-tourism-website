
function Home() {
    return (
        <div className='flex items-center h-[calc(100%-6rem)]'>
            <div className='lg:mx-24 text-secondary flex flex-wrap items-center justify-between w-full'>
                <div className='flex-grow'>
                    <div className='w-[30rem]'>
                        <div className='font-body text-secondary text-3xl uppercase tracking-[4.75px]'>So, you want to travel to</div>
                        <h1 className='font-heading text-white text-10xl'>SPACE</h1>
                        <p className='text-center md:text-left text-base leading-relaxed'>
                            Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                </div>
                <div className=''>
                    <div className='h-72 w-72 rounded-full bg-white uppercase flex items-center justify-center font-heading text-3xl text-primary cursor-pointer hover:shadow-[0px_0px_10px_50px_#979797] transition-all duration-500'>
                        Explore
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;