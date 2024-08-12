import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative bg-[#f1f3f4] p-2">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      ></div>

      {/* Navbar */}
      <div className="flex items-center justify-between">
        {/* <div className="text-xl font-bold"></div> */}
        <nav >
          <ul className="flex space-x-16 justify-center">
            <li>
              <a href="#" className="text-black hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Contact
              </a>
            </li>
           
          </ul>
        </nav>
        <div>

          <button className="bg-yellow-500 text-black font-medium py-2 px-4 rounded hover:bg-yellow-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
