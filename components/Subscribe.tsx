import React from "react";
import Image from "next/image";
import jinx from "../public/images/jinx.png";
import { useState } from "react";

const Subscribe = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");
    console.log((e.currentTarget[0] as HTMLInputElement).value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: (e.currentTarget[0] as HTMLInputElement).value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e: unknown) {
      setErrorMsg(e as string);
      setState(3);
    }
  };
  return (
    <div
      className="relative w-full flex flex-col md:flex-row bg-gray-900 justify-between items-center text-white mt-24 mb-16"
      id="boxShadow"
    >
      {state == 2 ? (
        <p className="font-medium mt-4 text-xl text-primary">
          Thanks for subscribing!
        </p>
      ) : (
        <form className="lg:ml-24 flex space-x-4" onSubmit={subscribe}>
          <div className="relative h-11 min-w-[200px]">
            <input
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <button className="btn-third">Subscribe</button>
          {state === 3 ? <p className="text-red-500 mt-3">{errorMsg}</p> : ""}
        </form>
      )}

      <Image src={jinx} alt="jinx" className="hidden md:block" />
    </div>
  );
};

export default Subscribe;
