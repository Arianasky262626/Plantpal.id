import React, { useState } from "react";
import EdukasiCover from "../../../public/edukasi/edukasi_cover.webp";
import Image from "next/image";
import Lily from "../../../public/items/peace-lily-plant-white-pot 1.webp";
import AsterPutih from "../../../public/items/aster-putih.webp";
import MawarMerah from "../../../public/items/mawar-merah.webp";
import Bougenvillea from "../../../public/items/bougenvillea.webp";
import Primrose from "../../../public/items/primrose.webp";
import Lavender from "../../../public/items/lavender.webp";
import KrokotMawar from "../../../public/items/krokot-mawar.webp";
import TulipKuning from "../../../public/items/tulip-kuning.webp";
import Matahari from "../../../public/items/matahari.webp";
import Hortensia from "../../../public/items/hortensia.webp";

import { useRouter } from "next/router";
const EdukasiRawatCard = (props) => {
  const router = useRouter();
  return (
    <div
      key={props?.key ? props.key : 0}
      className="flex flex-col justify-center items-center text-center cursor-pointer"
      onClick={() =>
        router.push({
          pathname: "/edukasi/rawat",
          query: { data: JSON.stringify(props) },
        })
      }
    >
      <div className="w-60 h-60 relative flex justify-center items-center mb-2">
        <div className="w-60 h-60 bg-zinc-100 rounded-3xl" />
        <Image
          width={144}
          height={192}
          className="left-[33px] top-[6.41px] min-w-fit h-4/5 absolute"
          src={props?.image}
          alt="plant"
        />
      </div>
      <p>{props?.title}</p>
    </div>
  );
};
const EdukasiTipsCard = (props) => {
  return (
    <div
      key={props?.key ? props.key : 0}
      className="flex flex-col items-center"
    >
      <iframe
        width="300"
        height="150"
        src={props?.link}
        className="rounded-lg mb-2"
      ></iframe>
      <p>{props?.title}</p>
    </div>
  );
};
export default function EdukasiPage() {
  const [active, setActive] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="bg-black relative text-center mb-20 h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={EdukasiCover}
            alt={"edukasi cover"}
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-8">
          <p className="font-bold text-5xl mb-5">Tambah Wawasan Tanaman Hias</p>
          <p className="">mulai merawat secara berkelanjutan!</p>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center items-center mb-20">
          <button
            className={`rounded-tl-3xl rounded-bl-3xl border-2 ${
              active === 0
                ? "bg-stone-700 text-white"
                : "bg-white text-stone-700 text-border-700"
            } border-stone-700 text-lg py-2 px-5 transition-colors duration-300 ease-in-out`}
            onClick={(e) => {
              e.preventDefault();
              setActive(0);
            }}
          >
            Rawat sesuai jenis
          </button>
          <button
            className={`rounded-tr-3xl rounded-br-3xl border-2 ${
              active === 1
                ? "bg-stone-700 text-white"
                : "bg-white text-stone-700 text-border-700"
            } border-stone-700 text-lg py-2 px-5 transition-colors duration-300 ease-in-out`}
            onClick={(e) => {
              e.preventDefault();
              setActive(1);
            }}
          >
            Tips dan inspirasi
          </button>
        </div>
        {active == 0 ? (
          <>
            <div className="grid grid-cols-9 gap-8 px-24">
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 0
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(0)}
              >
                Bunga
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 1
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Daun
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 2
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Batang
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 3
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Akar
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 4
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(4)}
              >
                Buah
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 5
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(5)}
              >
                Air
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 6
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(6)}
              >
                Sekulen
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 7
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(7)}
              >
                Aromatik
              </button>
              <button
                className={`border border-stone-700 rounded-3xl text-sm font-semibold py-2 transition-colors duration-300 ${
                  activeButton === 8
                    ? "bg-stone-700 text-white"
                    : "text-stone-700 bg-white"
                }`}
                onClick={() => handleButtonClick(8)}
              >
                Bonsai
              </button>
            </div>
            <div className="grid grid-cols-5 gap-8 px-24 my-20 text-stone-700">
              <EdukasiRawatCard image={AsterPutih} title={"Aster Putih"} />
              <EdukasiRawatCard image={MawarMerah} title={"Mawar Merah"} />
              <EdukasiRawatCard image={Hortensia} title={"Hortensia"} />
              <EdukasiRawatCard image={Lily} title={"Lily Spathiphylum"} />
              <EdukasiRawatCard image={Primrose} title={"Primrose"} />
              <EdukasiRawatCard image={TulipKuning} title={"Tulip Kuning"} />
              <EdukasiRawatCard image={KrokotMawar} title={"Krokot Mawar"} />
              <EdukasiRawatCard image={Bougenvillea} title={"Bougenvilia"} />
              <EdukasiRawatCard image={Lavender} title={"Lavender"} />
              <EdukasiRawatCard image={Matahari} title={"Matahari"} />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-8 px-24 my-20 text-stone-700">
              <EdukasiTipsCard
                link={
                  "https://www.youtube.com/embed/H03B8jIH9Fc?si=lBQ3k0zgg1cr4usc"
                }
                title={"DIY pajangan dinding tanaman hias dari bahan bekas"}
              />
              <EdukasiTipsCard
                link={
                  "https://www.youtube.com/embed/H03B8jIH9Fc?si=lBQ3k0zgg1cr4usc"
                }
                title={"DIY pajangan dinding tanaman hias dari bahan bekas"}
              />
              <EdukasiTipsCard
                link={
                  "https://www.youtube.com/embed/H03B8jIH9Fc?si=lBQ3k0zgg1cr4usc"
                }
                title={"DIY pajangan dinding tanaman hias dari bahan bekas"}
              />
              <EdukasiTipsCard
                link={
                  "https://www.youtube.com/embed/H03B8jIH9Fc?si=lBQ3k0zgg1cr4usc"
                }
                title={"DIY pajangan dinding tanaman hias dari bahan bekas"}
              />
              <EdukasiTipsCard
                link={
                  "https://www.youtube.com/embed/H03B8jIH9Fc?si=lBQ3k0zgg1cr4usc"
                }
                title={"DIY pajangan dinding tanaman hias dari bahan bekas"}
              />
              <EdukasiTipsCard
                link={
                  "https://www.youtube.com/embed/H03B8jIH9Fc?si=lBQ3k0zgg1cr4usc"
                }
                title={"DIY pajangan dinding tanaman hias dari bahan bekas"}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
EdukasiPage.title = "Edukasi";
