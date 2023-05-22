import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  let hidden_class = 'hidden w-full md:block md:w-auto';
  let normal_class = ' w-full md:block md:w-auto';
  const router = useRouter();
  let [hidden, setHidden] = useState(true);

  const active_class =
    'block py-2 pr-4 pl-3 text-[#32769B] bg-white md:bg-transparent md:text-[#32769B] md:p-0 border-b-2 border-[#32769B]';
  const not_active_class =
    'block py-2 pr-4 pl-3 text-[#3BB6FA] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#32769B] md:p-0';

  return (
    <nav className="shadow-md px-2 sm:px-4 py-2.5 rounded-2xl relative top-2 bg-[#AFD3E2]/90 mx-10 ">
      <div className="container flex flex-wrap justify-center items-center mx-auto relative">
        {/* <Link href="/" class="flex items-center">
          <Image
            src={
              'https://res.cloudinary.com/dbmw0xoar/image/upload/v1667804084/ecell/ACM-W/ACM-w_iith_transparent_logo_u6flex.png'
            }
            width="70"
            height={'70'}
            alt="ACM-W Logo"
          />
        </Link> */}

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
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

        <div
          className={hidden ? hidden_class : normal_class}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm lg:text-[1.3rem] md:font-medium md:border-0 ">
            <li>
              <Link
                href="/"
                className={
                  router.pathname == '/' ? active_class : not_active_class
                }
                aria-current="page"
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className={
                  router.pathname == '/team' ? active_class : not_active_class
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className={
                  router.pathname == '/events' ? active_class : not_active_class
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Events
              </Link>
            </li>
            {/* <li>
              <Link
                href="/contact"
                className={
                  router.pathname == "/contact"
                    ? active_class
                    : not_active_class
                }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
