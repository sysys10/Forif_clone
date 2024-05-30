import Thumbnail from "../images/thumbnail.svg";
import Hackathon from "../images/hackathon.avif";
import Homecoming from "../images/homecoming.avif";

function howItWorks() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div id="howItWorks" className="w-10/12 flex flex-col gap-10">
        <div className="w-full ">
          <div className="text-center">
            <p className=" text-6xl font-bold text-gray-900"> How it works?</p>
          </div>
          <div className="text-center">
            <p className=" text-base mt-2 text-gray-600 ">
              부원 모집부터 해커톤까지. FORIF가 한 학기 동안 부원 여러분들과
              함께 만들어갈 여정에 동참해주세요.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-20 justify-between px-12 items-center">
          <div id="first-text" className="translate-y-[50px]">
            <p className=" text-3xl font-bold mb-2">
              원하는 스터디를 선택하세요
            </p>
            <p className="text-sm">
              10개 이상의 스터디에서 REACT, C++, JAVA, PYTHON 등 다양한 언어를
              배워보세요. 초심자를 위한 스터디부터 프로젝트형 스터디까지, 함께
              성장해나가요.
            </p>
          </div>
          <div id="first-image" className="translate-y-[50px]">
            <img src={Thumbnail} className="w-[600px] rounded-xl"></img>
          </div>
        </div>
        <div className="flex flex-row gap-20 justify-between px-12 items-center">
          <div id="first-image" className="translate-y-[50px]">
            <img src={Homecoming} className="w-[600px] rounded-xl"></img>
          </div>
          <div id="first-text" className="translate-y-[50px]">
            <p className=" text-3xl font-bold mb-2">다양한 행사에 참여하세요</p>
            <p className="text-sm">
              FORIF에서는 학기 중에 다양한 행사를 개최합니다. 알고리즘 대회,
              미니 해커톤, 중간 총회, MT 등에 참가해 재미와 실력 모두를
              찾아가세요.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-20 justify-between px-12 items-center">
          <div id="first-text" className="translate-y-[50px]">
            <p className=" text-3xl font-bold mb-2">한 학기의 마지막, 해커톤</p>
            <p className="text-sm">
              한 학기의 마지막을 해커톤으로 장식하세요. 서로 다른 학과, 서로
              다른 스터디가 모여 서로 배운 것을 공유합니다.
            </p>
          </div>
          <div id="first-image" className="translate-y-[50px]">
            <img src={Hackathon} className="w-[600px] rounded-xl"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default howItWorks;
