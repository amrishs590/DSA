import SettingsIcon from "./SettingsIcon"
import HomeIcon from "./HomeIcon";
import "./SideBar.css";
import Dice from "../Images/Dice.png";
import EditIcon from "../Images/EditIcon.jpg"

const SideBar = () => {
  return (
    <div id="SideBar">
      <div className="head-flex">
        <HomeIcon />
        <img src={Dice} alt="" />
        <img src={EditIcon} alt=""/>
      </div>

      <div id="foot-flex">
        <SettingsIcon />
      </div>
    </div>
  );
};

export default SideBar;
