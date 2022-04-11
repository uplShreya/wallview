import Image from "next/image";
import React from "react";
import computer from "../../../public/image/computer.svg";

function DeviceListing() {
  return (
    <div className="h-full bg-gray-800">
      <div>
        <p className="text-white text-lg pl-9 pt-6 h-20">All Device</p>
      </div>
      <div className="h-20 bg-slate-900 flex ">
        <div className="flex flex-row justify-between w-[11em] pl-[2em] ">
          <Image src={computer} height={40} />
          <div className="pt-5">
            <p className="text-white text-sm">Device Name</p>
            <p className="text-gray-500">P10234</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceListing;
