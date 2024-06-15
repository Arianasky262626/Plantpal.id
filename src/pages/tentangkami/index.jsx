import React from "react";
import Image from "next/image";
import TentangKami from "../../../public/tentangkami/tentang-kami.webp";
import Visi from "../../../public/tentangkami/visi.webp";

export default function index() {
  return (
    <>
      <div className="items-center">
        <Image
          className="z-5 bottom-[-500px]"
          src={TentangKami}
          alt="tentangkami"
        ></Image>
      </div>

      <div className="py-20 px-80 bg-[#639B68] text-center font-light text-white">
        <h1 className="text-5xl font-bold mb-10">History Kami</h1>
        <p className="mb-5">
          Plantpal Marketplace berawal dari sebuah pengamatan terhadap tantangan
          yang dihadapi oleh petani tanaman hias dalam pemasaran produk mereka.
          Seiring dengan itu, kecintaan kami terhadap tanaman hias dan keinginan
          untuk berbagi kegembiraan tersebut dengan orang lain, membuat kami
          menyadari kebutuhan akan akses yang lebih mudah dan luas terhadap
          tanaman hias berkualitas. Inilah yang mendorong kami untuk mendirikan
          Plantpal Marketplace, sebuah platform di mana semua orang dapat
          menemukan tanaman impian mereka dan membina hubungan yang lebih erat
          dengan alam.
        </p>
        <p>
          Kami meyakini bahwa tanaman hias tidak hanya sekadar dekorasi,
          melainkan juga sumber kebahagiaan dan inspirasi dalam kehidupan
          sehari-hari. Dengan komitmen kami terhadap kualitas, pelayanan
          pelanggan yang unggul, dan keberlanjutan lingkungan, kami bertekad
          untuk menciptakan pengalaman berkebun yang memuaskan dan membangun
          komunitas yang solid di sekitar cinta kami terhadap tanaman.
          Bergabunglah dengan Plantpal Marketplace, di mana keindahan alam
          bertemu dengan kesejahteraan jiwa.
        </p>
      </div>

      <div className="relative h-screen">
        <Image src={Visi} className="h-screen" alt="tentangkami"></Image>
        <div className="absolute top-64 left-[-50rem] px-[60rem] font-light">
          <h1 className="text-5xl font-bold mb-10 text-white">Visi Kami</h1>
          <p className="text-white">
            Menjadi pusat terkemuka yang menghubungkan antara pecinta tanaman
            hias dengan petani tanaman hias, menyediakan akses mudah dan luas
            terhadap tanaman hias berkualitas, serta menjadi wadah untuk
            memperkaya pengetahuan dan kecintaan terhadap alam.
          </p>
        </div>
      </div>

      <div className="py-20 px-80 text-[#40513B] font-light">
        <h1 className="text-5xl font-bold mb-10 text-center">Misi Kami</h1>
        <p>
          1. Menyediakan platform yang inovatif dan user-friendly bagi pecinta
          tanaman hias untuk menemukan dan membeli tanaman impian mereka dengan
          mudah.
        </p>
        <p>
          2. Mendukung petani tanaman hias lokal dengan menyediakan wadah untuk
          memasarkan produk-produk mereka secara efektif dan adil.
        </p>
        <p>
          3. Menyediakan layanan pelanggan yang prima untuk memastikan kepuasan
          pelanggan dan membangun hubungan jangka panjang.
        </p>
        <p>
          4. Memperkuat kesadaran akan pentingnya keberlanjutan lingkungan dalam
          budidaya tanaman hias, dengan memberikan edukasi dan pilihan produk
          yang ramah lingkungan.
        </p>
        <p>
          5. Membangun komunitas yang solid di sekitar tanaman hias, dengan
          menyelenggarakan acara-acara, diskusi, dan kampanye yang menginspirasi
          dan mendukung kecintaan terhadap alam.
        </p>
      </div>
    </>
  );
}
