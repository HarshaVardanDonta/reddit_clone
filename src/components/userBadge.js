import "../App.css";
import {MdArrowDropDown} from "react-icons/md";
function UserBadge() {
  return <div className="userBadge">
    <div className="avatar"/>
    <div className="userBadge1">
        username
        <div>
            karma
        </div>
    </div>
    <MdArrowDropDown/>
  </div>;
}

export default UserBadge;
