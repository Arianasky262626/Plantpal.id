import Image from "next/image";
import React from "react";
import Woman from "../../../../public/auth/login/woman-wore-orange-gloves-planted-trees-house.webp";
import Logo from "../../../../public/logo-plantpal.svg";
import { useRouter } from "next/router";
function LoginPage() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-[#9DC08B] to-[#639B68] min-h-screen min-w-screen flex items-center justify-center">
      <div className="bg-white p-3 rounded-3xl w-2/3">
        <div className="flex items-center justify-center gap-3 text-stone-700">
          <Image src={Woman} alt="woman" className="w-1/2 h-1/2 rounded-3xl" />{" "}
          <div className="flex flex-col items-center gap-6 w-full p-3">
            <Image src={Logo} alt="logo" className="w-1/3 h-1/3 mb-4" />{" "}
            <h1 className="text-3xl font-bold text-center">Masuk Yuk!</h1>
            <form className="gap-3 flex flex-col w-full" action="">
              <input
                type="text"
                placeholder="Alamat Email"
                className="rounded-2xl border-2 border-black border-opacity-25 p-3"
              />
              <input
                type="password"
                placeholder="Kata Sandi"
                className="rounded-2xl border-2 border-black border-opacity-25 p-3"
              />
              <button
                className="bg-[#EFAC00] text-white rounded-2xl px-4 py-2"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/auth");
                }}
              >
                Masuk
              </button>
            </form>
            <span
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth/register");
              }}
              className="text-center cursor-pointer"
            >
              Belum mempunyai akun ?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
LoginPage.title = "Login";
LoginPage.getLayout = function getLayout(page) {
  return page;
};

export default LoginPage;
