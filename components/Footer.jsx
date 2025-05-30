import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
        <div className="flex items-center gap-3" >
  <span className="text-xl md:text-3xl font-semibold">
    <span className="text-orange-600 font-extrabold text-5xl md:text-5xl" style={{ fontFamily: "monospace" }}>G</span>
    <span className="text-black">izmo</span>
    <span className="text-orange-600">Hive</span>
  </span>
  <Image className="w-16 md:w-20" src={assets.logo} alt="logo" />
</div>          <p className="mt-6 text-sm">
GizmoHive is your one-stop destination for the latest and greatest in tech. From cutting-edge gadgets to everyday electronics, we bring you carefully curated products that blend innovation, utility, and style. Our mission is to make smart living accessible to everyone.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>6397310248</p>
              <p>kalashchikara1215@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 ©KalashChikara All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;