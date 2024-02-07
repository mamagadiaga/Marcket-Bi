import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://api.market-bi.com/media/slides/bg.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`bulle ${index < 4 ? 'big' : index < 7 ? 'medium' : 'small'}`}
            style={{
              width: `${index < 4 ? Math.random() * 40 + 20 : index < 7 ? Math.random() * 20 + 10 : Math.random() * 10 + 5}px`,
              height: `${index < 4 ? Math.random() * 40 + 20 : index < 7 ? Math.random() * 20 + 10 : Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
              animationDelay: `-${Math.random() * 1}s`
            }}
          ></div>
        ))}
      </div>





      <nav className="bg-transparent relative z-10 border-gray-200 dark:bg-gray-900">
        <div className="max-w-full flex flex-wrap items-center justify-between mx-auto pl-4 pr-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.market-bi.com/static/media/xxx.e7cd985bf0ebbe8f3bab.png" className=" w-24" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2">
            {/* <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button> */}
            {/* <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div> */}
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className=" text-white block py-2 px-3 text-xl md:p-0 md:dark:text-blue-500" aria-current="page">Acceuil</a>
              </li>
              <li>
                <a href="#" className=" text-white block py-2 px-3 text-xl  rounded md:p-0">Produits</a>
              </li>
              <li>
                <a href="#" className=" text-white block py-2 px-3 text-xl  rounded md:p-0">Boutiques</a>
              </li>
              <li>
                <a href="#" className=" text-white block py-2 px-3 text-xl  rounded md:p-0">Vendre</a>
              </li>
              <li>
                <a href="#" className=" text-white block py-2 px-3 text-xl  rounded md:p-0">Contacts</a>
              </li>
              <li>
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-white text-xl rounded  md:border-0 md:p-0 md:w-auto">Authentification <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg></button>
                  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 border-b dark:hover:bg-gray-600 dark:hover:text-white">Se connecter</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Creer un compte</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="relative z-10 content md:float-end pt-28 p-10 text-2xl md:text-6xl text-center md:text-end">
        <p className='text-white'>Market Bi</p>
        <p className='text-green-400 font-bold'>Vendez sans limite</p>
        <button type="button" className="text-white bg-transparent border border-white focus:outline-none hover:bg-white focus:ring-4 hover:text-green-400 focus:ring-gray-200 font-medium rounded-full px-10 py-3.5 text-base ">Voir produits</button>
      </div>

    </div>
  );
};

export default App;
