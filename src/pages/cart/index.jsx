import { routerBack } from "@/lib/routerBack";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Lily from "../../../public/items/peace-lily-plant-white-pot 1.webp";
function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 1, price: 45000, totalPrice: 45000, checked: false },
    { id: 2, quantity: 2, price: 55000, totalPrice: 110000, checked: false },
    { id: 3, quantity: 3, price: 65000, totalPrice: 195000, checked: false },
    // Add more items as needed
  ]);

  const handleCheckAll = () => {
    const allChecked = cartItems.every((item) => item.checked);
    const updatedItems = cartItems.map((item) => ({
      ...item,
      checked: !allChecked,
    }));
    setCartItems(updatedItems);
  };

  const handleCheckSingle = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCartItems(updatedItems);
  };

  const incrementCounter = (id, max) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity < max ? item.quantity + 1 : item.quantity,
            totalPrice:
              item.price *
              (item.quantity < max ? item.quantity + 1 : item.quantity),
          }
        : item
    );
    setCartItems(updatedItems);
  };

  const decrementCounter = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            totalPrice:
              item.price *
              (item.quantity > 1 ? item.quantity - 1 : item.quantity),
          }
        : item
    );
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (item.checked) {
        total += item.totalPrice;
      }
      return total;
    }, 0);
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="flex flex-col justify-center px-[30rem] pt-10 pb-16 text-[#40513B]">
          <div className="flex items-center gap-5 mb-10">
            <span
              className="fa fa-left-long cursor-pointer text-md md:text-lg lg:text-xl font-bold leading-tight"
              onClick={(e) => {
                e.preventDefault();
                routerBack(router);
              }}
            ></span>
            <p className="text-lg md:text-xl lg:text-3xl font-bold leading-tight">
              Keranjang Belanja
            </p>
          </div>
          <div className="flex justify-between mb-10">
            <div className="flex gap-3">
              <span className="fa fa-location-dot text-2xl"></span>
              <div className="text-xs flex flex-col gap-2">
                <p className="font-bold text-sm">Alamat Pengiriman</p>
                <p>Dari : Sidomulyo, Kec. Batu, Kota Batu, Jawa Timur</p>
                <p>
                  Ke : Condet, Kec. Kramat Jati, Kota Jakarta Timur, Jakarta
                </p>
              </div>
            </div>
            <span className="fa fa-pencil"></span>
          </div>
          <div className="mx-auto border-y py-6 text-[#40513B]">
            <div className="checkbox mb-8">
              <label>
                <input
                  type="checkbox"
                  checked={cartItems.every((item) => item.checked)}
                  onChange={handleCheckAll}
                />
                <i className="faboost"></i>
                Centang untuk pilih semua
              </label>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="checkbox w-full">
                <label>
                  <input
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    checked={item.checked || false}
                    onChange={()=>{return}}
                  />
                  <i
                    className="faboost"
                    onClick={() => handleCheckSingle(item.id)}
                  ></i>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Image width={144} height={206} src={Lily} alt={"plant"} />
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                          <div className="text-center text-white bg-[#40513B] rounded-full px-3 py-1">
                            T
                          </div>
                          <p>Toko Pak Anton</p>
                        </div>
                        <p className="font-bold">Aster</p>
                        <p className="font-semibold text-xs">Kuantitas:</p>
                        <div className="flex font-semibold gap-2">
                          <div className="flex border rounded-xl gap-4 justify-center items-center px-4">
                            <span
                              className="fa fa-minus cursor-pointer"
                              onClick={() => decrementCounter(item.id)}
                            ></span>
                            <p>{item.quantity}</p>
                            <span
                              className="fa fa-plus cursor-pointer"
                              onClick={() => incrementCounter(item.id, 100)}
                            ></span>
                          </div>
                          <p className="text-xs">Stok 100 Tersedia</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-bold text-xl">Rp {item.price}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="flex w-80 h-12 my-4 p-4 bg-white rounded-3xl border border-black">
            <span className="fa fa-ticket mr-4"></span>
            <input
              className="w-full"
              placeholder="Masukkan kode voucher"
            ></input>
          </div>
          <div className="flex justify-between my-2">
            <p>Biaya Pengiriman</p>
            <p className="font-bold">Rp 10000</p>
          </div>
          <div className="flex justify-between my-2">
            <div>
              <p className="font-bold">Subtotal</p>
              <p>*Tidak memakai voucher</p>
            </div>
            <p className="font-bold">Rp {calculateTotalPrice()}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => router.push("/auth/login")}
              className="text-white bg-[#EFAC00] hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-12 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none "
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
CartPage.title = "Cart";
CartPage.getLayout = function getLayout(page) {
  return page;
};

export default CartPage;
