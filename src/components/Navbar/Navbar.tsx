import { ReactNode } from "react";
import DropdownMenu from "./navbar.utils";
import "./style.css";
import {
  InterviewArrowSvg,
  MailSvg,
  TagSvg,
  UserCheckSvg,
  UserCloseSvg,
  UserVoiceSvg,
} from "../../assets/svg/navbarSvgs";

interface Props {
  icon: ReactNode;
}

const CustomeIcon = ({ icon }: Props) => {
  return <p className="navbar-icon">{icon}</p>;
};

export const Navbar = () => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="navbar-header">London Internship Program</h1>
        <p className="text-xs font-light">London</p>
      </div>
      <DropdownMenu />
      <div className="flex gap-2">
        <CustomeIcon icon={<TagSvg />} />
        <CustomeIcon icon={<UserCloseSvg />} />
        <CustomeIcon icon={<UserCheckSvg />} />
        <CustomeIcon icon={<UserVoiceSvg />} />
        <CustomeIcon icon={<MailSvg />} />
        <div className="flex items-center gap-[1px] ml-1">
          <p className="navbar-interview">Move To Video Interview I</p>
          <p className="navbar-arrow">
            <InterviewArrowSvg />
          </p>
        </div>
      </div>
    </div>
  );
};
