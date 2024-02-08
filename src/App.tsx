import React from 'react';
import './App.css';
// import 'Section2H;
const App = () => {
  return (

    <div className="">
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
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded md:bg-transparent bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
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
          <p className='text-green-400 font-semibold'>Vendez sans limite</p>
          <button type="button" className="text-white bg-transparent border border-white focus:outline-none hover:bg-white focus:ring-4 hover:text-green-400 focus:ring-gray-200 font-medium rounded-full px-10 py-3.5 text-base ">Voir produits</button>
        </div>



      </div>

      <div className='p-4 mt-10'>
        <p className='text-xl md:text-3xl font-semibold'>Top Produits
          <span className='float-right text-sm border-b border-b-teal-500 font-semibold text-black'>EN VOIR PLUS</span>
        </p>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10'>
          <div className="hover max-w-sm p-4 shadow-lg bg-white rounded-lg pb-0">
            <a href="#">
              <img className="imageP rounded-lg" src="https://api.market-bi.com/media/images_produits/a49db48faace033527fea93508b7c2cd12b3ee21.jpeg" alt="" />
            </a>
            <div className="p-5">
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <p className="font-semibold text-gray-700">"Sac de marque a 4 pieces"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Par: Famcha Hijab store</p>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <a href="#" className="text-green-400 text-3xl inline-flex items-center px-3 py-2 font-medium text-cente">
                    <i className="bi bi-whatsapp"></i>
                  </a>              </div>
                <div>
                  <p className="font-semibold text-gray-700">Prix: 15000FCFA</p>
                </div>
              </div>

            </div>
          </div>
          <div className="hover max-w-sm p-4 shadow-lg bg-white rounded-lg pb-0">
            <a href="#">
              <img className="imageP rounded-lg" src="https://api.market-bi.com/media/images_produits/da3392b2d25041b966661d3d643794f1596f751d.jpeg" alt="" />
            </a>
            <div className="p-5">
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <p className="font-semibold text-gray-700">"Coffret de parfum"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Par: Aicha Diop</p>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <a href="#" className="text-green-400 text-3xl inline-flex items-center px-3 py-2 font-medium text-cente">
                    <i className="bi bi-whatsapp"></i>
                  </a>              </div>
                <div>
                  <p className="font-semibold text-gray-700">Prix: 22000FCFA</p>
                </div>
              </div>

            </div>
          </div>
          <div className="hover max-w-sm p-4 shadow-lg bg-white rounded-lg pb-0">
            <a href="#">
              <img className="imageP rounded-lg" src="https://api.market-bi.com/media/images_produits/cdd2688bf8c1901b7cff9480d64f68c6fc3899e7.jpeg" alt="" />
            </a>
            <div className="p-5">
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <p className="font-semibold text-gray-700">"Mixeur"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Par: Madjiguene Diop</p>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <a href="#" className="text-green-400 text-3xl inline-flex items-center px-3 py-2 font-medium text-cente">
                    <i className="bi bi-whatsapp"></i>
                  </a>              </div>
                <div>
                  <p className="font-semibold text-gray-700">Prix: 13000FCFA</p>
                </div>
              </div>

            </div>
          </div>
          <div className="hover max-w-sm p-4 shadow-lg bg-white rounded-lg pb-0">
            <a href="#">
              <img className="imageP rounded-lg" src="https://api.market-bi.com/media/images_produits/7e67be16bf45d896de9d203fa846a649fd4f190b.jpeg" alt="" />
            </a>
            <div className="p-5">
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <p className="font-semibold text-gray-700">"Fouet"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Par: Madjiguene Diop</p>
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
                <div>
                  <a href="#" className="text-green-400 text-3xl inline-flex items-center px-3 py-2 font-medium text-cente">
                    <i className="bi bi-whatsapp"></i>
                  </a>              </div>
                <div>
                  <p className="font-semibold text-gray-700">Prix: 5000FCFA</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button type="button" className="mt-10 text-teal-500 bg-teal-100 hover:text-white rounded-lg  hover:bg-teal-500 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-7 py-2.5 me-2 mb-2 ">Voir plus</button>
        </div>

      </div>

      {/* section 3



      <div id="controls-carousel" className="relative w-full" data-carousel="static">

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://api.market-bi.com/media/photo_profil/default_avatar.png" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
              <img src="https://api.market-bi.com/media/photo_profil/315063180_113184091604014_1853243680828194684_n.jpg" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
              <img src="https://api.market-bi.com/media/photo_profil/FB83CE44-8634-4EDF-97B8-5E3E3EFCA3B4.png" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://api.market-bi.com/media/photo_profil/default_avatar.png" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
              <img src="https://api.market-bi.com/media/photo_profil/315063180_113184091604014_1853243680828194684_n.jpg" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
              <img src="https://api.market-bi.com/media/photo_profil/FB83CE44-8634-4EDF-97B8-5E3E3EFCA3B4.png" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://api.market-bi.com/media/photo_profil/default_avatar.png" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
              <img src="https://api.market-bi.com/media/photo_profil/315063180_113184091604014_1853243680828194684_n.jpg" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
              <img src="https://api.market-bi.com/media/photo_profil/FB83CE44-8634-4EDF-97B8-5E3E3EFCA3B4.png" className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-28" alt="..." />
            </div>
          </div>
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}


      {/* section4 */}
      <div className='p-4 mt-10'>
        <p className='text-xl md:text-3xl font-semibold'>Notre solution tout en un</p>

        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10'>
          <div className="max-w-sm p-4">
            <a href="#" className=''>
              <img className="rotate-image ps-4" src="https://api.market-bi.com/media/slides/material-management.webp" alt="" />
            </a>
            <div className="p-5">
              <div>
                <p className="font-semibold text-2xl text-gray-700">Gestion de stock</p>
              </div>
              <div>
                <p className=" text-gray-700">Suivez efficacement les niveaux de stock. Gérez les entrées et sorties de produits. Obtenez des alertes de réapprovisionnement.</p>
              </div>
            </div>
          </div>

          <div className="max-w-sm p-4">
            <a href="#" className=''>
              <img className="rotate-image ps-4" src="https://api.market-bi.com/media/slides/invoice.webp" alt="" />
            </a>
            <div className="p-5">
              <div>
                <p className="font-semibold text-2xl text-gray-700">Facturation</p>
              </div>
              <div>
                <p className=" text-gray-700">Créez des factures professionnelles.
                  Suivez les paiements et les retards.
                  Automatisez les processus de facturation.</p>
              </div>
            </div>
          </div>

          <div className="max-w-sm p-4">
            <a href="#" className=''>
              <img className="rotate-image ps-4" src="https://api.market-bi.com/media/slides/compta.webp" alt="" />
            </a>
            <div className="p-5">
              <div>
                <p className="font-semibold text-2xl text-gray-700">Comptabilite</p>
              </div>
              <div>
                <p className=" text-gray-700">Effectuez un suivi précis des transactions.
                  Automatisez les tâches comptables.
                  Générez des rapports financiers en temps réel.</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm p-4">
            <a href="#" className=''>
              <img className="rotate-image ps-4" src="https://api.market-bi.com/media/slides/staff.webp" alt="" />
            </a>
            <div className="p-5">
              <div>
                <p className="font-semibold text-2xl text-gray-700">Gestion personel</p>
              </div>
              <div>
                <p className=" text-gray-700">Centralisez les informations des employés.
                  Suivez les heures de travail et les congés.
                  Simplifiez la gestion des salaires.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className='bg-gray-100 p-4 md:p-0'>

        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 w-2/3 md:w-1/3 me-10">
              <a href="#" className="">
                <img src="https://www.market-bi.com/static/media/xxx.e7cd985bf0ebbe8f3bab.png" className=" w-24" alt="Flowbite Logo" />
              </a>
              <p className=''>
                Explorez une expérience d'achat et de vente sans frais. Publiez vos produits ou découvrez une variété d'articles. Connectez-vous avec des vendeurs et acheteurs passionnés. Une plateforme intuitive pour des transactions sans tracas.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-teal-500">Assistant & Support</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-teal-500">Assistant & Support</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-500">Activityt</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-teal-500 ">Produits</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-teal-500">Nous-contacter</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-500">FAQ</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">S'inscrire au Newsletters</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">


                    <div className="flex">
                      <input type="text" id="website-admin" className="rounded-none rounded-s-lg bg-gray-50 border focus:border-0 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="marketbisn@gmail.com" />
                      <span className="bg-teal-500 inline-flex items-center px-3 text-sm text-white border rounded-s-0 rounded-e-md">
                        <a href="#" type='button'>
                          <i className="bi bi-caret-right-fill"></i>
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                      <a href="#" className="bg-gray-200 text-gray-500 hover:text-white hover:bg-teal-500 rounded-lg p-2">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                          <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg>
                        <span className="sr-only">Facebook page</span>
                      </a>
                      <a href="#" className="bg-gray-200 text-gray-500 hover:text-white hover:bg-teal-500 rounded-lg p-2 ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                          <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                        </svg>
                        <span className="sr-only">Discord community</span>
                      </a>
                      <a href="#" className="bg-gray-200 text-gray-500 hover:text-white hover:bg-teal-500 rounded-lg p-2 ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                          <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                        </svg>
                        <span className="sr-only">Twitter page</span>
                      </a>
                      <a href="#" className="bg-gray-200 text-gray-500 hover:text-white hover:bg-teal-500 rounded-lg p-2 ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                        <span className="sr-only">GitHub account</span>
                      </a>
                      <a href="#" className="bg-gray-200 text-gray-500 hover:text-white hover:bg-teal-500 rounded-lg p-2 ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                        </svg>
                        <span className="sr-only">Dribbble account</span>
                      </a>
                    </div>                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>


  );
};

export default App;
