import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AR from "../../../public/icon/ar.svg";
import Card from "@/components/Card";
import Lily from "../../../public/items/peace-lily-plant-white-pot 1.webp";
import { routerBack } from "@/lib/routerBack";
const TheirWordCard = (props) => {
  return (
    <div key={props?.key ? props.key : 0} className="flex flex-col py-5 px-20">
      <div className="flex gap-2 mb-2 px-5">
        <div className="text-center text-white bg-[#40513B] rounded-full px-5 py-3">
          {props?.name ? props?.name[1] : ""}
        </div>
        <div className="text-start">
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="fa fa-star"
                style={
                  index + 1 <= props?.rating
                    ? { color: "orange" }
                    : { color: "" }
                }
              ></span>
            ))}
          </div>
          <div className="flex gap-2">
            <p>{props?.name}</p>
            <div
              style={{
                width: 0,
                height: "2rem",
                border: "3px rgba(64, 81, 59, 0.10) solid",
              }}
            ></div>
            <p>{props?.date}</p>
          </div>
        </div>
      </div>
      <p>{props?.comment}</p>
    </div>
  );
};

export default function DetailPlantPage() {
  const router = useRouter();
  const plant = router.query.data;
  const [dataPlant, setDataPlant] = useState({});
  const [counterQuantity, setCounterQuantity] = useState(1);

  const incrementCounter = (max) => {
    if (counterQuantity < max) {
      setCounterQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrementCounter = () => {
    if (counterQuantity > 1) {
      setCounterQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  useEffect(() => {
    console.log(router.query.data);
    setDataPlant(JSON.parse(plant ? plant : "{}"));
  }, [router]);
  return (
    <>
      <div className="flex justify-center py-24 gap-5 text-stone-700">
        <span
          className="fa fa-left-long cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            routerBack(router);
          }}
        ></span>
        <div className="w-[21rem] h-[21rem] relative flex justify-center items-center mb-2">
          <div className="w-[21rem] h-[21rem] bg-zinc-100 rounded-3xl" />
          <Image
            width={224}
            height={288}
            className="min-w-fit h-4/5 absolute"
            src={dataPlant?.image}
            alt="plant"
          />
        </div>
        <div className="flex flex-col gap-4 w-[30%]">
          <div className="flex justify-between">
            <p className="text-3xl font-extrabold">{dataPlant?.title}</p>
            <p className="text-2xl font-semibold">{dataPlant?.price}</p>
          </div>
          <div className="flex">
            <span className="fa fa-star"></span>
            <p className="mx-2 text-xs font-normal whitespace-nowrap">
              ({dataPlant?.rating}) ulasan
            </p>
            <div
              style={{
                width: 0,
                height: "1rem",
                border: "2px rgba(64, 81, 59, 0.10) solid",
              }}
            ></div>
            <p className="ml-2 text-xs font-normal">
              {dataPlant?.sold} terjual
            </p>
          </div>
          <div className="flex border-t border-b justify-between py-3">
            <div className="flex gap-4">
              <div className="text-center text-white bg-[#40513B] rounded-full px-5 py-3">
                T
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Toko Pak Anton</p>
                <div className="flex items-center gap-2">
                  <span className="fa fa-comment-dots"></span>
                  <p className="text-xs underline cursor-pointer">Chat</p>
                  <div
                    style={{
                      width: 0,
                      height: "1rem",
                      border: "2px rgba(64, 81, 59, 0.10) solid",
                    }}
                  ></div>
                  <span className="fa fa-store"></span>
                  <p className="text-xs underline cursor-pointer">
                    Kunjungi Toko
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="fa fa-location-dot"></span>
              <div className="flex flex-col text-xs">
                <p>Kota Batu,</p>
                <p>Jawa Timur</p>
              </div>
            </div>
          </div>
          <p className="font-semibold">Kuantitas:</p>
          <div className="flex font-semibold gap-4">
            <div className="flex border rounded-xl gap-4 justify-center items-center px-4">
              <span
                className="fa fa-minus cursor-pointer"
                onClick={() => decrementCounter()}
              ></span>
              <p>{counterQuantity}</p>
              <span
                className="fa fa-plus cursor-pointer"
                onClick={() => incrementCounter(100)}
              ></span>
            </div>
            <p>
              Stok 100 <br /> Tersedia
            </p>
          </div>
          <div className="flex gap-4">
            <button
              // onClick={() => router.push("/auth/login")}
              className="font-medium border border-black rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 "
            >
              <Image src={AR} className="w-8 h-8" alt="icon" />
            </button>
            <button
              onClick={() => router.push("/cart")}
              className="text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
            >
              Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center py-24 border-y px-72 text-stone-700">
        <h1 className="text-md md:text-xl lg:text-3xl font-bold leading-tight mb-4 md:mb-6">
          Deskripsi Tanaman
        </h1>
        <p className="text-sm mb-8 md:mb-10">
          Aster putih (Aster alpinus) adalah tanaman hias herbaceous perennial
          dengan bunga putih berbentuk bintang yang cantik. Tanaman ini tumbuh
          dengan tinggi sekitar 15-30 cm dan cocok ditanam di luar ruangan
          dengan sinar matahari penuh atau setengah teduh. Aster putih
          membutuhkan tanah subur dan lembab dengan drainase yang baik.
          Merawatnya termasuk menyiram secara teratur, memberikan pupuk, dan
          melakukan pemangkasan reguler. Tanaman ini cocok digunakan sebagai
          tanaman hias border di taman atau dalam pot untuk teras atau balkon.
        </p>
      </div>
      <div className="flex h-screen py-20 px-52 text-stone-700">
        <div className="flex w-full justify-between gap-10">
          <div className="w-3/4 overflow-y-auto h-5/6 border-r no-scrollbar ">
            <p className="font-semibold text-md md:text-lg lg:text-2xl px-20 mb-5">
              Ulasan Pelanggan
            </p>
            {Array.from({ length: 5 }, (_, index) => (
              <TheirWordCard
                key={index}
                name={"@BayuAnugerah"}
                date={"01/01/2024"}
                rating={5}
                comment={
                  "Fitur fitur yang diberikan sangat bermanfaat bagi saya yang masih pemula mempunyai hobby tanaman hias"
                }
              ></TheirWordCard>
            ))}
          </div>
          <div className="w-1/4 overflow-y-auto h-5/6 no-scrollbar">
            <p className="text-center mb-5">Rekomendasi Produk Lain Di Toko</p>
            {Array.from({ length: 2 }, (_, index) => (
              <Card
                key={index}
                image={Lily}
                title={"Lily Spathiphylum"}
                rating={4.8}
                sold={150}
                price={"Rp. 45.000"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
DetailPlantPage.title = "Detail Plant";
