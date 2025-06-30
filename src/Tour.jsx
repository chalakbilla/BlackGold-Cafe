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
                if (video.currentTime >= 60) video.currentTime = 15;
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
    const desktopVideo = 'Tour.mp4';
    const mobileVideo = 'Tour.mp4';

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




