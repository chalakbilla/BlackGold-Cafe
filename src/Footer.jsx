export default function Footer() {
    return (
      <footer className="bg-black text-white px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left md:flex-1">
          <h4 className="font-semibold text-yellow-500 mb-1">BlackGold Café</h4>
          <p>Argora, Ranchi - 834002</p>
          <p>Near Talaab Road</p>
          <p>ankitraj01567@gmail.com</p>

        </div>
  
        {/* Center Section - logo centered */}
        <div className="mb-4 md:mb-0 md:flex-1 flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-30 w-auto" />
        </div>
  
        {/* Right Section */}
        <div className="space-y-2 text-center md:text-right md:flex-1">
          <a href="#" className="hover:underline block">
            Careers
          </a>
          <a href="#" className="hover:underline block">
            About Us
          </a>
          <a href="#" className="hover:underline block">
            Contact
          </a>
        </div>
      </footer>
    );
  }
  