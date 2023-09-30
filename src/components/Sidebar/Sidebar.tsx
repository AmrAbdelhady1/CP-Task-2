import { ReactNode } from "react";
import {
  ArrowSvg,
  CalenderSvg,
  CircleSvg,
  FileSvg,
  HeartSvg,
  HomeSvg,
  NoteBookSvg,
  SettingsSvg,
  ShareSvg,
  UsersSvg,
} from "../../assets/svg/sidebarSvgs";
import "./style.css";

interface Props {
  icon: ReactNode;
  isHome?: boolean;
}

const CustomeIcon = ({ icon, isHome }: Props) => {
  return (
    <p className={`sidebar-icon-container ${isHome && "!bg-[#E9EFFF]"}`}>
      {icon}
    </p>
  );
};

export const Sidebar = () => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-container">
        <CustomeIcon icon={<CircleSvg />} />
        <CustomeIcon icon={<HomeSvg />} isHome={true} />
        <CustomeIcon icon={<UsersSvg />} />
        <CustomeIcon icon={<CalenderSvg />} />
        <CustomeIcon icon={<ShareSvg />} />
        <CustomeIcon icon={<FileSvg />} />
        <CustomeIcon icon={<NoteBookSvg />} />
        <CustomeIcon icon={<HeartSvg />} />
        <CustomeIcon icon={<ArrowSvg />} />
      </div>
      <div className="sidebar-container">
        <CustomeIcon icon={<SettingsSvg />} />
        <p className="sidebar-account">AS</p>
      </div>
    </div>
  );
};
