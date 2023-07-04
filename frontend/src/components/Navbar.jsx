import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function NavBar({ handleLogout }) {

  const location = useLocation().pathname

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="data:image/png;base64,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"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            ></img>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Logout
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul 
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"

            >
              <li>
                <Link
                  to="/"
                  className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0
                    ${location === '/' ? 'text-blue-700' : 'text-gray-900'
                  }`}
                  
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Model"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                  ${location === '/Model' ? 'text-blue-700' : 'text-gray-900'
                  }`}
                >
                  Model
                </Link>
              </li>
              <li>
                <Link
                  to="/Locator"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                  ${location === '/Locator' ? 'text-blue-700' : 'text-gray-900'
                  }`}                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                  ${location === '/Contact' ? 'text-blue-700' : 'text-gray-900'
                  }`}                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;