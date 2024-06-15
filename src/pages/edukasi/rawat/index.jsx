import Accordion from "@/components/Accordion";
import { routerBack } from "@/lib/routerBack";
import { useRouter } from "next/router";
import React from "react";
import Tanaman from "../../../../public/edukasi/tips_inspirasi_cover.webp";
import Image from "next/image";
const App = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-black relative text-center mb-20 h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={Tanaman}
            alt={"Konsultasi cover"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <span
          className="fa fa-left-long cursor-pointer absolute text-stone-700 text-4xl left-36 top-9"
          onClick={() => {
            routerBack(router);
          }}
        ></span>
      </div>
      <div className="container px-36 text-[#40513B]">
        <h1 className="font-bold text-3xl mb-4">Sejarah</h1>
        <p className="mb-4">
          Bunga Aster, atau Asteraceae, adalah tanaman hias yang berasal dari
          wilayah Eropa dan Asia. Tanaman ini telah lama dikenal karena
          keindahan dan keberagaman bunganya. Pada abad ke-19, Aster menjadi
          populer di Eropa dan Amerika Serikat sebagai tanaman hias. Bunganya
          yang cerah dan beragam warna serta bentuknya yang menarik membuat
          Aster menjadi pilihan yang populer untuk keperluan dekoratif.
          <br /> <br />
          Penggunaan utama Aster adalah sebagai tanaman hias, baik di taman
          maupun dalam pot. Bunga Aster juga sering digunakan dalam rangkaian
          bunga potong dan karangan bunga karena daya tahan dan keindahan
          bunganya yang dapat bertahan lama setelah dipotong. Meskipun Aster
          lebih umum ditanam di luar ruangan, tanaman ini juga bisa dijadikan
          tanaman hias rumahan dengan catatan perawatan yang tepat. Aster
          membutuhkan sinar matahari yang cukup dan penyiraman yang teratur
          namun tidak berlebihan. <br /> <br /> Dengan keindahan dan daya tahan
          bunganya, serta sejarahnya yang kaya, Aster menjadi pilihan yang baik
          untuk ditanam sebagai tanaman hias di rumah.
        </p>
        <div className="mx-auto py-8">
          <Accordion title="Fakta Menarik">
            <p>
              • Lebih dari 600 spesies aster menghiasi dunia dengan beragam
              warna, bentuk, dan ukuran. <br /> • Di Amerika Serikat, aster
              dijuluki &quot;September Lady&quot; karena sering mekar di bulan
              September. <br /> • Aster melambangkan cinta, kebijaksanaan, dan
              keberuntungan di berbagai budaya. <br /> • Beberapa spesies aster
              memiliki aroma yang harum dan digunakan dalam parfum.
            </p>
          </Accordion>
          <Accordion title="Penyakit dan Penanggulangan">
            <p>
              Meskipun aster tergolong tanaman yang kuat, beberapa penyakit umum
              dapat menyerang mereka: <br /> ㆍBusuk batang: Disebabkan oleh
              jamur, ditandai dengan batang lunak dan berlendir. Solusinya:
              Pangkas bagian yang sakit, semprot dengan fungisida, dan jaga
              drainase tanah. <br /> ㆍBercak daun: Dicirikan dengan
              bintik-bintik coklat pada daun. Atasinya dengan fungisida dan
              buang daun yang terinfeksi.
              <br /> ㆍKutu daun: Hama kecil yang mengisap cairan tanaman.
              Gunakan sabun insektisida atau predator alami seperti ladybug.
            </p>
          </Accordion>
          <Accordion title="Cara Merawat">
            <p>
              1. Penyiraman : <br />
              ㆍWaktu: Tanaman aster perlu disiram secara teratur, terutama saat
              musim panas atau ketika tanah terlihat kering. <br />
              ㆍFrekuensi: Sekitar 1-2 kali seminggu, tergantung pada kondisi
              cuaca dan kelembaban tanah. <br /> 2. Pupuk : <br />
              ㆍWaktu: Berikan pupuk pada awal musim semi untuk merangsang
              pertumbuhan dan sebelum tanaman mekar untuk mendukung pembungaan
              yang subur.
              <br />
              ㆍFrekuensi: Berikan pupuk setiap 4-6 minggu sekali selama musim
              tumbuh.
            </p>
          </Accordion>
          <Accordion title="Do & Don’ts">
            <p>
              Do: <br />
              ㆍPilih lokasi yang mendapat sinar matahari penuh. <br />ㆍ
              Gunakan tanah yang gembur dan berdrainase baik. Pangkas bunga layu
              untuk merangsang pertumbuhan baru. <br />
              ㆍMulsa di sekitar tanaman untuk menjaga kelembapan tanah dan
              menekan gulma.
              <br /> Don&apos;t: <br />
              ㆍMenyiram berlebihan, yang dapat menyebabkan busuk akar. <br />
              ㆍMemupuk berlebihan, yang dapat membakar akar. <br />
              ㆍMenanam di lokasi yang teduh atau lembab. <br />ㆍ Mengabaikan
              hama dan penyakit.
            </p>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default App;
App.title = "Tips Rawat";
