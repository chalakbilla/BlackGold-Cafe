import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurCourses = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sliderRef = useRef(null);
  const itemsPerPageDesktop = 2; // Two items per page on desktop
  const itemsPerPageMobile = 1; // One item per page on mobile

  // Generate menu items for 14 images
  useEffect(() => {
    const fetchedItems = Array.from({ length: 14 }, (_, index) => ({
      id: index + 1,
      name: `Course ${index + 1}`,
      image: `/menu/menu${index + 1}.webp`,
    }));
    setMenuItems(fetchedItems);

    // Test image loading
    const testImg = new Image();
    testImg.src = '/menu/menu1.webp';
    testImg.onload = () => console.log('Test image loaded successfully: /menu/menu1.webp');
    testImg.onerror = (error) => console.error('Test image failed to load: /menu/menu1.webp. Check public/menu folder.', error);

    // Test public folder access
    fetch('/menu/fallback.webp')
      .then(response => {
        if (response.ok) {
          console.log('Public folder accessible: /menu/fallback.webp loaded successfully');
        } else {
          console.error('Failed to access public folder: /menu/fallback.webp returned status', response.status);
        }
      })
      .catch(error => console.error('Error accessing public folder: /menu/fallback.webp', error));
  }, []);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;

  // Group items into pages
  const pages = [];
  for (let i = 0; i < menuItems.length; i += itemsPerPage) {
    pages.push(menuItems.slice(i, i + itemsPerPage));
  }

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: isMobile ? 1 : 2, // Show 2 items side-by-side on desktop, 1 on mobile
    slidesToScroll: isMobile ? 1 : 2,
    arrows: false, // Use custom buttons
    centerMode: false,
    variableWidth: false,
    beforeChange: (oldIndex, newIndex) => {
      console.log(`Sliding to page ${Math.floor(newIndex / itemsPerPage) + 1}, rendering items:`, pages[Math.floor(newIndex / itemsPerPage)]);
    },
  };

  return (
    <div className="min-h-screen bg-black text-white text-center">
      <h1 className="text-4xl font-bold text-amber-400 mb-8">Our Courses</h1>
      <div className="flex justify-center items-center bg-black">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          disabled={!pages.length || pages.length === 1}
          className="bg-amber-400 text-black font-bold py-2 px-4 rounded-l-md disabled:bg-gray-700 hover:bg-amber-500 transition-colors duration-300 z-30"
        >
          ← Prev
        </button>
        <div className="w-full max-w-[1000px] bg-black">
          <Slider ref={sliderRef} {...sliderSettings}>
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col items-center transition-transform duration-600 transform hover:scale-105 !px-2 relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-lg h-[600px] object-cover rounded-md !visible"
                  style={{ zIndex: 20 }}
                  onError={(e) => {
                    e.target.src = '/menu/fallback.webp';
                    console.error(`Failed to load image: ${item.image}. Ensure file exists in public/menu with correct name and .webp extension.`, e);
                  }}
                  onLoad={() => console.log(`Image loaded successfully: ${item.image}`)}
                />
                <h3 className="text-xl font-semibold text-amber-400 mt-2">{item.name}</h3>
                {/* Add a thin black line on the right side of each item except the last one on desktop */}
                {!isMobile && index % 2 === 0 && index < menuItems.length - 1 && (
                  <div className="absolute right-0 top-0 h-[600px] w-[1px] bg-black"></div>
                )}
              </div>
            ))}
          </Slider>
        </div>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          disabled={!pages.length || pages.length === 1}
          className="bg-amber-400 text-black font-bold py-2 px-4 rounded-r-md disabled:bg-gray-700 hover:bg-amber-500 transition-colors duration-300 z-30"
        >
          Next →
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <span className="text-gray-400">
          Page {pages.length ? Math.floor((sliderRef.current?.slickCurrentSlide || 0) / itemsPerPage) + 1 : 0} of {pages.length}
        </span>
      </div>
    </div>
  );
};

export default OurCourses;