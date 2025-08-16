import React from "react";
import { SearchBox } from "./SubscribeSection";

function StayUpToDate() {
  return (
    <div
      className="h-48 px-11"
      style={{
        background: "linear-gradient(90deg, #BFEDFF 0%, #7393F2 100%)",
      }}
    >
      <div className="max-w-5xl m-auto flex justify-between items-center flex-wrap h-full">
        <div className="lg:w-2/5">
          <h2 className="text-white font-bold text-[2rem]">Stay Up-to-date!</h2>
          <p className="text-sm text-white p-4 pl-0">
            The industry insights you need delivered to your inbox monthly.
          </p>
        </div>
        <SearchBox />
      </div>
    </div>
  );
}

export default StayUpToDate;
