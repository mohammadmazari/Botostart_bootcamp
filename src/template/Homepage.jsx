import React, { useState } from "react";
import Tabs from "../data/DataTabs";
import Tab from "../components/Homepage/Tab";

function Homepage() {
  const [tabposition, setTabposition] = useState(
    localStorage.getItem("tabposition") || 1
  );

  const [borderPosition, setborderPosition] = useState(
    localStorage.getItem("borderP") || 0
  );

  const tabPostionHandler = (event) => {
    const postitionLeft = event.target.offsetLeft - 5;
    const targetId = event.target.dataset.id;
    setborderPosition(postitionLeft);
    setTabposition(targetId);
    localStorage.setItem("borderP", postitionLeft);
    localStorage.setItem("tabposition", targetId);
  };

  return (
    <div className="dark:bg-gray-900 bg-blue-500 text-black">
      <div className="relative container mx-auto px-10 ">
        <div className="py-5 w-full  md:w-[600px] gap-2 md:gap-12 text-xs md:text-[15px] mx-auto list-none flex  justify-between">
          {Tabs.map((item, index) => (
            <li key={index}>
              <Tab
                data={item}
                index={index}
                tabPostionHandler={tabPostionHandler}
              />
            </li>
          ))}
        </div>
        <div className="p-10 text-white h-[90vh] bg-blue-800">
          <p>{Tabs[tabposition].Description}</p>
        </div>
        <span
          className="absolute top-13 w-15 md:w-19 bg-white h-[2px] transition-all"
          style={{ left: +borderPosition }}
        ></span>
      </div>
    </div>
  );
}

export default Homepage;
