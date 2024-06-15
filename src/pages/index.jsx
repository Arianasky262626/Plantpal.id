import Image from "next/image";
import { useRouter } from "next/router";
import Plan from "../../public/beranda/indoor-plants-studio.webp";
import AR from "../../public/icon/ar.svg";
import Bell from "../../public/icon/bell.svg";
import Book from "../../public/icon/book.svg";
import Chat from "../../public/icon/chat.svg";
import Card from "@/components/Card";
import Lily from "../../public/items/peace-lily-plant-white-pot 1.webp";
import AsterPutih from "../../public/items/aster-putih.webp";
import MawarMerah from "../../public/items/mawar-merah.webp";
import CalatheaBuluAyam from "../../public/items/calathea-bulu-ayam.webp";
import Bougenvillea from "../../public/items/bougenvillea.webp";
import Primrose from "../../public/items/primrose.webp";
import Keatapang from "../../public/items/ketapang.webp";
import Lavender from "../../public/items/lavender.webp";
import KrokotMawar from "../../public/items/krokot-mawar.webp";
import TulipKuning from "../../public/items/tulip-kuning.webp";
import Matahari from "../../public/items/matahari.webp";
import Hortensia from "../../public/items/hortensia.webp";
import { useState } from "react";

const FeatureCard = (props) => {
  return (
    <div className="flex flex-col items-center text-center px-20">
      <Image src={props?.logo} alt="icon" />
      <p className="text-xl font-bold">{props?.title}</p>
      <p className="text-sm">{props?.body}</p>
    </div>
  );
};

const TheirWordCard = (props) => {
  return (
    <div
      key={props?.key ? props.key : 0}
      className="flex flex-col items-center text-center px-20"
    >
      <div className="flex gap-2 mb-2">
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

export default function Home() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <>
      <div className="container relative flex items-center">
        <div className="w-1/2 text-[#40513B] p-20 z-2">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Bawa Keindahan & Ketenangan Taman
          </h1>
          <p className="text-lg font-medium md:text-xl text-gray-700 mb-8 md:mb-10">
            ke dalam ruangan favoritmu!
          </p>
        </div>
        <Image
          className="z-1 absolute w-3/4 h-full right-[-150px]"
          src={Plan}
          alt="plant"
        ></Image>
      </div>
      <div className="container">
        <div className="flex justify-center items-center bg-gradient-to-r from-[#9DC08B] to-[#639B68]">
          <div className="w-1/2 flex justify-center">
            <iframe
              width="520"
              height="245"
              src="https://www.youtube.com/embed/cEo_duJcUSY?si=rJ1mBNSFGn9syFiH"
            ></iframe>
          </div>
          <div className="w-1/2 text-center ml p-24 text-white">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Tentang Kami
            </h1>
            <p className="text-lg md:text-xl mb-8 md:mb-10 ">
              PlantPal.id merupakan platform yang tidak hanya menawarkan tanaman
              hias yang indah secara praktis dan aman untuk dibeli, tetapi juga
              menjadi rumah bagi komunitas pecinta tanaman yang solid. Dapatkan
              tanaman impian Anda dan bergabunglah dengan kami untuk berbagi
              pengetahuan, tips, dan pengalaman tentang tanaman hias.
            </p>
            <button
              onClick={() => router.push("/tentangkami")}
              className="text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
            >
              Selengkapnya
            </button>
          </div>
        </div>
        <div className="mb-20 text-stone-700">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 pt-20 text-center">
            Fitur Unggulan
          </h1>
          <div className="flex justify-center gap-5 mt-20">
            <FeatureCard
              logo={AR}
              title={"Realitas Tertambah"}
              body={"Memudahkan menyesuaikan tanaman impian dengan ruanganmu"}
            ></FeatureCard>
            <div
              style={{
                width: 0,
                height: "9rem",
                border: "3px rgba(64, 81, 59, 0.10) solid",
              }}
            ></div>
            <FeatureCard
              logo={Bell}
              title={"Pengingat Cerdas"}
              body={"Membantu merawatkan tanaman secara berkelanjutanu"}
            ></FeatureCard>
            <div
              style={{
                width: 0,
                height: "9rem",
                border: "3px rgba(64, 81, 59, 0.10) solid",
              }}
            ></div>
            <FeatureCard
              logo={Book}
              title={"Pembelajaran Menarik"}
              body={"Menambah wawasan dan pengalaman tentang tanaman hias"}
            ></FeatureCard>
            <div
              style={{
                width: 0,
                height: "9rem",
                border: "3px rgba(64, 81, 59, 0.10) solid",
              }}
            ></div>
            <FeatureCard
              logo={Chat}
              title={"Konsultasi Dengan Ahli"}
              body={"Memudahkan menagangani keluhan kondisi tanaman hias"}
            ></FeatureCard>
          </div>
        </div>
        <div className="text-stone-700">
          <div className="flex justify-between px-24 mb-4">
            <p className="text-xl font-bold">Populer Saat ini</p>
            <span>
              <span className="underline">Lihat semua </span>
              <span>-{">"}</span>
            </span>
          </div>
          <div className="grid grid-cols-5 gap-8 px-24 mb-20">
            <Card
              image={Lily}
              title={"Lily Spathiphylum"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={AsterPutih}
              title={"Aster Putih"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={MawarMerah}
              title={"Mawar Merah"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={CalatheaBuluAyam}
              title={"Calathea Bulu Ayam"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Keatapang}
              title={"Ketapang"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
          </div>
          <div className="flex justify-between px-24 mb-4 text-stone-700">
            <p className="text-xl font-bold">Jenis Tanaman Hias</p>
            <span>
              <span className="underline">Lihat semua </span>
              <span>-{">"}</span>
            </span>
          </div>
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
          <div className="grid grid-cols-5 gap-8 px-24 mb-20 text-stone-700">
            <Card
              image={AsterPutih}
              title={"Aster Putih"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={MawarMerah}
              title={"Mawar Merah"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Hortensia}
              title={"Hortensia"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Lily}
              title={"Lily Spathiphylum"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Primrose}
              title={"Primrose"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={TulipKuning}
              title={"Tulip Kuning"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={KrokotMawar}
              title={"Krokot Mawar"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Bougenvillea}
              title={"Bougenvillea"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Lavender}
              title={"Lavender"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
            <Card
              image={Matahari}
              title={"Matahari"}
              rating={4.8}
              sold={150}
              price={"Rp. 45.000"}
            />
          </div>
        </div>
        <div className="border-t border-b text-stone-700">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 pt-20 text-center">
            Kata Mereka
          </h1>
          <div className="flex justify-center gap-5 mt-20 pb-20">
            <TheirWordCard
              name={"@BayuAnugerah"}
              date={"01/01/2024"}
              rating={5}
              comment={
                "Fitur fitur yang diberikan sangat bermanfaat bagi saya yang masih pemula mempunyai hobby tanaman hias"
              }
            ></TheirWordCard>
            <TheirWordCard
              name={"@Aliyamaharani"}
              date={"01/01/2024"}
              rating={5}
              comment={
                "Puas dengan pelayanannya, kualitas tanaman hias selalu bagus sampe datang ke rumah, banyak banget pilihan jenisnya sampe terus repeat order"
              }
            ></TheirWordCard>
            <TheirWordCard
              name={"@SintaKusumati"}
              date={"01/01/2024"}
              rating={5}
              comment={
                "Platform ini memberikan kesempatan bagi saya untuk terus mencintai hobbi tanaman hias, saat ini udah banyak sekali tanaman hias yang saya beli dari sini dan semua bagus-bagus"
              }
            ></TheirWordCard>
          </div>
        </div>
      </div>
    </>
  );
}
Home.title = "Beranda";
