import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Card(props) {
  const router = useRouter();
  return (
    <React.Fragment key={props?.key ? props.key : 0}>
      <div
        className="cursor-pointer py-4"
        onClick={(e) => {
          e.preventDefault();
          router.push({
            pathname: "/plant",
            query: { data: JSON.stringify(props) },
          });
        }}
      >
        <div className="w-60 h-60 relative flex justify-center items-center mb-2">
          <div className="w-60 h-60 bg-zinc-100 rounded-3xl" />
          <Image
            width={144}
            height={192}
            className="min-w-fit h-4/5 absolute"
            src={props?.image}
            alt="plant"
          />
        </div>
        <div className="px-2 flex flex-col gap-1">
          <p className="text-base font-normal">{props?.title}</p>
          <div className="flex">
            <span className="fa fa-star"></span>
            <p className="ml-2 w-8 h-4 text-xs font-normal">
              ({props?.rating})
            </p>
            <div
              style={{
                width: 0,
                height: "1rem",
                border: "2px rgba(64, 81, 59, 0.10) solid",
              }}
            ></div>
            <p className="ml-2 text-xs font-normal">{props?.sold} terjual</p>
          </div>
          <p className="text-base font-semibold">{props?.price}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
