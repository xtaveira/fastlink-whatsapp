"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [link, setLink] = useState("https://wa.me/");
  const [number, setNumber] = useState("");

  const checkNumber = (number: any) => {
    const fixedNumber = number.replace(/\D/g, "");
    const prefixedNumber = fixedNumber.startsWith("55")
      ? fixedNumber
      : `55${fixedNumber}`;
    const finalLink = `https://wa.me/${prefixedNumber}`;

    setLink(finalLink);
  };

  useEffect(() => {
    checkNumber(number);
  }, [number]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-stone-700">
      <div className="text-white font-bold text-2xl w-[60%] lg:w-full text-center">
        Welcome to Fast Link for WhatsApp
      </div>
      <div className="flex flex-col gap-5 bg-slate-100 rounded-lg py-20 items-center w-[80%] md:w-[60%]">
        <div>Type the Number:</div>
        <div className="flex flex-col gap-2 w-full items-center">
          <input
            className="p-3 rounded-lg w-[90%] md:w-[60%] text-center"
            title="inputNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <div className="flex gap-2 w-[90%] md:w-[60%]">
            <button
              type="button"
              className="p-4 w-full bg-red-400 rounded-lg hover:bg-white hover:text-red-400"
            >
              Paste
            </button>
            <button
              type="button"
              className="p-4 w-full bg-blue-400 text-white rounded-lg hover:bg-white hover:text-blue-400"
              onClick={() => setNumber("")}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-slate-100 rounded-lg py-20 items-center w-[80%] md:w-[60%]">
        <div>Link:</div>
        <div className="flex  flex-col gap-2 w-full items-center">
          <div className=" bg-white py-4 px-2 rounded-lg w-[90%] md:w-[60%] text-center">
            <a href={link} target="_blank">
              {link}
            </a>
          </div>
          <div className="flex gap-2 w-[90%] md:w-[60%]">
            <button
              type="button"
              className="p-4 w-full bg-green-400 rounded-lg hover:bg-white hover:text-green-400"
            >
              Copy
            </button>
            <a href={link} target="_blank" className="w-full">
              <button
                type="button"
                className="p-4 w-full bg-yellow-400 rounded-lg hover:bg-white hover:text-yellow-400"
              >
                Open
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
