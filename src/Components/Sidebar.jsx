import React from "react";
import SideBarItem from "./SideBarItem";
import logo from "./../Asset/app-logo-55741948.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const SideBarLinks = [
  {
    name: "Dashboard",
    icon: HomeOutlinedIcon,
  },
  {
    name: "Trade",
    icon: ImportExportIcon,
  },
  {
    name: "Trade History",
    icon: AccessTimeIcon,
  },
  {
    name: "My Channels",
    icon: FavoriteBorderIcon,
  },
  {
    name: "Settings",
    icon: SettingsIcon,
  },
  {
    name: "Membership",
    icon: VerifiedUserOutlinedIcon,
  },
];
const Sidebar = () => {
  return (
    <div>
      <img src={logo} style={{ width: "150px", marginTop: "-15px" }} alt="" />
      {SideBarLinks.map((value, index) => {
        return <SideBarItem key={index} icon={value.icon} name={value.name} />;
      })}
    </div>
  );
};

export default Sidebar;
