import Image from "next/image";
import React from "react";
import Email from "../../../public/icon/email.svg";
import Logo from "../../../public/logo-plantpal.svg";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className="relative bg-[#EDF1D6] text-stone-700  pt-16">
        <div className="mx-4 flex gap-5 justify-center flex-wrap">
          <Image
            src={Logo}
            className="w-full px-4 pb-16 sm:w-1/2 lg:w-2/12 lg:mb-0 sm:mr-8"
            alt="logo"
          />
          <LinkGroup header="Customer care">
            <NavLink link="/#" label="Akun saya" router={router} />
            <NavLink link="/#" label="Privacy and Policy" router={router} />
            <NavLink link="/#" label="Lacak Pesanan Saya" router={router} />
            <NavLink link="/#" label="Kontak kami" router={router} />
          </LinkGroup>
          <LinkGroup header="Komunitas kami">
            <NavLink link="/#" label="Instagram" router={router} />
            <NavLink link="/#" label="Facebook" router={router} />
            <NavLink link="/#" label="Telegram" router={router} />
          </LinkGroup>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark ">
                Subscribe
              </h4>
              <p>
                Dapatkan informasi tanaman hias terbaru, penawaran khusus dan
                event menarik melalui email kamu.
              </p>
              <div className="flex w-80 h-12 mt-4 p-4 bg-white rounded-3xl border border-black">
                <Image src={Email} alt="email" />
                <input
                  className="w-full"
                  placeholder="Masukkan alamat email Anda"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-5 text-lg font-semibold text-dark ">
            {header}
          </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label, router }) => {
  return (
    <li>
      <div
        onClick={() => {
          router.push(link);
        }}
        className="inline-block text-base leading-loose text-body-color hover:text-primary "
      >
        {label}
      </div>
    </li>
  );
};
