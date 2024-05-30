import logo from "../images/logo.svg";
import React from "react";
import GetScrollY from "../hooks/getScrollY";
function Nav_bar() {
  const getscrollY = GetScrollY();
  return (
    <div
      className={`${
        getscrollY != 0 && "border-b border-gray-200"
      } fixed w-full z-[9999] bg-white`}
    >
      <nav
        className={`flex items-center h-[60px] m-auto relative justify-between px-8 max-w-[1240px]`}
      >
        <ul className="flex items-center pl-2">
          <a
            className="px-3 py-2 text-sm rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            href="#howItWorks"
          >
            진행 과정
          </a>
          <a className="px-3 py-2 text-sm rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 ml-6">
            해커톤
          </a>
        </ul>
        <div className="flex absolute m-auto items-center left-47">
          <img src={logo} width={80}></img>
        </div>
        <div className="ml-auto pr-3">
          <button className=" w-28 h-12 bg-slate-900 text-white rounded-3xl hover:bg-slate-800">
            지원하기
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav_bar;
