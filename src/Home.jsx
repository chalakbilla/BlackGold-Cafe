import { useState, useEffect } from 'react';


export default function Home() {
    const [mainTextVisible, setMainTextVisible] = useState(false);
    const [scrollSectionVisible, setScrollSectionVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMainTextVisible(true);
        }, 2500);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('scrollSection');
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setScrollSectionVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Video Section with Animated Text */}
            <section className="relative min-h-[130vh] w-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                >
                    <source
                        src="Video1.mp4"
                    />
                </video>

                {/* Black gradient overlay on bottom of first video */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />

                <div
                    id="mainText"
                    className={`absolute top-1/2 left-[10%] transform -translate-y-1/2 text-white transition-opacity duration-1000 ease-out max-w-[90vw] md:max-w-none ${mainTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[2px_2px_8px_rgba(0,0,0,0.7)] mb-4 animate-fadeInUp">
                        BlackGold Café
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-4xl font-medium drop-shadow-[1px_1px_6px_rgba(0,0,0,0.6)] animate-fadeInUp delay-500">
                        Premium Coffee, Perfectly Brewed
                    </p>
                </div>
            </section>

            {/* Logo Section */}




            {/* Scroll Section */}
            <section
                id="scrollSection"
                className={`min-h-[130vh] px-4 sm:px-6 py-16 flex flex-col items-center justify-center bg-black text-white text-lg sm:text-xl md:text-2xl transition-all duration-1000 ${scrollSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                
                <img src="/logo.png" alt="BlackGold Café Logo" className="h-75 sm:h-75 object-contain bg-transparent" />

                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center max-w-3xl">
                    The Luxury of Coffee Redefined
                </h2>
                <p className="max-w-3xl text-center leading-relaxed px-2 sm:px-0">
                    At <span className="text-yellow-400 font-semibold">BlackGold Café</span>, we don't just serve coffee —
                    we craft an experience. From the finest handpicked beans to artisan roasting, every cup tells a story of
                    passion, elegance, and unmatched taste. Step into a world where luxury meets aroma, and every sip is a celebration.
                </p>
            </section>

            {/* Second Video Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                >
                    <source
                        src="video2.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Black gradient overlays on top and bottom of second video */}
                <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-transparent to-black pointer-events-none z-0" />
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />
            </section>
        </>
    );
}
