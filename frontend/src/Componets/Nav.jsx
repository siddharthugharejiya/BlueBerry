import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCity, FaUser, FaStar, FaShoppingCart } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Nav() {
  const [state, setstate] = useState(false);
  const [offcanvas, setoffcanvas] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      const popclosed = sessionStorage.getItem("popclose");
      if (!popclosed) {
        setoffcanvas(true);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [])
  useEffect(() => {

    sessionStorage.removeItem("popclose");
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("popclose", "true");
    setoffcanvas(false);
  };



  return (
    <div className="container mx-auto ">
      <nav className="flex justify-between items-center flex-wrap border-b-2 pb-2 p-3">
        {/* Logo */}
        <div className="logo md:w-[280px]  w-full flex justify-between items-center ">
          <img src="./logo.png" alt="Logo" className="w-min-[10px] h-auto" />
          <i className="fa-solid fa-bars-staggered text-blue-600 text-2xl md:hidden block" onClick={() => setstate(true)}></i>
        </div>

        {/* Search */}
        <div className="flex justify-center w-full md:w-1/2 my-2 md:my-0">
          <form className="w-full">
            <div className="flex">
              <div className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-s-lg"
                >
                  Vegetables
                  <svg className="w-2.5 h-2.5 ml-2.5" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 z-10">
                  <ul className="py-1 text-sm text-gray-700">
                    {["Mockups", "Templates", "Design", "Logos"].map((item) => (
                      <li key={item}>
                        <button className="inline-flex w-full px-4 py-2 hover:bg-gray-100">{item}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative w-full">
                <input
                  type="search"
                  className="block p-2.5 border border-gray-300 w-full text-sm text-black rounded-e-lg"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-black"
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                    <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Icons */}
        <div className="w-full sm:w-fit flex justify-center m-auto">
          <div className="flex sm:flex-row  flex-col  justify-center  mt-2 gap-5 md:mt-0 flex-wrap ">
            {[
              { icon: <FaUser size={24} />, title: "Account", subtitle: "Login" },
              { icon: <FaStar size={24} />, title: "Items", subtitle: "Wishlist" },
              { icon: <FaShoppingCart size={24} />, title: "Items", subtitle: "Cart" },
            ].map(({ icon, title, subtitle }, idx) => (
              <div key={idx} className="relative group flex items-center space-x-2 cursor-pointer">
                <div className="text-blue-400">{icon}</div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">{title}</span>
                  <b className="text-gray-600 text-sm">{subtitle}</b>
                </div>
                <div className="absolute left-0 top-10 w-40 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-2 z-50">
                  {["Item 1", "Item 2", "Item 3"].map((item) => (
                    <Link key={item} to="/" className="block px-4 py-2 hover:bg-gray-100">
                      {item}
                    </Link>
                  ))}

                </div>


              </div>

            ))}
          </div>
        </div>
      </nav>

      {/* Second Navbar */}
      <div className="md:flex flex-col md:flex-row justify-between py-3 border-b hidden ">
        <ul className="flex flex-wrap space-x-6 items-center">
          {["Home", "Category", "Product", "Pages", "Blog", "Offers"].map((menu) => (
            <li key={menu} className="relative group">
              <Link to="#" className="text-gray-700 font-medium">
                {menu}
              </Link>
              <div className="absolute w-[100px] max-h-[30vh] rounded-xl flex flex-col top-[40px] left-0 bg-white border opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-40">
                {["Item 1", "Item 2", "Item 3"].map((item) => (
                  <Link key={item} to="#" className="block m-2 hover:border-b-2">
                    {item}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 md:mt-0 sm:block hidden">
          <div className="border w-full md:w-[200px] flex justify-between rounded-xl">
            <div className="relative group w-full">
              <button className="flex w-full justify-around p-2 items-center gap-2 text-gray-700 font-medium">
                <img src="./icons8-location.gif" alt="location" className="w-5 h-5" />
                Select City
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>
              <div className="absolute top-10 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-2 z-40">
                {["Mumbai", "Delhi", "Ahmedabad", "Bangalore"].map((city) => (
                  <Link
                    key={city}
                    to="#"
                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 border-b"
                  >
                    <img src="./icons8-location.gif" alt="location icon" className="w-5 h-5" />
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Offcanvas Menu */}
      <div
        className={`lg:hidden fixed bg-white shadow-2xl transform duration-700 ease-in-out z-50 h-full top-0 left-0 w-64 ${state ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setstate(false)}
            className="text-gray-600 hover:text-black text-xl"
          >
            &times;
          </button>
        </div>
        <div className="offcanvas-body h-full p-5">
          <ul className="flex flex-col space-y-4 mb-6">
            {["Home", "Category", "Product", "Pages", "Blog", "Offers"].map((menu) => (
              <li key={menu} className="relative group">
                <Link to="#" className="text-gray-700 font-medium">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-0 ">
            <div className="border w-full md:w-[200px] flex justify-between rounded-xl">
              <div className="relative group w-full">
                <button className="flex w-full justify-around p-2 items-center gap-2 text-gray-700 font-medium">
                  <img src="./icons8-location.gif" alt="location" className="w-5 h-5" />
                  Select City
                  <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                </button>
                <div className="absolute top-10 mt-2 w-44 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-2 z-40">
                  {["Mumbai", "Delhi", "Ahmedabad", "Bangalore"].map((city) => (
                    <Link
                      key={city}
                      to="#"
                      className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 border-b"
                    >
                      <img src="./icons8-location.gif" alt="location icon" className="w-5 h-5" />
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {
        offcanvas && <>
          <div className="fixed h-screen w-full inset-0 bg-opacity-50 z-50 bg-black flex justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl shadow-lg bg-white overflow-hidden w-[90%] max-w-2xl relative">
              <div className="md:block hidden">
                <img src="./newsletter.jpg" alt="" className="h-full w-full object-cover" />
              </div>

              <div className="relative ">
                <button
                  className="animate-pulse  transition-all duration-[0.3s] ease-in-out w-[16px] h-[20px] absolute top-[-4px] right-[27px] bg-[#e04e4eb3] rounded-[10px] cursor-pointer hover:bg-[#e04e4e] flex items-center justify-center text-white text-sm"
                  onClick={handleClose}
                >
                  0
                </button>

                <div className="p-5 flex flex-col justify-center items-center h-full">
                  <h1 className="text-2xl font-semibold mb-4">Newsletter.</h1>
                  <p className="text-gray-600 mb-6">
                    Subscribe the BlueBerry to get in touch and get the future update.
                  </p>
                  <input type="text" placeholder="Email Address" className="border w-[90%] p-2 rounded-lg" />
                  <button className="p-2 mt-3 bg-[rgb(108_127_216/1)] text-white rounded-lg">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

        </>
      }
    </div>
  );
}

export default Nav;
