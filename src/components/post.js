import "../App.css";
import { TbArrowBigTop } from "react-icons/tb";
import { TbArrowBigDown } from "react-icons/tb";
import { BiMessage } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
function Post(props) {
  return (
    <div className="Post">
      <div className="Post1">
        <TbArrowBigTop />
        <div className="postVotes">{props.votes}</div>

        <TbArrowBigDown />
      </div>
      <div className="Post2">
        <div className="Post21">
          <div className="communityDP" />
          &nbsp; r/{props.community}&nbsp; .&nbsp;
          <div className="Post21DarkText">
            posted by u/{props.userName} {props.hrs}hrs ago
          </div>
        </div>
        <div className="PostTitle">
          {props.title} &nbsp;<div className="flare">{props.flare}</div>
        </div>
        <div className="PostImg">
          <img className="PostImg1" src={props.img} alt=""/>
        </div>
        <div className="PostComments">
          <BiMessage />
          {props.comments} comments
          <AiOutlineGift />
          award
          <FiShare2 />
          share
          <BsBookmark />
          save
          <BiDotsHorizontalRounded />
        </div>
      </div>
    </div>
  );
}

export default Post;
