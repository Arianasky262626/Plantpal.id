import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/logo-plantpal.svg";
import CartIcon from "../../../public/icon/cart.svg";
import MagnifyingIcon from "../../../public/icon/magnifying_glass.svg";
import { useRouter } from "next/router";
import Lily from "../../../public/items/peace-lily-plant-white-pot 1.webp";
import AsterPutih from "../../../public/items/aster-putih.webp";
import CalatheaBuluAyam from "../../../public/items/calathea-bulu-ayam.webp";
import { handleNavigateAndRoll } from "@/lib/pushScroll";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-b-2 border-gray-200 py-5 text-green-700">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <div className="flex items-center">
            <Image
              src={Logo}
              className="w-11/12 h-6 mr-3 sm:h-9"
              alt="PlantPal Logo"
            />
          </div>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>
            <Image
              src={MagnifyingIcon}
              className="w-5 h-5 mr-4 cursor-pointer"
              onClick={toggleDropdownSearch}
              alt="Magnifying"
            />
            <Image
              src={CartIcon}
              onClick={() => router.push("/cart")}
              className="w-6 h-6 mr-4 cursor-pointer"
              alt="Cart"
            />
            {router.pathname !== "/" ? (
              <>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center h-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    <Image
                      width={24}
                      height={24}
                      src={"/people/me.webp"}
                      // onClick={() => router.push("/cart")}
                      className="w-10 h-10 mr-4 cursor-pointer"
                      alt="Me"
                    />
                  </button>
                  {isOpenSearch && (
                    <>
                      <div className="w-[50rem] left-1/4 transform -translate-y-1/2 fixed z-50">
                        <div className="w-[50rem] h-40 left-0 top-0 absolute bg-white rounded-bl-3xl rounded-br-3xl" />
                        <input
                          type="text"
                          className="w-[45rem] h-14 left-[41px] top-[33px] absolute bg-zinc-100 rounded-3xl px-5"
                          placeholder="Cari tanaman impianmu, konten edukasi, dll"
                          onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                              e.preventDefault(); // Prevent default form submission behavior
                              // Get the input value
                              const inputValue = e.target.value.trim();
                              handleNavigateAndRoll(router,'/auth', 2500)
                              setIsOpenSearch(false);
                            }
                          }}
                        />
                        <div className="w-56 h-6 left-[43px] top-[104px] absolute bg-zinc-100 rounded-lg" />
                        <div className="w-56 h-6 left-[277px] top-[104px] absolute bg-zinc-100 rounded-lg" />
                        <div className="w-56 h-6 left-[514px] top-[104px] absolute bg-zinc-100 rounded-lg" />
                        <div className="left-[58px] top-[108px] absolute text-stone-700 text-opacity-50 text-xs font-normal ">
                          X Tanaman penghasil oksigen
                        </div>
                        <div className="left-[292px] top-[108px] absolute text-stone-700 text-opacity-50 text-xs font-normal ">
                          X Tanaman cocok untuk indoor
                        </div>
                        <div className="left-[529px] top-[108px] absolute text-stone-700 text-opacity-50 text-xs font-normal ">
                          X Tanaman cocok untuk outdoor
                        </div>
                      </div>
                    </>
                  )}
                  {isOpen && (
                    <div className="w-[30rem] h-[20rem] right-36 bg-white fixed z-50">
                      <div className="w-[50rem] h-[30rem] left-0 top-0 absolute bg-white rounded-bl-3xl rounded-br-3xl shadow" />
                      <div className="w-[30rem] h-[20rem] left-[52.04px] top-[30px] bg-white relative">
                        <div className="w-64 h-7 left-[2.23px] top-[150px] absolute text-stone-700 text-base font-bold">
                          Selesaikan Misi
                        </div>
                        <div className=" h-3.5 left-[344.10px] top-[158px] absolute text-stone-700 text-xs font-normal">
                          Centang jika selesai
                        </div>
                        <div className=" h-14 left-[55.96px] top-[85px] absolute grid grid-cols-3 gap-12">
                          <div className="flex flex-col items-center">
                            <div className="text-stone-700 text-xs font-normal underline">
                              Koleksi Tanaman
                            </div>
                            <div className="text-stone-700 text-xl font-normal">
                              4
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="text-stone-700 text-xs font-normal underline">
                              Misi Mingguan
                            </div>
                            <div className="text-stone-700 text-xl font-normal">
                              8
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="text-stone-700 text-xs font-normal underline">
                              Voucher
                            </div>
                            <div className="text-stone-700 text-xl font-normal">
                              2
                            </div>
                          </div>
                        </div>
                        <div className="w-[30rem] h-[75px] left-0 top-[188px] absolute bg-zinc-100 rounded-3xl" />
                        <div className="w-40 h-9 left-[76.96px] top-[204px] absolute">
                          <Image
                            src={Lily}
                            className="w-1/5 left-[-55px] top-[-5px] absolute"
                            alt="Magnifying"
                          />
                          <div className="w-32 h-5 left-0 top-[-6px] absolute text-stone-700 text-xs font-bold">
                            Lily Spathiphylum
                          </div>
                          <div className="w-40 h-3 left-[-0px] top-[15.39px] absolute text-stone-700 text-xs font-normal">
                            Waktunya menyiram tanaman
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[216px] absolute text-stone-700 text-xs font-normal">
                          10.00 AM
                        </div>
                        <div className="w-[30rem] h-[75px] left-0 top-[268px] absolute bg-zinc-100 rounded-3xl" />
                        <div className="w-[30rem] h-[75px] left-0 top-[348px] absolute bg-zinc-100 rounded-3xl" />
                        <div className="w-40 left-[76.96px] top-[364px] absolute">
                          <Image
                            src={CalatheaBuluAyam}
                            className="w-1/3 left-[-65px] top-[-15px] absolute"
                            alt="Magnifying"
                          />
                          <div className="w-36 h-5 left-0 top-[-6px] absolute text-stone-700 text-xs font-bold">
                            Calathea Bulu Ayam
                          </div>
                          <div className="w-40 h-3 left-[-0px] top-[15.39px] absolute text-stone-700 text-xs font-normal">
                            Waktunya menyiram tanaman
                          </div>
                        </div>
                        <div className="w-32 h-11 left-[80.30px] top-[7px] absolute">
                          <div className="w-32 h-7 left-0 top-0 absolute text-stone-700 text-xl font-semibold">
                            Grabiel Putri
                          </div>
                          <div className="w-16 h-3.5 left-[0.66px] top-[30px] absolute text-stone-700 text-xs font-normal">
                            <span className="fa fa-trophy"></span>
                          </div>
                          <div className="w-16 h-3.5 left-[22.66px] top-[30px] absolute text-stone-700 text-xs font-normal">
                            2000 poin
                          </div>
                          <div className="bg-green-500 rounded-full px-2 py-1 left-[150.66px] top-[10px] absolute text-white text-xs font-normal">
                            <span className="fa fa-angle-right"></span>
                          </div>
                          <div className="left-[350.66px] top-[10px] absolute text-stone-700 text-lg font-normal">
                            <span className="fa fa-gear"></span>
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[376px] absolute text-stone-700 text-xs font-normal">
                          12.00 AM
                        </div>
                        <div className="w-40 h-9 left-[76.96px] top-[284px] absolute">
                          <Image
                            src={AsterPutih}
                            className="w-1/3 left-[-65px] top-[-5px] absolute"
                            alt="Magnifying"
                          />
                          <div className="w-9 h-5 left-0 top-[-6px] absolute text-stone-700 text-xs font-bold">
                            Aster
                          </div>
                          <div className="w-40 h-3 left-[-0px] top-[15.39px] absolute text-stone-700 text-xs font-normal">
                            Waktunya menyiram memupuk
                          </div>
                        </div>
                        <div className="left-[284.96px] top-[296px] absolute text-stone-700 text-xs font-normal">
                          8.00 AM
                        </div>
                        <div className="w-14 h-14 left-[2.23px] top-0 absolute">
                          <Image
                            width={56}
                            height={56}
                            src={"/people/me.webp"}
                            // onClick={() => router.push("/cart")}
                            className="w-14 h-14 left-0 top-0 absolute bg-stone-700 rounded-full"
                            alt="Me"
                          />
                        </div>
                        <div className="w-7 h-6 left-[401.56px] top-[209px] absolute bg-zinc-300 rounded-full" />
                        <label className="left-[410.56px] top-[209px] absolute">
                          <input type="checkbox" />
                          <i className="faboost bg-none"></i>
                        </label>
                        <div className="w-7 h-6 left-[401.56px] top-[289px] absolute bg-zinc-300 rounded-full" />
                        <label className="left-[410.56px] top-[289px] absolute">
                          <input type="checkbox" />
                          <i className="faboost bg-none"></i>
                        </label>
                        <div className="w-7 h-6 left-[401.56px] top-[369px] absolute bg-zinc-300 rounded-full" />
                        <label className="left-[410.56px] top-[369px] absolute bg-none">
                          <input type="checkbox" />
                          <i className="faboost bg-none"></i>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={() => router.push("/auth/login")}
                className="text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
              >
                Masuk
              </button>
            )}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <div
                  onClick={() => {
                    router.pathname === "/"
                      ? router.push("/")
                      : router.push("/auth");
                  }}
                  className={`block py-2 pl-3 pr-4 cursor-pointer ${
                    router.pathname === "/" || router.pathname === "/auth"
                      ? "text-green-700 underline underline-offset-4"
                      : "text-stone-700"
                  } lg:bg-transparent lg:p-0 `}
                  aria-current="page"
                >
                  Beranda
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    router.pathname === "/"
                      ? router.push("/auth/login")
                      : router.push("/edukasi");
                  }}
                  className={`block py-2 pl-3 pr-4 cursor-pointer ${
                    router.pathname === "/edukasi"
                      ? "text-green-700 underline underline-offset-4"
                      : "text-stone-700"
                  } lg:bg-transparent lg:p-0 `}
                  aria-current="page"
                >
                  Pendidikan
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    router.pathname === "/"
                      ? router.push("/auth/login")
                      : router.push("/konsultasi");
                  }}
                  className={`block py-2 pl-3 pr-4 cursor-pointer ${
                    router.pathname === "/konsultasi"
                      ? "text-green-700 underline underline-offset-4"
                      : "text-stone-700"
                  } lg:bg-transparent lg:p-0 `}
                  aria-current="page"
                >
                  Konsultasi
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
