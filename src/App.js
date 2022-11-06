import "./App.css";
import { BsSearch } from "react-icons/bs";
import Logo from "./assets/logo.png";
import I001 from "./assets/awesome.jpg";
import I002 from "./assets/002.jpg";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RiCoinLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import UserBadge from "./components/userBadge";
import Post from "./components/post";
import { MdArrowDropDown } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineLink } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";
import { GiFlamer } from "react-icons/gi";
import { BiSun } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {BsSquare} from "react-icons/bs"
import {IoMdArrowDropdown} from "react-icons/io"


function App() {
  return (
    <div>
      <div className="Header">
        <img src={Logo} alt="" className="imgSize" />
        <div className="home">
          <div className="cen">
            <AiTwotoneHome />
            &nbsp; Home
          </div>
          <MdArrowDropDown />
        </div>
        <div className="headerSearch">
          <BsSearch className="whit fontSize" />
        </div>
        <div className="headerRightIcons">
          <div className="ico">
            <BsArrowUpRightCircle />
          </div>
          <div className="ico">
            <RiCoinLine />
          </div>
          <div className="dummyBorder"></div>
          <div className="ico">
            <AiOutlineMessage />
          </div>
          <div className="ico">
            <IoIosNotificationsOutline />
          </div>
          <div className="ico">
            <IoMdAdd />
          </div>
          <div className="adv ico">
            <TfiAnnouncement /> &nbsp;&nbsp; Advertise
          </div>
          <UserBadge />
        </div>
      </div>
      <div className="Body">
        <div className="postPage">
          <div className="createPost">
            <div className="createPostCircleAv"></div>
            <div className="createPostTextfield">
              <BsSearch />
            </div>
            <CiImageOn />
            <HiOutlineLink />
          </div>
          <div className="bestTop">
            <div className="bestTopButtonGroup">
              <div className="bestTopButton">
                <RiRocketLine /> &nbsp;Best
              </div>
              <div className="bestTopButton">
                <GiFlamer /> &nbsp;Hot
              </div>
              <div className="bestTopButton">
                <BiSun /> &nbsp;New
              </div>
              <div className="bestTopButton">
                <MdOutlineLeaderboard /> &nbsp;Top
              </div>
              <div>
                <BiDotsHorizontalRounded/>
              </div>
            </div>
            <div>
              <BsSquare/><IoMdArrowDropdown/>
            </div>
          </div>
          <Post
            community="React JS"
            userName="Diablo"
            votes="100"
            title="Diablo`"
            flare="flare"
            hrs="5"
            comments="40"
            img={I001}
          />
          <Post
            community="Flutter"
            userName="Diablo"
            votes="100"
            title="Interesting title"
            flare="flare"
            hrs="5"
            comments="40"
            img={I001}
          />
          <Post
            community="Flutter"
            userName="Diablo"
            votes="100"
            title="Interesting title"
            flare="flare"
            hrs="5"
            comments="40"
            img={I001}
          />
        </div>
        <div className="sidePage">
          <div className="topComm">ds</div>
          <div className="redditPremium">
            <div className="tryPreBut">Try now</div>
          </div>
          <div className="sideHome">
            Your personal Reddit frontpage. Come here to check in with your
            favorite communities
            <div className="tryPreBut">Try now</div>
            <div className="tryPreBut">Try now</div>
          </div>
          <div className="userAgr">
            User Agreement Privacy Policy Content Policy Moderator Code Of
            Conduct English Français Italiano Deutsch Español Português Reddit
            Inc © 2022. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
