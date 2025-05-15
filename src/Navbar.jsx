function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.4)] px-6 py-4 flex justify-between items-center z-50 shadow-md">
        <h1 className="text-xl font-semibold tracking-widest text-white">BlackGold Café</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#our-coffees" className="text-white hover:text-gray-200 transition-colors">
              Our Coffees
            </a>
          </li>
          <li>
            <a href="#our-courses" className="text-white hover:text-gray-200 transition-colors">
              Our Courses
            </a>
          </li>
          <li>
            <a href="#our-coffee" className="text-white hover:text-gray-200 transition-colors">
              Our Coffee
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  