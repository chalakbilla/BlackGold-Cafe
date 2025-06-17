import React, { useRef, useEffect, useState } from 'react';
import Signup from './Signup.jsx';

const Tour = () => {
    const videoRef = useRef(null);
    const [showSignupOverlay, setShowSignupOverlay] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile device based on screen width
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    // Show signup overlay after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSignupOverlay(true);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    // Loop video between 2–5s continuously
    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;
            const handleTimeUpdate = () => {
                if (video.currentTime >= 5) video.currentTime = 2;
            };
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.currentTime = 2;
            return () => video.removeEventListener('timeupdate', handleTimeUpdate);
        }
    }, []);

    // Reload video when isMobile changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [isMobile]);

    // Video sources
    const desktopVideo = 'https://videos.openai.com/vg-assets/assets%2Ftask_01jq481nd3fkmt83z3ch7dx3wx%2Ftask_01jq481nd3fkmt83z3ch7dx3wx_genid_d1fc36b6-1a99-48d8-8255-a9cf71c41d00_25_03_24_14_14_467479%2Fvideos%2F00000_464411835%2Fsource.mp4?st=2025-05-17T17%3A33%3A47Z&se=2025-05-23T18%3A33%3A47Z&sks=b&skt=2025-05-17T17%3A33%3A47Z&ske=2025-05-23T18%3A33%3A47Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=efQH6zel0l%2B2sUSpcMdUHPmi9Suu2vNgzqOVDasGfmM%3D&az=oaivgprodscus';
    const mobileVideo = 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqcmz3qxft59jt5re14v6t8q%2Ftask_01jqcmz3qxft59jt5re14v6t8q_genid_dd9d9173-1df2-4fab-9f5a-11bcd960da7e_25_03_27_20_34_548703%2Fvideos%2F00000_731546503%2Fsource.mp4?st=2025-05-18T18%3A25%3A19Z&se=2025-05-24T19%3A25%3A19Z&sks=b&skt=2025-05-18T18%3A25%3A19Z&ske=2025-05-24T19%3A25%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=lHJiwrmYgvP5AGAoj492S1mq1V5c6jdiop%2BQUHklx78%3D&az=oaivgprodscus';

    return (
        <div className="relative w-full h-screen min-h-screen overflow-hidden">
            {/* Background video */}
            <video
                key={isMobile ? 'mobile' : 'desktop'}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source
                    src={isMobile ? mobileVideo : desktopVideo}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Initial “Tour Video” text */}
            {!showSignupOverlay && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-10">
                    Tour Video
                </div>
            )}
            {/* Signup overlay */}
            {showSignupOverlay && (
                <div className="fixed inset-0 flex items-center justify-center z-20">
                    <div className="relative w-full max-w-md aspect-[1/0.98] overflow-y-auto hide-scrollbar rounded-xl border border-[rgba(255,255,255,0.3)]">
                        <Signup />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tour;




