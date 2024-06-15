import React, { useState } from "react";
import KonsultasiCover from "../../../public/konsultasi/konsultasi_cover.webp";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "@/components/Modal";
import Chatbot from "@/components/ChatBot";
export default function KonsultasiPage() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenJadwal, setIsOpenJadwal] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalJadwal = () => {
    setIsOpenJadwal(true);
  };

  const closeModalJadwal = () => {
    setIsOpenJadwal(false);
  };
  return (
    <>
      <div className="bg-black relative text-center mb-20 h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={KonsultasiCover}
            alt={"Konsultasi cover"}
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-8">
          <p className="font-bold text-5xl mb-5">Sayangi Tanaman Hiasmu</p>
          <p className="">mulai konsultasikan dengan para ahli</p>
        </div>
      </div>
      <div className="container text-[#40513B]">
        <div className="flex justify-center items-center mb-20">
          <button
            className={`rounded-tl-3xl rounded-bl-3xl border-2 ${
              active === 0
                ? "bg-stone-700 text-white"
                : "bg-white text-border-700"
            } border-stone-700 text-lg py-2 px-5 transition-colors duration-300 ease-in-out`}
            onClick={(e) => {
              e.preventDefault();
              setActive(0);
            }}
          >
            Chat & Telepon
          </button>
          <button
            className={`rounded-tr-3xl rounded-br-3xl border-2 ${
              active === 1
                ? "bg-stone-700 text-white"
                : "bg-white text-border-700"
            } border-stone-700 text-lg py-2 px-5 transition-colors duration-300 ease-in-out`}
            onClick={(e) => {
              e.preventDefault();
              setActive(1);
            }}
          >
            Tebus Resep
          </button>
        </div>
        {active === 0 ? (
          <>
            <div className="flex h-screen px-52">
              <div className="flex w-full justify-between gap-10">
                <div className="w-2/4 h-5/6 border-r">
                  <p className="font-semibold text-md md:text-lg lg:text-2xl px-5 mb-5">
                    Riwayat Konsultasi
                  </p>
                  <div className="flex justify-between px-5 pb-2 border-b mb-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">Chatbot</p>
                      <p>Jenis Tanaman Hias : Anthurium</p>
                      <p>Keluhan : Daun menguning</p>
                      <div className="flex gap-2">
                        <span className="fa fa-download cursor-pointer"></span>
                        <p>Dapatkan catatan konsultasi</p>
                      </div>
                    </div>
                    <p className="font-semibold underline">24/01/2024</p>
                  </div>
                  <div className="flex justify-between px-5 pb-2 border-b mb-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">Konsultasi dengan Ahli</p>
                      <p>Jenis Tanaman Hias : Cocor Bebek</p>
                      <p>Keluhan : Bercak daun</p>
                      <div className="flex gap-2">
                        <span className="fa fa-download cursor-pointer"></span>
                        <p>Dapatkan catatan konsultasi</p>
                      </div>
                    </div>
                    <p className="font-semibold underline">02/02/2024</p>
                  </div>
                  <div className="flex justify-between px-5 pb-2 mb-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">Chatbot</p>
                      <p>Jenis Tanaman Hias : Anthurium</p>
                      <p>Keluhan : Tanaman layu</p>
                      <div className="flex gap-2">
                        <span className="fa fa-download cursor-pointer"></span>
                        <p>Dapatkan catatan konsultasi</p>
                      </div>
                    </div>
                    <p className="font-semibold underline">28/03/2024</p>
                  </div>
                </div>
                <div className="w-2/4 h-5/6 ">
                  <p className="font-semibold text-md md:text-lg lg:text-2xl mb-5">
                    Atur Jadwal
                  </p>
                  <p>
                    Konsultasikan dengan ahli jika tanaman hias Anda mengalami
                    kondisi kronis dan tidak mendapatkan solusi memuaskan dari
                    chatbot kami.
                  </p>
                  <div className="flex justify-between items-center py-4 border-b">
                    <div className="flex items-center gap-3">
                      <Image
                        width={100}
                        height={200}
                        src={"/people/man.webp"}
                      ></Image>
                      <div>
                        <p className="font-bold">Andri Suseno</p>
                        <p>12 tahun pengalaman</p>
                        <p>
                          <span className="fa fa-star mr-2"></span>(4.8)
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={openModalJadwal}
                      className="flex gap-2 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
                    >
                      <span className="fa fa-calendar"></span>Jadwalkan
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b">
                    <div className="flex items-center gap-3">
                      <Image
                        width={100}
                        height={200}
                        src={"/people/woman.webp"}
                      ></Image>
                      <div>
                        <p className="font-bold">Emilia Putri</p>
                        <p>12 tahun pengalaman</p>
                        <p>
                          <span className="fa fa-star mr-2"></span>(4.8)
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={openModalJadwal}
                      className="flex gap-2 items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
                    >
                      <span className="fa fa-calendar"></span>Jadwalkan
                    </button>
                  </div>
                  <Modal isOpen={isOpenJadwal} onClose={closeModalJadwal}>
                    <div className="w-96 h-96 relative">
                      <div className="w-96 h-96 left-0 top-0 absolute bg-[#609966] rounded-2xl" />
                      <div className="w-96 h-96 left-0 top-[46px] absolute bg-white rounded-2xl border-8 border-[#609966]" />
                      <div className="left-[113px] top-[10.15px] absolute text-center text-white text-opacity-80 text-2xl font-bold ">
                        Atur Jadwal
                      </div>
                      <div className="left-[167px] top-[270.88px] absolute text-center text-[#609966] text-opacity-50 text-xs font-bold ">
                        Waktu
                      </div>
                      <div className="left-[151px] top-[288.88px] absolute text-center text-[#609966] text-base font-normal ">
                        08.00 AM
                      </div>
                      <div className="left-[40px] top-[156.88px] absolute text-center text-[#609966] text-opacity-50 text-sm font-bold ">
                        April
                      </div>
                      <div className="w-80 h-20 left-[14px] top-[177.88px] absolute">
                        <div className="w-16 h-16 left-[145px] top-0 absolute bg-[#609966] rounded-lg" />
                        <div className="w-14 h-14 left-[81px] top-[8px] absolute bg-[#609966] bg-opacity-50 rounded-lg" />
                        <div className="w-14 h-14 left-[21px] top-[7.73px] absolute bg-[#609966] bg-opacity-50 rounded-lg" />
                        <div className="w-14 h-14 left-[215px] top-[7.73px] absolute bg-[#609966] bg-opacity-50 rounded-lg" />
                        <div className="w-14 h-14 left-[275px] top-[7.73px] absolute bg-[#609966] bg-opacity-50 rounded-lg" />
                        <div className="left-[162px] top-[12px] absolute text-center text-white text-xs font-bold">
                          Senin
                        </div>
                        <div className="left-[163px] top-[24px] absolute text-center text-white text-2xl font-normal ">
                          22
                        </div>
                        <div className="left-[85px] top-[17px] absolute text-center text-white text-xs font-bold ">
                          Minggu
                        </div>
                        <div className="left-[97px] top-[34px] absolute text-center text-white text-xl font-normal ">
                          21
                        </div>
                        <div className="left-[30px] top-[17px] absolute text-center text-white text-xs font-bold ">
                          Sabtu
                        </div>
                        <div className="left-[34px] top-[34px] absolute text-center text-white text-xl font-normal ">
                          20
                        </div>
                        <div className="left-[225px] top-[17px] absolute text-center text-white text-xs font-bold ">
                          Selasa
                        </div>
                        <div className="left-[228px] top-[34px] absolute text-center text-white text-xl font-normal ">
                          23
                        </div>
                        <div className="left-[285px] top-[17px] absolute text-center text-white text-xs font-bold ">
                          Rabu
                        </div>
                        <div className="left-[288px] top-[34px] absolute text-center text-white text-xl font-normal ">
                          24
                        </div>
                        <div className="bg-[#609966] rounded-full px-2 py-1 left-[-5px] top-[26px] absolute text-white text-xs font-normal">
                          <span className="fa fa-angle-left"></span>
                        </div>
                        <div className="bg-[#609966] rounded-full px-2 py-1 left-[335px] top-[26px] absolute text-white text-xs font-normal">
                          <span className="fa fa-angle-right"></span>
                        </div>
                      </div>
                      <div className="w-14 h-14 left-[103px] top-[77px] absolute">
                        <Image
                          width={56}
                          height={56}
                          src={"/people/man.webp"}
                          className="w-14 h-14 left-0 top-0 absolute bg-zinc-300 rounded-full"
                        ></Image>
                      </div>
                      <div className="w-24 h-11 left-[172.88px] top-[86px] absolute">
                        <div className="w-24 h-4 left-[10px] top-0 absolute text-stone-700 text-xs font-bold ">
                          Andri Suseno
                        </div>
                        <div className="w-24 h-2.5 left-[1px] top-[20px] absolute text-center text-stone-700 text-xs font-normal ">
                          12 tahun pengalaman
                        </div>
                        <div className="w-11 h-2.5 left-[24px] top-[60px] absolute">
                          <div className="w-8 h-2 left-[0.82px] top-0 absolute text-stone-700 text-xs font-normal  flex">
                            <span className="fa fa-star mr-2"></span>(4.8)
                          </div>
                        </div>
                      </div>
                      <div className="w-24 h-8 left-[136px] top-[333px] absolute bg-yellow-500 rounded-lg" />
                      <div className="left-[155px] top-[335px] absolute text-center text-white text-opacity-80 text-base font-bold ">
                        Selesai
                      </div>
                    </div>
                  </Modal>
                  <div className="flex justify-between items-center py-4 border-b">
                    <div className="pr-28">
                      <p className="font-bold">Chatbot</p>
                      <p>
                        Dapatkan solusi cepat untuk mengatasi masalah tanaman
                        hias Anda dengan bantuan robot pintar kami.
                      </p>
                    </div>
                    <button
                      onClick={openModal}
                      className="flex gap-2 items-center text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
                    >
                      <span className="fa fa-message"></span>Kirim Pesan
                    </button>
                    <Modal isOpen={isOpen} onClose={closeModal}>
                      <Chatbot />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="px-96 pb-10">
              <div className="flex justify-between border-b pb-10">
                <div className="flex items-center gap-5">
                  <Image
                    width={150}
                    height={250}
                    src={"/konsultasi/item/neemoil.webp"}
                    className="rounded"
                  ></Image>
                  <div>
                    <p className="font-bold text-xl">Pestisida Neem Oil</p>
                    <p>Solusi : Daun menguning</p>
                    <p className="font-bold">Rp. 25.000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => router.push("/cart")}
                    className="flex gap-2 items-center text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
                  >
                    <span className="fa fa-cart-shopping"></span>Masukkan
                    Keranjang
                  </button>
                </div>
              </div>
              <div className="flex justify-between border-b py-10">
                <div className="flex items-center gap-5">
                  <Image
                    width={150}
                    height={250}
                    src={"/konsultasi/item/neemoil.webp"}
                    className="rounded"
                  ></Image>
                  <div>
                    <p className="font-bold text-xl">Fungsida Acrobat</p>
                    <p>Solusi : Bercak daun</p>
                    <p className="font-bold">Rp. 10.000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => router.push("/cart")}
                    className="flex gap-2 items-center text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
                  >
                    <span className="fa fa-cart-shopping"></span>Masukkan
                    Keranjang
                  </button>
                </div>
              </div>
              <div className="flex justify-between border-b py-10">
                <div className="flex items-center gap-5">
                  <Image
                    width={150}
                    height={250}
                    src={"/konsultasi/item/neemoil.webp"}
                    className="rounded"
                  ></Image>
                  <div>
                    <p className="font-bold text-xl">Pupuk Vermicompost</p>
                    <p>Solusi : Tanaman layu</p>
                    <p className="font-bold">Rp. 65.000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => router.push("/cart")}
                    className="flex gap-2 items-center text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
                  >
                    <span className="fa fa-cart-shopping"></span>Masukkan
                    Keranjang
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

KonsultasiPage.title = "Konsultasi";
