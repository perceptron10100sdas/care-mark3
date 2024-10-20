import Link from "next/link";
import React from "react";
import Image from 'next/image';

export default function Header() {
  return (
    <div className=" flex justify-between p-3">
      {/* <Image src="/public/MediCate_trans.png" alt="no image" width={100} height={50}/> */}
      <h1 className="text-red-500 text-3xl font-bold p-4 ">MediCate</h1>
      <div className=" flex items-center space-x-4">
        <Link
          href="/"
          className="flex justify-center items-center text-lg lowercase font-sans text-neutral-900 p-2  ring-1 rounded-3xl w-36 text-center ring-neutral-900"
        >
          menu
        </Link>
        <Link href="/" className=" text-lg uppercase  text-neutral-900 p-2 ">
          FAQ
        </Link>
      </div>
      <div className=" flex items-center justify-evenly space-x-4">
        <Link href="/about" className=" p-2 text-lg">
          about
        </Link>
        <Link href="/" className="p-2 text-lg">
          services
        </Link>
        <Link href="/emergency" className="p-2 text-lg">
          emergency
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center gap-x-2 p-2 text-lg ring-1 rounded-3xl w-40 text-center ring-neutral-900"
        >
          contact{" "}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-300"></span>
          <span className="fixed flex h-3 w-3">
            {/* <span className="animate-ping fixed inline-flex h-full w-full rounded-full z-10 bg-red-300 opacity-75">
              {" "}
            </span> */}
          </span>
        </Link>
      </div>
    </div>
  );
}
