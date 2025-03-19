import React, { useState } from "react";

function Tab({ data, index, tabPostionHandler }) {
  return (
    <div>
      <button
        className="text-white capitalize cursor-pointer "
        onClick={tabPostionHandler}
        data-id={index}
      >
        {data.title.replace(/(\D+)(\d+)/, "$1 $2")}
      </button>

      <div></div>
    </div>
  );
}

export default Tab;
