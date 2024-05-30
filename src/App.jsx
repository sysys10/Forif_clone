import "./App.css";
import React from "react";
import Nav_bar from "./components/navigation-bar";
import HowItWorks from "./components/how-it-works";
import Carousel from "./components/carousel";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <header>
        <Nav_bar />
      </header>
      <main className="w-full min-h-screen h-fit">
        <section className="flex flex-col h-screen items-center max-w-7xl justify-center m-auto px-11 pt-9">
          <div className="flex flex-row justify-between items-center">
            <h1 className="pr-8 font-mono font-black text-8xl">UPGRADE</h1>
            <p className=" flex-shrink text-gray-600 font-sans font-midium items-center">
              FORIF는 전공과 상관없이 프로그래밍을 배운다는 목표를 갖고 2015년에
              창설된 한양대학교의 웹/앱 개발 중앙동아리입니다. FORIF와 함께
              프로그래밍을 향한 열정을 불태워봐요!
            </p>
          </div>
          <div className="flex flex-row justify-between items-center gap-10 overflow-hidden w-full">
            <motion.div
              className="border-2 border-gray-900 md:block hidden"
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            <h1 className="pr-8 font-black min-w-fit  font-mono text-8xl">
              YOUR PASSION
            </h1>
          </div>
          <div className="mr-auto">
            <p className=" text-2xl">2024.02.26 - 2024.03.06</p>
          </div>
        </section>

        <div className="flex flex-col gap-2 w-full mb-40 bg-[#2d2f31] text-white py-10">
          <div className="w-full text-center">
            <h2 className=" text-4xl text-gray-50">
              한양대학교 개발 중앙동아리
            </h2>
          </div>
          <div className="w-full text-center">
            <p className="text-lg text-gray-400">
              Loved By 1000+ School Fellows
            </p>
          </div>
          <div className="w-full text-center mt-4">
            <button className=" font-medium w-28 h-12 bg-white text-black rounded-3xl hover:bg-gray-100">
              지원하기
            </button>
          </div>
        </div>

        <HowItWorks></HowItWorks>
        <section className="mt-52 flex flex-col items-center h-fit">
          <div
            id="hackathon"
            className="flex flex-col  justify-start w-10/12 px-12"
          >
            <div className=" flex flex-col gap-2 w-full">
              {/*제목*/}
              <p className="text-6xl mb-2 font-semibold ">해커톤</p>
              <p className="text-xl mb-20">
                한 학기의 마지막 행사, 해커톤입니다. 각 스터디의 최종 결과물을
                공유하며 한 학기를 마무리합니다.
              </p>
              <Carousel></Carousel>
            </div>
          </div>
        </section>

        {/**앨범.. 스와이프.. */}
      </main>

      <footer>
        <div className=" mt-20 bg-gray-100 w-full mx-auto py-12 px-4">
          <p className="mt-4 text-center text-gray-500 text-xs">
            © 2024 FORIF, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
